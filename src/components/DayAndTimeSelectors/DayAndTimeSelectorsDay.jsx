import { useContext } from "react"
import DaySelector from "../DaySelector"
import { DayAndTimeSelectorsContext } from "./DayAndTimeSelectors"

export default function DayAndTimeSelectorsDay() {
    const { ID, handleInputChange } = useContext(DayAndTimeSelectorsContext)
    
    return (
        <DaySelector required name={`${ID}-day`} onChange={handleInputChange} />
    )
}