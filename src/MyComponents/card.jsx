import "./card.css"

const Card = (props) => {
    return ( 
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="delete-btn">
                <button className="btn btn-danger" onClick={()=>props.onClick(props.todo)}>Delete</button>
            </div>
        </div>
     );
}
 
export default Card;