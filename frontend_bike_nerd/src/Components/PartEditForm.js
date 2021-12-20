import { useNavigate } from "react-router";
import {useEffect, useState} from "react"

function PartEditForm({part, setShowEditForm}) {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: `${part.name}`,
        image: `${part.image}`,
        specs: `${part.specs}`,
        notes: `${part.notes}`,
        part_type: `${part.part_type}`,
        frame: `${part.frame}`
        // user_id: `${garden.user_id}`
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };
    console.log(formData);
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/parts/${part.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
            }).then((res) => {
              console.log(res)
              if (res.ok) {
                res.json().then((part) => {
                  // event.target.reset() 
                  // doesnt work, not sure why
                  console.log(part);
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
        <label for="name">part name</label>
        <input type="text" class="form-control" name="name"   onChange={handleChange}  defaultValue={part.name} required />
    </div>
    <div class="form-group">
        <label for="image">image</label>
        <input type="text" name="image" defaultValue={part.image} required onChange={handleChange} class="form-control" />
    </div>
    <div class="form-group">
        <label for="specs">specs</label>
        <input type="text" name="specs" defaultValue={part.specs} required onChange={handleChange} class="form-control" />
    </div>
    <div class="form-group">
        <label for="notes">notes</label>
        <textarea type="text" name="notes" defaultValue={part.notes} required onChange={handleChange} class="form-control" />
    </div>
    <div class="form-group">
        <label for="part_type">part type</label>
        <input type="text" name="part_type" defaultValue={part.part_type} required onChange={handleChange} class="form-control" />
    </div>
    <div class="form-group">
        <label >is this part a frame?</label><br/>
        <label>true</label>
        <input type="radio" name="frame" value={true} onChange={handleChange} />
        <label>false</label>
        <input type="radio" name="frame" value={false} onChange={handleChange}  />
        
      </div>




    <div class="form-check">
    
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
   
   

    </form>   
        
        </>
    )
}
export default PartEditForm