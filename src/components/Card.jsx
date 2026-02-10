import "./Card.css"
export const Card = ({nombre, precio, descripcion}) => {
    return (
        <div className="card">
            <h1>{nombre}</h1>
            <h2>{precio}</h2>
            <h3>{descripcion}</h3>
            
        </div>
    )
}