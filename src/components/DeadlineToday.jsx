import Card from "./Card/Index"
import Form from "./Form"
import Input from "./Input/Index"

export default function DeadlineToday() {
    
    return (
        <section className="max-w-max">
            <Card className="mb-2">
                <Card.Title>Deadline vandaag</Card.Title>
            </Card>
            {/* <Card>
                <Form>
                    <Input type="time" id="time-deadline-today">
                        <Input.Label>Geef de uiterste tijd van voorschrijven op: &nbsp;</Input.Label>
                    </Input>
                    <hr
                    <button className="block bg-blue-800 text-white px-4 py-2">Bereken deadline</button>
                </Form>
            </Card> */}
            <Form>
                <Card className="rounded-b-none border-b border-slate-300">
                    <Input type="time" id="time-deadline-today">
                        <Input.Label>Geef de uiterste tijd van voorschrijven op: &nbsp;</Input.Label>
                    </Input>
                </Card>
                <Card className="rounded-none border-b border-slate-300">
                    <p>De deadline is : <button type="button" className="py-1 px-6 text-lg font-bold border-2 border-black rounded">720</button></p>
                </Card>
                <Card className="rounded-t-none">
                    <button className="block bg-blue-800 text-white py-2 w-full rounded">Bereken deadline</button>
                </Card>
            </Form>
        </section>

    )
}