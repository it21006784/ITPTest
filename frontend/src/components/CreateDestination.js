import React,{useState} from "react"
import axios from "axios";
import { Link , useLocation} from 'react-router-dom';

export default function CreateDestination(){

    const location = useLocation();
    const image = location.state?.image;

    const [packageType, setPackageType] = useState("");
    const [packageDescription, setPackageDescription] = useState("");
    const [location1, setLocation1] = useState("");
    const [locationDescription1, setLocationDescription1] = useState("");
    const [location2, setLocation2] = useState("");
    const [locationDescription2, setLocationDescription2] = useState("");
    const [location3, setLocation3] = useState("");
    const [locationDescription3, setLocationDescription3] = useState("");
    const [location4, setLocation4] = useState("");
    const [locationDescription4, setLocationDescription4] = useState("");
    const [location5, setLocation5] = useState("");
    const [locationDescription5, setLocationDescription5] = useState("");
   
   
    function sendData(e){

        e.preventDefault();

        const newDestinationCreate = {
        packageType,
        packageDescription,
        location1,
        locationDescription1,
        location2,
        locationDescription2,
        location3,
        locationDescription3,
        location4,
        locationDescription4,
        location5,
        locationDescription5
        

        }

        console.log(newDestinationCreate);
            axios.post("http://localhost:8070/destinationCreate/add",newDestinationCreate).then(()=>{
                alert("New Destination Created");
              }).catch((err)=>{
                alert(err);
              })
    }

    return(
        <div className="container">
            <form onSubmit={sendData}>

                <div> 
                    <h1>Create New Destination Packages</h1>
                    {image && <img src={`images/${image}`} alt="advertisement" />}
                </div>

                <br></br>

                <div className= "form-group">
                    <lable for="name">Package Type</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter package type"
                    onChange={(e)=>{

                        setPackageType(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Package Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter package description"
                    onChange={(e)=>{

                        setPackageDescription(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">First Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter first location"
                    onChange={(e)=>{

                        setLocation1(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">First Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter first location description "
                    onChange={(e)=>{

                        setLocationDescription1(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Second Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter second location"
                    onChange={(e)=>{

                        setLocation2(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Second Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter second location description"
                    onChange={(e)=>{

                        setLocationDescription2(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Third Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter third location"
                    onChange={(e)=>{

                        setLocation3(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Third Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter third location description"
                    onChange={(e)=>{

                        setLocationDescription3(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Fourth Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fourth location"
                    onChange={(e)=>{

                        setLocation4(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Fourth Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fourth location description"
                    onChange={(e)=>{

                        setLocationDescription4(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Fifth Location</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fifth location"
                    onChange={(e)=>{

                        setLocation5(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Fifth Location Description</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter fifth location description"
                    onChange={(e)=>{

                        setLocationDescription5(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div id="button1">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <br></br>
                
                <div id="button2">
                <button type="submit" class="btn btn-primary">Cancel</button>
                </div>
            </form>
        </div>
    )
}