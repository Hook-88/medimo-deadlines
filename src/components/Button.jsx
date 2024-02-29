import classNames from "classnames"

export default function Button({children, className, onClick, ...rest}) {
    const css = classNames(
        "py-2 px-4 rounded bg-blue-800 text-white",
        className
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