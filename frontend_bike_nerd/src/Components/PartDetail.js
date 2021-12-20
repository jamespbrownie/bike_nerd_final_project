import {useEffect, useState} from "react"
import {Link, useParams, useNavigate} from "react-router-dom"
import PartEditForm from "./PartEditForm"

function PartDetail({rerenderDeletedPart}) {
    const [part, setPart] = useState([])
    const {part_id} = useParams()
    let navigate = useNavigate()
    const [showEditForm, setShowEditForm] = useState(false)

    useEffect(() => {
        fetch(`/parts/${part_id}`)
            .then((r) => r.json())
            .then((part) => {
                setPart(part)                
            })
    }, [showEditForm])

    function confirmDelete(){
        let result = window.confirm(`delete ${part.name}?`)
        if (result) {
            handleDeletePart()
        }
    }

    function handleDeletePart() {
        fetch(`/parts/${part_id}`, {
          method: "DELETE",
        }).then((res) => {
            console.log(res)
          if (res.ok) {
            navigate("/parts")
          }
        });
    }


    return (
        <div>
        <h1>{part.name}</h1>
        <img className="partImageDetail" src={part.image}/>

        {showEditForm? <PartEditForm setShowEditForm={setShowEditForm} part={part}/> : null}
        <p>part type: {part.part_type}</p>
        <p>specs: {part.specs}</p>
        <p>notes: {part.notes}</p>

        <button className="deleteButton" onClick={() => setShowEditForm(!showEditForm)}>edit part</button>  

        <button className="deleteButton" onClick={confirmDelete}>delete part</button>

        </div>
    )
}
export default PartDetail