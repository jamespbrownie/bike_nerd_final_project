function UserInfo(userLoaded, currentUser) {
    return (
        <>
        {userLoaded? <p>hi {currentUser.name}!</p> : null}
        {userLoaded? <img height="100px" src={currentUser.profile_icon} /> : null}
        </> 
    )
}

export default UserInfo