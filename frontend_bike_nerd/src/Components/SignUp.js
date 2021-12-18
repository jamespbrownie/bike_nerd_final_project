import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const [formError, setFormError] = useState(false)
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
            .then(() => navigate("/login"))
          } else {
            res.json().then((errors) => {
              console.error(errors);
              setFormError(true)
            });
          }
        });
    }
      


    return (
        <>
        <p>signup</p>
        <form id="signUpForm" onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="exampleInputEmail1">name</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} class="form-control"  placeholder="Enter Email"/>
      
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">password</label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-check">
      
      </div>
      {formError? <h3 className="error" >invalid form data</h3>:null}
      <button  className="loginButton" type="submit"> log in</button> 
      {/* /* Need to find different way to redirect login */}
      
    </form>

        </>
    )
}
export default SignUp