import { Link } from "react-router-dom"

function BuildCard({build}) {
    const {id} = build
    return (
        <div>
        <Link class="redirect" to={`/builds/${id}`}> 
            <img className="buildCardImage" src={build.image}/>
            <h1 className="buildCardName" >{build.name}</h1>
        </Link>
        </div>
    )

}

export default BuildCard