import {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import PartCard from "./PartCard"

function BuildDetail() {
    const [build, setBuild] = useState([])
    const {build_id} = useParams()


    useEffect(() => {
        fetch(`/builds/${build_id}`)
            .then((r) => r.json())
            .then((build) => {
                setBuild(build)                
            })
    }, [])


    return (
        <div>
        <h1>{build.name}</h1>
            <img className="buildImageDetail" src={build.image}/>
            <p>specs: {build.specs}</p>
            <p>notes: {build.notes}</p>
            <p>current build? {build.current_build? "yes": "no"}</p>

        <h1>parts:</h1>
        {/* {build.parts.map((part) => {
            <PartCard part={part} />
        })} */}

        </div>
    )
}
export default BuildDetail