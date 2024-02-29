import Card from "./Card/Index"
import Form from "./Form"
import Input from "./Input/Index"
import Button from "./Button"
import DaySelector from "./DaySelector"
import { useState } from "react"

export default function DeadlineBaxter() {
    const [showDeadline, setShowDeadline] = useState(false)
    const [formData, setFormData] = useState({["start-baxter-time"]: "00:00"})
    const [deadlineBaxter, setDeadlineBaxter] = useState(null)

    function handleSubmit() {
        
        if (Object.keys(formData).length === 4) {
            const totalMinutesSend = 
                getMinutsFromDayValue(formData["send-baxter-day"]) +
                getMinutesFromTimeStr(formData["send-baxter-time"])

            const totalMinutesStart = 
                getMinutsFromDayValue(formData["start-baxter-day"]) +
                getMinutesFromTimeStr(formData["start-baxter-time"])

            setDeadlineBaxter(
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
        navigator.clipboard.writeText(deadlineBaxter)
    }

    
    return (
        <section className="max-w-md">
            <Card className="mb-1">
                <Card.Title>Deadline Baxter</Card.Title>
            </Card>

            <Form onSubmit={handleSubmit}>

                <Card className="mb-1">
                    <p className="mb-3">Geef dag en tijd van sturen GDS-opdracht:</p>
                    <div className="flex">
                        <DaySelector required name="send-baxter-day" onChange={handleChange}/>
                        <Input 
                            type="time" 
                            id="send-baxter-time" 
                            required
                            onChange={handleChange}
                            value={formData["send-baxter-time"] ? formData["send-baxter-time"] : ""}
                            name="send-baxter-time"
                            >
                        </Input>
                    </div>
                </Card>

                <Card className="mb-1">
                    <p className="mb-3">Geef stardag en tijd van rol op:</p>
                    <div className="flex">
                        <DaySelector required name="start-baxter-day" onChange={handleChange}/>
                        <Input 
                            type="time" 
                            id="start-baxter-time" 
                            required
                            onChange={handleChange}
                            value={formData["start-baxter-time"]}
                            name="start-baxter-time"
                            >
                        </Input>
                    </div>
                </Card>

                {
                    showDeadline &&
                    <Card className="mb-1">
                        <p>
                            De deadline is : &nbsp;
                            <Button 
                                type="button" 
                                className="py-1 px-6 text-lg font-bold border-2 border-black bg-transparent text-black"
                                onClick={copyToClipboard}
                                >
                                {deadlineBaxter}
                            </Button> 
                        </p>
                    </Card>
                }

                <Card className="rounded-t-none">
                    <Button className="block w-full rounded">Bereken Deadline</Button>
                </Card>

            </Form>

        </section>

    )
}