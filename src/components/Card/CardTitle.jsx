import classNames from "classnames"

export default function CardTitle({children, className}) {
    const css = classNames(
        "text-xl",
        "font-bold",
        className
    )
    
    return (
        <h2 className={css}>{children}</h2>
    )
}