import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const [formError, setFormError] = useState(false)
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        profile_icon: "",
        bio: "",
      });
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/signup", {
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
        <label >name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} class="form-control"  placeholder="your name"/>
      </div>

      <div class="form-group">
        <label >email</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} class="form-control"  placeholder="email"/>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">password</label>
        <input type="text" name="password" value={formData.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" placeholder="password"/>
      </div>

      <div class="form-group">
        <label >profile photo</label>
        <input type="text" name="profile_icon" value={formData.profile_icon} onChange={handleChange} class="form-control"  placeholder="enter a URL"/>
      </div>

      <div class="form-group">
        <label >bio</label>
        <input type="text" name="bio" value={formData.bio} onChange={handleChange} class="form-control"  placeholder="write about yourself"/>
      </div>
      
      {formError? <h3 className="error" >invalid form data</h3>:null}

      <button  className="loginButton" type="submit"> submit</button> 
      {/* /* Need to find different way to redirect login */}
      
    </form>

        </>
    )
}
export default SignUp