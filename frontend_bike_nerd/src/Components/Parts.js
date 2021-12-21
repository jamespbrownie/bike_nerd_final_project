import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import PartCard from "./PartCard"
import BikeShopMap from "./BikeShopMap"


function Parts() {

    const [edited, setEdited] = useState(true)
    const [PartList, setParts] = useState([])
    const [showMap, setShowMap] = useState(false)
 

    useEffect(() => {
        fetch('/parts')
            .then((r) => r.json())
            .then((parts) => {
                // console.log(parts)
                setParts(parts)
                //console.log(parts)
            })
    }, [edited])

    // function rerenderDeletedPart(deletedPart) {
    //     setParts((parts) =>
    //       parts.filter((part) => part.id !== deletedPart.id)
    //     );
    // }

    return (
        <>
        <h1>PARTS</h1>

        <button className="btn"> <Link className="btnLink" to="/part_form"> add a new part </Link></button>
        <button className="btn" onClick={() => setShowMap(!showMap)} >{showMap? "close map" : "i need more parts!"}</button>

        {showMap? <BikeShopMap/> : null}

        <div id="partCardsDiv">
        {PartList.map((part) => {
            return (
                <div className="listDiv">
                    <PartCard 
                    setEdited={setEdited} edited={edited}
                    part={part} 
                    // rerenderDeletedPart={rerenderDeletedPart}
                    />
                </div>
            )})
            }
        
        </div>
        </>
    )
}
export default Parts