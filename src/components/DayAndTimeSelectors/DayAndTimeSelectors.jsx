import { useState, createContext } from "react"
import Card from "../Card/Card"

const DayAndTimeSelectorsContext = createContext()

export default function DayAndTimeSelectors({children, ID, callback = () => {}}) {
    const [selectorsData, setSelectorsData] = useState({})

    function handleInputChange(event) {
        const {name, value} = event.target

        setSelectorsData(prevData => {
            
            return {
                ...prevData,
                [name]: value
            }
        })

    }

    callback(selectorsData)

    return (
        <DayAndTimeSelectorsContext.Provider value={{ID, handleInputChange, selectorsData}}>
            <Card className="my-1">
                {children}
            </Card>
        </DayAndTimeSelectorsContext.Provider>
    )
}

export { DayAndTimeSelectorsContext }