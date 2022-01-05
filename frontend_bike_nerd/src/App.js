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
import NewPartForm from './Components/NewPartForm';
import NewBuildForm from './Components/NewBuildForm';
import NavBar from './Components/NavBar';
import UserInfo from './Components/UserInfo';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  // console.log(currentUser);

  useEffect(() => {
    fetch('/me')
    .then((r) => {
    console.log("response from /me is" , r)
      if (r.ok) {
            r.json().then((user) => {
              setCurrentUser(user) 
              setUserLoaded(true)
            })
          } else {
            r.json().then((errors) => {
              console.error(`error: ${errors}`)
              setUserLoaded(false)

          })
        }
        })
  }, [])

  console.log('currentUser HERE is', currentUser);


  if (currentUser !== null) {
    return (
    <div className="App">
      <NavBar currentUser={currentUser}/>
        <div>
          <Routes>
            <Route path="/" element={<Home userLoaded={userLoaded} currentUser={currentUser}/>}/>
            <Route path="user" element={<UserInfo userLoaded={userLoaded} currentUser={currentUser}  />}/>
            <Route path="parts" element={<Parts userLoaded={userLoaded}/>}/>
            <Route path="builds" element={<Builds />}/>
            <Route path="login" element={<Login userLoaded={userLoaded} setUserLoaded={setUserLoaded} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
            <Route path="*" element={<p>Whoops, there's nothing here!</p>}/>
            <Route path = "/builds/:build_id" element={<BuildDetail />}/>
            <Route path = "/parts/:part_id" element={<PartDetail />}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="part_form" element={<NewPartForm/>}/>
            <Route path="build_form" element={<NewBuildForm/>}/>
          </Routes>
        </div>
        <img id="bottomImage" height="200px" alt="bike wheel" src="https://media.istockphoto.com/vectors/bicycle-wheel-black-vector-id543977438"/>
    </div>
  )}

  if (currentUser === null) {
    console.log("currentUser is", currentUser);
    return (
    <div className="App">
      {/* {window.alert} */}
      <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      <Login setCurrentUser={setCurrentUser} currentUser={currentUser} userLoaded={userLoaded} setUserLoaded={setUserLoaded}/>
      {/* <img id="bottomImage" height="200px" alt="bike wheel" src="https://media.istockphoto.com/vectors/bicycle-wheel-black-vector-id543977438"/> */}
    </div>
  )}
}

export default App
