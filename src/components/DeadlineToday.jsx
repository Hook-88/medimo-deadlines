import Card from "./Card/Index"
import Form from "./Form"
import Input from "./Input/Index"
import Button from "./Button"

export default function DeadlineToday() {
    
    return (
        <section className="max-w-max">
            <Card className="mb-1">
                <Card.Title>Deadline vandaag</Card.Title>
            </Card>
            <Form>
                <Card className="mb-1">
                    <Input type="time" id="time-deadline-today">
                        <Input.Label>Geef de uiterste tijd van voorschrijven op: &nbsp;</Input.Label>
                    </Input>
                </Card>
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
                <Card className="rounded-t-none">
                    <Button className="block w-full rounded">Bereken Deadline</Button>
                </Card>
            </Form>
        </section>

    )
}