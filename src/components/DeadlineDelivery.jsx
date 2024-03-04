import Card from "./Card/Index"
import Form from "./Form"
import Input from "./Input/Index"
import Button from "./Button"
import DaySelector from "./DaySelector"
import { useState, useContext } from "react"
import { AppContext } from "../App"

export default function DeadlineDelivery() {
    const [showDeadline, setShowDeadline] = useState(false)
    const [formData, setFormData] = useState({})
    const [deadlineDelivery, setDeadlineDelivery] = useState(null)
    const {handleShowBanner} = useContext(AppContext)

    function handleSubmit() {
        
        if (Object.keys(formData).length === 3) {
            const totalMinutesSend = 
                getMinutsFromDayValue(formData["send-delivery-day"]) +
                getMinutesFromTimeStr(formData["send-delivery-time"])

            const totalMinutesStart = getMinutsFromDayValue(formData["delivery-day"])

            setDeadlineDelivery(
                totalMinutesStart > totalMinutesSend ? 
                    totalMinutesStart - totalMinutesSend : 
                    (7 * 24 * 60 ) + totalMinutesStart - totalMinutesSend
            )

            setShowDeadline(true)
        }
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function getMinutesFromTimeStr(str) {
        
        return Number(str.slice(0,2)) * 60 + Number(str.slice(3))
    }

    function getMinutsFromDayValue(dayValue) {
        
        return dayValue * 24 * 60
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(deadlineDelivery)
        handleShowBanner()
    }

    
    return (
        <section className="grow">
            <Card className="mb-1">
                <Card.Title>Deadline Leverdag</Card.Title>
            </Card>

            <Form onSubmit={handleSubmit}>

                <Card className="mb-1">
                    <p className="mb-3">Geef de uiterste dag en tijd van bestellen op:</p>
                    <div className="flex">
                        <DaySelector required name="send-delivery-day" onChange={handleChange}/>
                        <Input 
                            type="time" 
                            id="send-delivery-time" 
                            required
                            onChange={handleChange}
                            value={formData["send-delivery-time"] ? formData["send-delivery-time"] : ""}
                            name="send-delivery-time"
                            >
                        </Input>
                    </div>
                </Card>

                <Card className="mb-1">
                    <p className="mb-3">Geef stardag en tijd van rol op:</p>
                    <div className="flex">
                        <DaySelector required name="delivery-day" onChange={handleChange}/>
                    </div>
                </Card>

                {
                    showDeadline &&
                    <Card className="mb-1 flex items-center">
                        <p>
                            De deadline is : &nbsp;
                            
                        </p>
                        <Button 
                            type="button" 
                            className="py-1 px-6 text-lg font-bold border-2 border-black bg-transparent text-black grow"
                            onClick={copyToClipboard}
                            >
                            {deadlineDelivery}
                        </Button> 
                    </Card>
                }

                <Card className="rounded-t-none">
                    <Button className="block w-full rounded" normal>Bereken Deadline</Button>
                </Card>

            </Form>

        </section>

    )
}