import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import PartCard from "./PartCard"
import BikeShopMap from "./BikeShopMap"


function Parts() {

    const [edited, setEdited] = useState(true)
    const [partList, setParts] = useState([])
    const [showMap, setShowMap] = useState(false)
    const [search, setSearch] = useState("");
    const [frames, setFrames] = useState(false)
 
    
    useEffect(() => {
        fetch('/parts')
            .then((r) => r.json())
            .then((parts) => {
                // console.log(parts)
                setParts(parts)
                //console.log(parts)\
            })
    }, [edited])

    function handlePartSearch(e) {
        e.preventDefault();
        setSearch(e.target.value)
        // setParts(search)
        filterParts()
    }
    function filterParts(){
        if (frames == true) {
            return partList.filter((part) => part.frame == true) 
        }
        if (search.length > 0) {
            return partList.filter((part) => part.name.toLowerCase().includes(search.toLowerCase()) || part.part_type.toLowerCase().includes(search.toLowerCase())) 
        } else if (search === "" || search === undefined) {
            return partList
        }
    }


    // function rerenderDeletedPart(deletedPart) {
    //     setParts((parts) =>
    //       parts.filter((part) => part.id !== deletedPart.id)
    //     );
    // }
    // console.log('partList is ', {partList})
    console.log('search value is', {search});
    return (
        <>
        <h1>PARTS</h1>

        <button className="btn"> <Link className="btnLink" to="/part_form"> add a new part </Link></button>
        <button className="btn" onClick={() => setShowMap(!showMap)} >{showMap? "close map" : "i need more parts!"}</button>
        <button className="btn" onClick={() => setFrames(!frames)}> {frames?"show all parts" : "show frames only"} </button>

        {showMap? <BikeShopMap/> : null}

        <div id="part-search-bar">
            {/* <p>search for parts:</p> */}
            <form
                onChange={(e) => handlePartSearch(e)}
                onSubmit={(e) => e.preventDefault()}
            >
            <input
                id="searchBar"
                type="text"
                name="search"
                // value={valueInput}
                placeholder="search for parts by name"
                // onChange={(e) => setSearch(e.target.value)}
            />
            </form>
        </div>
        <h3>showing {filterParts().length} parts</h3>
        <div id="partCardsDiv">
        {filterParts().map((part) => {
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