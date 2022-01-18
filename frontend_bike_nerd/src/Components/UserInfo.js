import { useState, useEffect } from "react";
function UserInfo({userLoaded, currentUser}) {
    console.log("current user is", currentUser);
    console.log("currentUser in userInfo is", currentUser);

    const [buildList, setBuilds] = useState([])

    useEffect(() => {
        fetch('/builds')
            .then((r) => r.json())
            .then((builds) => {
                // console.log(builds)
                setBuilds(builds)
            })
    }, [])



    return (
        <>
        <div id="user-info">
        <img id="user-icon" alt="user icon" height="100px" src={currentUser.profile_icon} /> 
        <p>hi {currentUser.name}!</p> 
        <p className="userbio">you have {buildList.length} builds, {buildList.filter((build) => build.current_build).length} of them are current builds</p>
        <p className="userbio">Your bio: {currentUser.bio}</p>
        </div>
        </> 
    )
}

export default UserInfo