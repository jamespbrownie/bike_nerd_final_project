import {useEffect, useState} from "react"
import {Link, useParams, useNavigate} from "react-router-dom"
import PartCard from "./PartCard"
import PartSelector from "./PartSelector"

function BuildDetail({rerenderDeletedBuild}) {
    const [build, setBuild] = useState([])
    const {build_id} = useParams()
    let navigate = useNavigate()
    const [partSelector, setPartSelector] = useState(false)


    useEffect(() => {
        fetch(`/builds/${build_id}`)
            .then((r) => r.json())
            .then((build) => {
                setBuild(build)                
            })
    }, [])
    console.log(build.parts);

    function confirmDelete(){
        let result = window.confirm("delete this build?")
        if (result) {
            handleDeleteBuild()
        }
    }
    function handleDeleteBuild() {
        fetch(`/builds/${build_id}`, {
          method: "DELETE",
        }).then((res) => {
            console.log(res)
          if (res.ok) {
            navigate("/builds");
          }
        });
    }

    function showPartSelector() {
        setPartSelector(!partSelector)
    }

    return (
        <div>
        <button className="deleteButton" onClick={confirmDelete}>delete build</button>
        <h1>{build.name}</h1>
            <img className="buildImageDetail" src={build.image}/>
            <p>specs: {build.specs}</p>
            <p>notes: {build.notes}</p>
            <p>current build? {build.current_build? "yes": "no"}</p>

        <h1>parts:</h1>
        <button onClick={showPartSelector}>add parts</button>
        {partSelector? <PartSelector build={build} /> : null}


        <div id="build_detail_parts">
        {build.parts? build.parts.map((part) => {
            return (
                <>
            <PartCard part={part} />
                </>
            )
        }): null}
        </div>

        </div>
    )
}
export default BuildDetail