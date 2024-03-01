import classNames from "classnames"
import { createContext } from "react"

const Inputcontext = createContext()

export default function Input({className, children, type = "text", id, ...rest}) {
    const css = classNames(
        "bg-slate-200", "rounded", "p-2",
        className
    )
    
    return (
        <Inputcontext.Provider value={{id}}>
        <div className="flex items-center justify-between">
            {children}
            <input 
                type={type} 
                className={css}
                id={id}
                {...rest}
                />
        </div>
        </Inputcontext.Provider>
    )
}

export { Inputcontext }