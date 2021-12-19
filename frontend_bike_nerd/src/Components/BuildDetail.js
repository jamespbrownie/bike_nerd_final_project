import {useEffect, useState} from "react"
import {Link, useParams, useNavigate} from "react-router-dom"
import PartCard from "./PartCard"
import PartSelector from "./PartSelector"

function BuildDetail({rerenderDeletedBuild}) {
    const [build, setBuild] = useState([])
    const {build_id} = useParams()
    let navigate = useNavigate()
    const [partSelector, setPartSelector] = useState(false)
    const [deletePartButtons, setDeletePartButtons] = useState(false)
    const [deleted, setDeleted] = useState(false) 

    useEffect(() => {
        fetch(`/builds/${build_id}`)
            .then((r) => r.json())
            .then((build) => {
                setBuild(build)                
            })
    }, [deleted])
    console.log(build.build_parts);

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
            // navigate("/builds");
            setDeleted(!deleted)
          }
        });
    }

    function showPartSelector() {
        setPartSelector(!partSelector)
    }

    function showDeleteButtons() {
        setDeletePartButtons(!deletePartButtons)
    }

    function removePart(build_part_id){
        console.log(build_part_id);
        fetch(`/build_parts/${build_part_id}`, {
            method: "DELETE",
          }).then((res) => {
              console.log(res)
          }).then(navigate(`/builds/${build_id}`)
        );

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
        <button onClick={showDeleteButtons}> remove parts </button>

        <div id="build_detail_parts">
        {build.build_parts? build.build_parts.map((build_part) => {
            return (
                <div>
                {deletePartButtons? <button 
                onClick={() => removePart(build_part.id)}
                className="xBtn"> x </button> : null}
            <PartCard part={build_part.part}></PartCard>
                </div>
            )
        }): null}
        </div>

        </div>
    )
}
export default BuildDetail