import Card from "./Card/Index"
import Form from "./Form"
import Input from "./Input/Index"
import Button from "./Button"
import { useState } from "react"

export default function DeadlineToday() {
    const [showDeadline, setShowDeadline] = useState(false)
    const [formData, setFormData] = useState("")
    const [deadlineToday, setDeadlineToday] = useState(null)

    function handleSubmit() {
        getDeadlineToday()
        setShowDeadline(true)
        setFormData("")
        
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

    
    return (
        <section className="max-w-md">
            <Card className="mb-1">
                <Card.Title>Deadline vandaag</Card.Title>
            </Card>

            <Form onSubmit={handleSubmit}>

                <Card className="mb-1">
                    <Input 
                        type="time" 
                        id="time-deadline-today" 
                        required
                        onChange={handleChange}
                        value={formData}
                    >
                        <Input.Label>Geef de uiterste tijd van voorschrijven op: &nbsp;</Input.Label>
                    </Input>
                </Card>

                {
                    showDeadline &&
                    <Card className="mb-1">
                        <p>
                            De deadline is : &nbsp;
                            <Button 
                                type="button" 
                                className="py-1 px-6 text-lg font-bold border-2 border-black bg-transparent text-black"
                                >
                                {deadlineToday}
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