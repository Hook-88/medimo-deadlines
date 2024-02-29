import Card from "./Card/Index"
import Form from "./Form"
import Input from "./Input/Index"
import Button from "./Button"
import { useState } from "react"

export default function DeadlineBaxter() {
    const [showDeadline, setShowDeadline] = useState(false)
    const [formData, setFormData] = useState("")
    const [deadlineBaxter, setDeadlineBaxter] = useState(null)

    function handleSubmit() {
        setShowDeadline(true)
    }

    function handleChange(event) {

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
                    <p className="mb-3">Geef en tijd van sturen GDS-opdracht:</p>
                    <div className="flex">
                        <select name="" id="" className="p-2 bg-slate-200 border-2 border-slate-200 rounded mr-2 grow" required>
                            <option selected disabled>Kies een dag</option>
                            <option value={0}>Maandag</option>
                            <option value={1}>Dinsdag</option>
                            <option value={2}>Woensdag</option>
                            <option value={3}>Donderdag</option>
                            <option value={4}>Vrijdag</option>
                            <option value={5}>Zaterdag</option>
                            <option value={6}>Zondag</option>
                        </select>
                        
                        <Input 
                            type="time" 
                            id="time-deadline-today" 
                            required
                            onChange={handleChange}
                            value={formData}
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