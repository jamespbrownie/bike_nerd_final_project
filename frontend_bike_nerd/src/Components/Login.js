import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";


const Login= ({setUserLoaded, userLoaded, setCurrentUser, currentUser}) => {


  let navigate = useNavigate()

  const [loginError, setLoginError] = useState(false)
  const [signUpForm, showSignUpForm] = useState(false)
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res)
      if (res.ok) {
        res.json().then((user) => {
          
          setCurrentUser(user); 
          console.log(user)
          setUserLoaded(true)
          navigate("/")
        })
        // .then(() => navigate("/"))
      } else {
        res.json().then((errors) => {
          console.error(errors);
          setLoginError(true)
        });
      }
    });
  }

  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(res => { 
        console.log(res);
          if (res.ok) {
            // setCurrentUser(null)
            // setUserLoaded(false)
            console.log('you logged out')
            // setUserLoaded(false)
            console.log('setuserloaded', setUserLoaded)
            setUserLoaded(false)
            setCurrentUser(null)
            navigate("/login")
            console.log(userLoaded);
          }
        })//.then(() => setUserLoaded(false))
      }
      
  if (currentUser == null) {
    return (
        <>
        <h3> log in to start buiilding your dream bike! </h3>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div>
            <label >username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control"  placeholder="Enter Email"/>
          </div>
          <div>
            <label >password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          
          {loginError? <h3 className="error" >invalid username or password</h3>:null}
          <button  className="loginButton" type="submit"> log in</button>       
        </form>
        <button id ="logOutBtn" className="loginButton" onClick={() => showSignUpForm(!signUpForm)}> create a new account </button>
      <div id="signUpBtnDiv">
      {signUpForm? <SignUp/> : null}
      </div>
      </>
  )}

    
  return ( 
  <>
    {/* {userLoaded? <h1>Hi, {currentUser.name}</h1>:<h1>please log in</h1> } */}
      <button id ="logOutBtn" className="loginButton" onClick={handleLogout}> log out</button>

  </>
)}
export default Login