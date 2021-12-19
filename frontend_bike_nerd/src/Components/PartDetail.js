import {useEffect, useState} from "react"
import {Link, useParams, useNavigate} from "react-router-dom"

function PartDetail({rerenderDeletedPart}) {
    const [part, setPart] = useState([])
    const {part_id} = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`/parts/${part_id}`)
            .then((r) => r.json())
            .then((part) => {
                setPart(part)                
            })
    }, [])

    function confirmDelete(){
        let result = window.confirm("delete this part?")
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
        <button className="deleteButton" onClick={confirmDelete}>delete part</button>
        <h1>{part.name}</h1>
        <img className="partImageDetail" src={part.image}/>
        <p>part type: {part.part_type}</p>
        <p>specs: {part.specs}</p>
        <p>notes: {part.notes}</p>

        </div>
    )
}
export default PartDetail