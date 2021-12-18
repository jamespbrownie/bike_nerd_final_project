import { Link } from "react-router-dom"

function PartCard({part}) {
    const {id} = part
    return (
        <div>
        <Link class="redirect" to={`/parts/${id}`}>
            <img className="partCardImage" src={part.image}/>
            <h1 className="partCardName">{part.name}</h1>
            {/* <p>{part.part_type}</p> */}
        </Link>
        </div>
    )

}

export default PartCard