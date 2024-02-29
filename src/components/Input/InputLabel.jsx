import classNames from "classnames"
import { Inputcontext } from "./Input"
import { useContext } from "react"

export default function InputLabel({children, className, ...rest}) {
    const { id } = useContext(Inputcontext)
    const css = classNames(
        "select-none cursor-pointer",
        className
    )
    
    return (
        <label 
            htmlFor={id}
            className={css}
            {...rest}
        >
            {children}
        </label>
    )

}