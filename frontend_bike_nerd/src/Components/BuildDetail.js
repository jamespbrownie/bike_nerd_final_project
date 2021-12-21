import {useEffect, useState} from "react"
import {Link, useParams, useNavigate} from "react-router-dom"
import PartCard from "./PartCard"
import PartSelector from "./PartSelector"
import BuildEditForm from "./BuildEditForm"

function BuildDetail({rerenderDeletedBuild}) {
    const [build, setBuild] = useState([])
    const {build_id} = useParams()
    let navigate = useNavigate()
    const [partSelector, setPartSelector] = useState(false)
    const [deletePartButtons, setDeletePartButtons] = useState(false)
    // const [deletedBuildPart, setDeletedBuildPart] = useState(false) 
    const [showEditForm, setShowEditForm] = useState(false)


    useEffect(() => {
        fetch(`/builds/${build_id}`)
            .then((r) => r.json())
            .then((build) => {
                setBuild(build)                
            })
    }, [showEditForm])
    console.log(build.build_parts);

    function confirmDelete(){
        let result = window.confirm(`are you sure you want to delete ${build.name}?`)
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
            // setDeleted(!deleted)
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
              setBuild(build)
          }).then(navigate(`/builds/${build_id}`))
    }


    return (
        <div>
        <h1>{build.name}</h1>
            <img className="buildImageDetail" src={build.image}/>
            {showEditForm? <BuildEditForm setShowEditForm={setShowEditForm} build={build}/> : null}
            <p>notes: {build.notes}</p>
            <p>current build? {build.current_build? "yes": "no"}</p>

            <button className="btn" onClick={() => setShowEditForm(!showEditForm)}>edit build</button> 
            <button className="btn" onClick={confirmDelete}>delete build</button>

        <h1>parts:</h1>
        <button className="btn" onClick={showPartSelector}>add parts to build</button>
        {partSelector? <PartSelector build={build} /> : null}
        <button className="btn" onClick={showDeleteButtons}> remove parts from build </button>

        <div id="build_detail_parts">
        {build.build_parts? build.build_parts.map((build_part) => {
            return (
                <div className="listDiv">
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