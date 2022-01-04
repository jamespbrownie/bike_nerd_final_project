import { Link } from "react-router-dom"

function PartCard({part}) {
    const {id} = part
    return (
        <div>
        <Link class="redirect" to={`/parts/${id}`}>
            <img alt="part" className="partCardImage" src={part.image}/>
            <h1 className="partCardName">{part.name}</h1>
            <h3 className="partCardType"> {part.part_type}</h3>
        </Link>
        </div>
    )

}

export default PartCard