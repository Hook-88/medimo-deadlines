import Card from "./Card/Index"
import Form from "./Form"
import Input from "./Input/Index"
import Button from "./Button"
import { useState, useContext } from "react"
import { AppContext } from "../App"

export default function DeadlineToday() {
    const [showDeadline, setShowDeadline] = useState(false)
    const [formData, setFormData] = useState("")
    const [deadlineToday, setDeadlineToday] = useState(null)
    const {handleShowBanner} = useContext(AppContext)

    function handleSubmit() {
        getDeadlineToday()
        setShowDeadline(true)
    }

    function handleChange(event) {
        setFormData(event.target.value)   
    }

    function getTimeStrInMinutes(str) {
        
        return Number(str.slice(0,2)) * 60 + Number(str.slice(3))
    }

    function getDeadlineToday() {
        setDeadlineToday(
            (24 * 60) - getTimeStrInMinutes(formData)
        )
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(deadlineToday)
        handleShowBanner()
    }

    
    return (
        <section className="">
            <Card className="mb-1">
                <Card.Title>Deadline vandaag</Card.Title>
            </Card>

            <Form onSubmit={handleSubmit}>

                <Card className="mb-1 flex items-center">
                    <Input 
                        type="time" 
                        id="time-deadline-today" 
                        required
                        onChange={handleChange}
                        value={formData}
                        className="w-[4.3em] px-0 text-center"
                    >
                        <Input.Label>Geef de uiterste tijd van voorschrijven op: &nbsp;</Input.Label>
                    </Input>
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
                                {deadlineToday}
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