import classNames from "classnames"

export default function Button({children, className, normal, onClick, ...rest}) {
    const css = classNames(
        className,
        "py-2", 
        "px-4", 
        "rounded",
        {"bg-action" : normal},
        {"text-white": normal}
    )
    
    return (
        <button
            className={css}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

// "bg-action", 
// "text-white",