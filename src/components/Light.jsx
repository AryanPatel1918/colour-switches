export default function Light(props) {
    
    return (
        <div 
            className={`light ${props.on ? "on" : ""}`}
            style={{ backgroundColor: props.colour, boxShadow: props.on ? `0 0 12px ${props.colour}` : "none" }}
            onClick={() => props.toggle(props.id)}>
        </div>
    )
}