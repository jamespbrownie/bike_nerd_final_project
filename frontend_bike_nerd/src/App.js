import './App.css';
import { useState, useEffect } from "react";
import { Outlet, Link, Route, Routes } from 'react-router-dom'
import Parts from './Components/Parts';
import Builds from './Components/Builds';
import Home from './Components/Home';
import Login from './Components/Login';
import BuildDetail from './Components/BuildDetail';
import PartDetail from './Components/PartDetail';
import SignUp from './Components/SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  console.log(currentUser);

  useEffect(() => {
    fetch('/me')
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setCurrentUser(user)         
            })
            .then(setUserLoaded(true))
          } else {
            r.json().then((errors) => {
              console.error(errors)
              setUserLoaded(false)
          })
        }
        })
  }, [])

  return (
    <div className="App">
      <div id="navbar">
        <nav >
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
            <Route path="login" setCurrentUser={setCurrentUser} currentUser={currentUser} userLoaded={userLoaded} setUserLoaded={setUserLoaded} element={<Login />}/>
            <Route path="*" element={<p>Whoops, there's nothing here!</p>}/>
            <Route path = "/builds/:build_id" element={<BuildDetail />}/>
            <Route path = "/parts/:part_id" element={<PartDetail />}/>
            <Route path="signup" element={<SignUp/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App
