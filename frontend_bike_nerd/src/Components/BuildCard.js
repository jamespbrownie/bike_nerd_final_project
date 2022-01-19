import { Link } from "react-router-dom"

function BuildCard({build}) {
    const {id} = build
    return (
        <div className="cardBackground">
        <Link class="redirect" to={`/builds/${id}`}> 
            <img alt="build" className="buildCardImage" src={build.image}/>
            <h1 className="buildCardName" >{build.name}</h1>
        </Link>
        </div>
    )

}

export default BuildCard