import { useNavigate } from "react-router";
import {useEffect, useState} from "react"

function BuildEditForm({build, setShowEditForm}) {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        notes: "",
        current_build: ""
        // user_id: `${garden.user_id}`
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/builds/${build.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
            }).then((res) => {
              console.log(res)
              if (res.ok) {
                res.json().then((build) => {
                  // event.target.reset() 
                  // doesnt work, not sure why
                  console.log(build);
                  //navigate(`/parts/${part.id}`)
                  setShowEditForm(false)
                })              
              } else {
                res.json().then((errors) => {
                  console.error(errors);
                });
              }
            });
          
          }



    return (
    <>
    <form onSubmit={handleSubmit}>
    <div class="form-group">
        <label for="name">build name</label>
        <input type="text" class="form-control" name="name" defaultValue={build.name} required onChange={handleChange} />
    </div>
    <div class="form-group">
        <label for="image">image</label>
        <input type="text" name="image"  onChange={handleChange} class="form-control"  defaultValue={build.image} required />
    </div>
    <div class="form-group">
        <label for="notes">notes</label>
        <textarea type="text" name="notes"  onChange={handleChange} class="form-control" defaultValue={build.notes} required />
    </div>

    <div class="form-group">
        <label >is this a current build?</label><br/>
        <label>true</label>
        <input type="radio" name="current_build" value={true} onChange={handleChange} />
        <label>false</label>
        <input type="radio" name="current_build" value={false} onChange={handleChange}  />
      </div>




    <div class="form-check">
    
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
   
   

    </form>   
        
        </>
    )
}
export default BuildEditForm