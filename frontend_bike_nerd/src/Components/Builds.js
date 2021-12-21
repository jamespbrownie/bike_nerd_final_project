import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import BuildCard from "./BuildCard"


function Builds() {

    const [edited, setEdited] = useState(true)
    const [buildList, setBuilds] = useState([])
 

    useEffect(() => {
        fetch('/builds')
            .then((r) => r.json())
            .then((builds) => {
                // console.log(builds)
                setBuilds(builds)
                console.log(builds)
            })
    }, [edited])

    return (
        <>
        <h1>BUILDS</h1>

        <button className="btn"> <Link class="btnLink" to="/build_form"> create a new build </Link></button>
        <div id="buildCardsDiv">
        {buildList.map((build) => {
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