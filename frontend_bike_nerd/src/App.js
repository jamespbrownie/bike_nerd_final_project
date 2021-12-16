import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Outlet, Link, Route, Routes } from 'react-router-dom'
import Parts from './Components/Parts';
import Builds from './Components/Builds';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  console.log(currentUser);

  useEffect(() => {
    fetch('/me')
        .then((r) => r.json())
        .then((user) => {
          // console.log(user.name)
          setCurrentUser(user)         
        })
        .then(setUserLoaded(true))
  }, [])

  return (
    <div className="App">
      <div>
        <nav id="navbar">
          {/* {userLoaded? <Link className="navButton" to="/"> hi {currentUser.name} </Link>: null} */}
          <Link className="navButton" to="/login"> {userLoaded? "logout":"login"} </Link>
          <Link className="navButton" to="/"> home </Link>
          <Link className="navButton" to="/parts"> my parts </Link>
          <Link className="navButton" to="/builds"> my builds </Link>
        </nav>
        <Outlet/>

      </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="parts" element={<Parts />}/>
            <Route path="builds" element={<Builds />}/>
            <Route path="login" setCurrentUser={setCurrentUser} currentUser={currentUser} userLoaded={userLoaded} element={<Login />}/>
            <Route path="*" element={<p>Whoops, there's nothing here!</p>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
