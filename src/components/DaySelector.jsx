export default function DaySelector({name, ...rest}) {

    return (
        <select 
            name={name} 
            className="p-2 bg-slate-200 border-2 border-slate-200 rounded mr-2 grow" 
            defaultValue={false}
            {...rest}
        >
            <option value={false} disabled>Kies een dag</option>
            <option value={0}>Maandag</option>
            <option value={1}>Dinsdag</option>
            <option value={2}>Woensdag</option>
            <option value={3}>Donderdag</option>
            <option value={4}>Vrijdag</option>
            <option value={5}>Zaterdag</option>
            <option value={6}>Zondag</option>
        </select>
    )
}