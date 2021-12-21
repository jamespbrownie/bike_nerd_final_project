import PartCard from "./PartCard"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"


function PartSelector({build}) {

    const [PartList, setParts] = useState([])

    
    useEffect(() => {
        fetch('/parts')
            .then((r) => r.json())
            .then((parts) => {
                // console.log(parts)
                setParts(parts)
                console.log(parts)
            })
    }, [])

    function confirmAddPart(part){
        let result = window.confirm(`add ${part.name} to ${build.name}?`)
        if (result) {
            let newBuildPart = {build_id: build.id, part_id: part.id }
            addPart(newBuildPart)
        }
    }
    function addPart(newBuildPart){
        fetch("/build_parts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBuildPart),
          }).then((res) => res.json()).then((buildPart) => {
              console.log(buildPart);
          })
    }


    return (
        <>
        <h1>parts selector</h1>
        <div id="partCardsDiv">
        {PartList.map((part) => {
            return (
                <div className="listDiv">
                    <PartCard
                    part={part} 
                    />
                    <button className="btn" onClick={() => confirmAddPart(part)}> add to build </button>
                </div>
            )})
            }
        
        </div>

        </>
    )   
}

export default PartSelector