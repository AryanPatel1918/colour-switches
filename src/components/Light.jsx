export default function Light(props) {
    
    return (
        <div 
            className={`light ${props.on ? "on" : ""}`}
            style={{ backgroundColor: props.colour }}
            onClick={() => props.toggle(props.id)}>
        </div>
    )
}