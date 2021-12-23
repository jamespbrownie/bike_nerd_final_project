import UserInfo from "./UserInfo"

function Home({currentUser, userLoaded}) {
    console.log(currentUser);
    console.log(userLoaded);
    return (
        <>
        <h1>HOME</h1>
        {userLoaded ? <UserInfo userLoaded={userLoaded} currentUser={currentUser} /> : null}
        
       
        
        </>
    )
}
export default Home