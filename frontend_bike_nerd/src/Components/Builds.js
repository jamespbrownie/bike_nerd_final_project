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

    function handleDeleteBuild(deletedBuild) {
        setBuilds((builds) =>
          builds.filter((build) => build.id !== deletedBuild.id)
        );
    }

    return (
        <>
        <h1>BUILDS</h1>

        <button class= "redirect_btn"> <Link class="redirect" to="/build_form"> create new build </Link></button>
        <div id="buildCardsDiv">
        {buildList.map((build) => {
            return (
                <div className="listDiv">
                    <BuildCard 
                    setEdited={setEdited} edited={edited}
                    build={build} 
                    onDeleteBuild={handleDeleteBuild}
                    />
                </div>
            )})
            }
        
        </div>
        </>
    )
}
export default Builds