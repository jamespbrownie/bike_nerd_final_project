import UserInfo from "./UserInfo"

function Home({currentUser, userLoaded}) {
    console.log('currentUser in HOME is', currentUser);
    console.log( "userLoaded in HOME is", userLoaded);
    return (
        <>
        <h1>HOME</h1>
        {userLoaded ? <UserInfo userLoaded={userLoaded} currentUser={currentUser} /> : "please log in"}
        
       
        
        </>
    )
}
export default Home