import UserInfo from "./UserInfo"

function Home({currentUser, userLoaded}) {
    console.log('currentUser in HOME is', currentUser);
    console.log( "userLoaded in HOME is", userLoaded);
    return (
        <>
        <div>
            <div id="home-page">
            <h1 id="title">bike nerd</h1>
            <h1 id="emojis">🚲🔬</h1>
            <div id="mission-statement">
            <h2>our mission statement</h2>
            <p>we know loving bikes can get messy. thats why we designed bike nerd to help you keep track of all your parts and builds. mix and match parts to see what a potential build could be, or catalogue your old builds. if you need a tuneup or new parts, use the google maps plugin to quickly locate your nearest bike shop</p>
            </div>
            <img width="100%" alt="bike photo" src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </div>
        </div>
       
        
        </>
    )
}
export default Home