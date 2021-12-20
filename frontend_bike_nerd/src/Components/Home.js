function Home({currentUser, userLoaded}) {
    return (
        <>
        <h1>HOME</h1>

        {userLoaded? <p>hi {currentUser.name}!</p> : null}
        {userLoaded? <image src={currentUser.profile_icon}/> : null}
       
        
        </>
    )
}
export default Home