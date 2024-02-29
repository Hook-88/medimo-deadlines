import Card from "./Card/Index"
import Form from "./Form"
import Input from "./Input/Index"
import Button from "./Button"
import { useState } from "react"

export default function DeadlineToday() {
    const [showDeadline, setShowDeadline] = useState(false)

    function handleSubmit() {
        setShowDeadline(true)
    }
    
    return (
        <section className="max-w-md">
            <Card className="mb-1">
                <Card.Title>Deadline vandaag</Card.Title>
            </Card>

            <Form onSubmit={handleSubmit}>

                <Card className="mb-1">
                    <Input type="time" id="time-deadline-today" required>
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
                                720
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