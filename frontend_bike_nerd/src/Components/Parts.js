import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import PartCard from "./PartCard"
import BikeShopMap from "./BikeShopMap"


function Parts() {

    const [edited, setEdited] = useState(true)
    const [partList, setParts] = useState([])
    const [showMap, setShowMap] = useState(false)
    const [search, setSearch] = useState("");
 
    
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
        if (search.length > 0) {
            return partList.filter((part) => part.name.toLowerCase().includes(search.toLowerCase()))
        } else if (search === "" || search === undefined) {
            return partList
        }
    }

    // const handleSearch = (e, value) => {
    //     e.preventDefault();
    //     setSearch(value);
    // };

    // function handleSearch() {
    //     if (search.length > 0) {
    //         setParts(partList.filter((part) => part.name.toLowerCase().includes(search.toLowerCase())))
    //     } else if (search === "") {
    //         setParts(partList)
    //     }
    // }

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

        {showMap? <BikeShopMap/> : null}

        <div id="part-search-bar">
            {/* <p>search for parts:</p> */}
            <form
                onChange={(e) => handlePartSearch(e)}
                onSubmit={(e) => handlePartSearch(e)}
            >
            <input
                type="text"
                name="search"
                // value={valueInput}
                placeholder="search for parts by name"
                // onChange={(e) => setSearch(e.target.value)}
            />
            </form>
        </div>

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