import {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"

function PartDetail() {
    const [part, setPart] = useState([])
    const {part_id} = useParams()


    useEffect(() => {
        fetch(`/parts/${part_id}`)
            .then((r) => r.json())
            .then((part) => {
                setPart(part)                
            })
    }, [])


    return (
        <div>
        <h1>{part.name}</h1>
        <img className="partImageDetail" src={part.image}/>
        <p>part type: {part.part_type}</p>
        <p>specs: {part.specs}</p>
        <p>notes: {part.notes}</p>

        </div>
    )
}
export default PartDetail