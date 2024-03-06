import { useContext } from "react"
import Input from "../Input/Index"
import { DayAndTimeSelectorsContext } from "./DayAndTimeSelectors"

export default function DayAndTimeSelectorsTime() {
    const {ID, handleInputChange, selectorsData} = useContext(DayAndTimeSelectorsContext)

    return (
        <Input 
            type="time" 
            id={`${ID}-time`}
            required
            onChange={handleInputChange}
            value={selectorsData[`${ID}-time`] ? selectorsData[`${ID}-time`] : ""}
            name={`${ID}-time`}
            className="w-[4.3em] px-0 text-center"
            >
        </Input>
    )
    
}