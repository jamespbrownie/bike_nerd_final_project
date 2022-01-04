function UserInfo({userLoaded, currentUser}) {
    
    return (
        <>
        <p>hi {currentUser.name}!</p> 
        <img alt="user icon" height="100px" src={currentUser.profile_icon} /> 
        <p>Your bio: {currentUser.bio}</p>
        
        </> 
    )
}

export default UserInfo