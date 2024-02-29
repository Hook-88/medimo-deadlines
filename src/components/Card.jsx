import classNames from "classnames"

export default function Card({children, className}) {
    const css = classNames(
        "p-4",
        "shadow",
        "bg-white",
        "rounded",
        className
    )
    
    return (
        <div className={css}>
            {children}
        </div>
    )
}