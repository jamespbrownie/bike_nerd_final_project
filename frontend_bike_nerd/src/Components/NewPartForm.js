import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NewPartForm() {

    const [formError, setFormError] = useState(false)
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        specs: "",
        notes: "",
        part_type: "",
        frame: ""
      });
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        console.log(formData)
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/parts", {
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
            .then(() => navigate("/parts"))
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
        <label >image</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange} class="form-control"  placeholder="image URL"/>
      </div>

      <div class="form-group">
        <label >specs</label>
        <input type="text" name="specs" value={formData.specs} onChange={handleChange} class="form-control" placeholder="specs"/>
      </div>

      <div class="form-group">
        <label >notes</label>
        <input type="text" name="notes" value={formData.notes} onChange={handleChange} class="form-control"  placeholder="notes"/>
      </div>

      <div class="form-group">
        <label >part_type</label>
        <input type="text" name="part_type" value={formData.part_type} onChange={handleChange} class="form-control"  placeholder="what kind of part is this?"/>
      </div>

      <div class="form-group">
        <label >is this part a frame?</label><br/>
        <label>true</label>
        <input type="radio" name="frame" value={formData.frame} onChange={handleChange} class="form-control"  placeholder="what kind of part is this?"/>
        <label>false</label>
        <input type="radio" name="frame" value={formData.frame} onChange={handleChange}  />
        
      </div>
      
      {formError? <h3 className="error" >invalid form data</h3>:null}

      <button  className="loginButton" type="submit"> submit</button> 
      {/* /* Need to find different way to redirect login */}
      
    </form>

        </>
    )
}
export default NewPartForm