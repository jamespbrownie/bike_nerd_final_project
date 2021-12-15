import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login= ({setCurrentUser, currentUser, setUserLoaded, userLoaded}) => {

  let navigate = useNavigate()
  
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
        })
  }

    return ( 
<>
    {userLoaded? <h1>Hi, {currentUser.name}</h1>:<h1>please log in</h1> }
    <form onSubmit={handleSubmit}>
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
      <button class="btn btn-primary" type="submit"> log in</button> 
      {/* /* Need to find different way to redirect login */}
      <Link class="btn btn-primary" to="/"> sign up</Link> 
    </form>
      <button onClick={handleLogout}> log out</button>
</>
)}
export default Login