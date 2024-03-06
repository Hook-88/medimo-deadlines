import Card from "./Card/Card"
import Form from "./Form"
import Button from "./Button"
import DayAndTimeSelectors from "./DayAndTimeSelectors/Index"
import { useEffect, useRef, useState } from "react"

export default function DeadlineDummy({ID}) {
    const [showDeadline, setShowDeadline] = useState(false)
    const formData = useRef()
    const [deadline, setDeadline] = useState(null)

    function handleSubmit() {
        getDeadline()
        setShowDeadline(true)
    }

    function handleChange(data) {
        formData.current = data
        console.log(formData.current)
    }

    function getTimeStrInMinutes(str) {
        
        return Number(str.slice(0,2)) * 60 + Number(str.slice(3))
    }

    function getDeadline() {
        
    }

    // function getDeadlineToday() {
    //     setDeadlineDummy(
    //         (24 * 60) - getTimeStrInMinutes(formData.current[`send-${ID}-time`])
    //     )
    // }


    

    return (
        <section className="">
            <Card className="mb-1">
                <Card.Title>Deadline dummy</Card.Title>
            </Card>

            <Form onSubmit={handleSubmit}>

                <DayAndTimeSelectors 
                    ID={`send-${ID}`}
                    callback={handleChange}
                >
                    <DayAndTimeSelectors.Label>Dit is een test</DayAndTimeSelectors.Label>
                    <DayAndTimeSelectors.Body>
                        <DayAndTimeSelectors.Time />
                    </DayAndTimeSelectors.Body>
                </DayAndTimeSelectors>

                {
                    showDeadline &&
                    <Card className="mb-1 flex items-center">
                        <p>
                            De deadline is : &nbsp;
                            
                        </p>
                        <Button 
                            type="button" 
                            className="py-1 px-6 text-lg font-bold border-2 border-black bg-transparent text-black grow"
                            >
                            {deadline}
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