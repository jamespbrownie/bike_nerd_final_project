import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login= ({setCurrentUser, currentUser, setUserLoaded, userLoaded}) => {

  let navigate = useNavigate()

  const [loginError, setLoginError] = useState(false)
  
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
          
          // setCurrentUser(user); 
          console.log(user)

        })
        .then(() => navigate("/"))
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
            navigate("/login")
          }
        })//.then(() => setUserLoaded(false))
  }

    return ( 
<>
    {/* {userLoaded? <h1>Hi, {currentUser.name}</h1>:<h1>please log in</h1> } */}
    <form id="loginForm" onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} class="form-control"  placeholder="Enter Email"/>
      
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">password</label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-check">
      
      </div>
      {loginError? <h3 className="error" >invalid username or password</h3>:null}
      <button  className="loginButton" type="submit"> log in</button> 
      {/* /* Need to find different way to redirect login */}
      
    </form>
      <button id ="logOutBtn" className="loginButton" onClick={handleLogout}> log out</button>
      <div id="signUpBtnDiv">
      <Link  id="signUpBtn" to="/signup"> create a new account </Link> 
      </div>

</>
)}
export default Login