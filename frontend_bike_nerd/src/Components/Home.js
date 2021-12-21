import UserInfo from "./UserInfo"

function Home({currentUser, userLoaded}) {
    return (
        <>
        <h1>HOME</h1>
        {userLoaded? <UserInfo userLoaded={userLoaded} currentUser={currentUser} /> : null}
        
       
        
        </>
    )
}
export default Home