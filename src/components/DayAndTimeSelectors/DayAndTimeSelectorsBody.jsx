import Input from "../Input/Index"
import DaySelector from "../DaySelector"
import { useContext } from "react"
import { DayAndTimeSelectorsContext } from "./DayAndTimeSelectors"

export default function DayAndTimeSelectorsBody({children}) {
    const { ID, handleInputChange, selectorsData } = useContext(DayAndTimeSelectorsContext)

    return (
        <div className="flex">
            {children}
            {/* <Input 
                type="time" 
                id={`${ID}-time`}
                required
                onChange={handleInputChange}
                value={selectorsData[`${ID}-time`] ? selectorsData[`${ID}-time`] : ""}
                name={`${ID}-time`}
                className="w-[4.3em] px-0 text-center"
                >
            </Input> */}
        </div>
    )
}