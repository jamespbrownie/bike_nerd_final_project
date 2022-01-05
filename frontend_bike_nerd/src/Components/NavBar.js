import { Outlet, Link } from "react-router-dom"
function NavBar({userLoaded, currentUser}) {
    console.log("userLoaded in NavBar is", userLoaded);
    console.log("currentUser in NavBar is", currentUser);
    return (
        <div id="navbar">
            <nav >
            {/* {userLoaded? <Link className="navButton" to="/"> hi {currentUser.name} </Link>: null} */}
            {currentUser? <Link className="navButton" to="/user"> hi {currentUser.name} </Link> :null}
            <Link className="navButton" to="/login"> {currentUser? "logout":"login"} </Link>
            <Link className="navButton" to="/"> home </Link>
            <Link className="navButton" to="/parts"> my parts </Link>
            <Link className="navButton" to="/builds"> my builds </Link>
            </nav>
        <Outlet/>

        </div>
    )
}

export default NavBar