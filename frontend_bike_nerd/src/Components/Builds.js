import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import BuildCard from "./BuildCard"


function Builds() {

    const [edited, setEdited] = useState(true)
    const [buildList, setBuilds] = useState([])
    const [current, setCurrent] = useState(false)
 
    console.log('current is now ', current)
    useEffect(() => {
        fetch('/builds')
            .then((r) => r.json())
            .then((builds) => {
                // console.log(builds)
                setBuilds(builds)
                console.log(builds)
            })
    }, [edited])

    function filterBuilds () {
        if (current === true) {
            return buildList.filter((build) => build.current_build == true )
        } else {
            return buildList
        }
    }


    return (
        <>
        <h1 id="title" >BUILDS</h1>

        <button className="btn"> <Link class="btnLink" to="/build_form"> create a new build </Link></button>

        <button className="btn" onClick={() => setCurrent(!current)} > {current?"show all builds" :  "show current builds" } </button>

        <div id="buildCardsDiv">
        {filterBuilds().map((build) => {
            return (
                <div className="listDiv">
                    <BuildCard 
                    setEdited={setEdited} edited={edited}
                    build={build}
                    />
                </div>
            )})
            }
        
        </div>
        </>
    )
}
export default Builds