import React,{useState} from "react"
import axios from "axios";
import "./AddDestinationmanager.css";

export default function AddDestinationmanager(){

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    
        function sendData(e){

            e.preventDefault();

            const newDestinationmanager = {
                fname,
                lname,
                address,
                email,
                contactNo,
                age,
                password
            }
    
            console.log(newDestinationmanager);
            axios.post("http://localhost:8070/destinationmanager/add",newDestinationmanager).then(()=>{
                alert("Destination manager added");
              }).catch((err)=>{
                alert(err);
              })
        }
    
    return(
        <div className="container">
            <form onSubmit={sendData}>

                <div> 
                    <h1>Destination Manager Registration Form</h1>
                </div>

                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager First Name</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter first name"
                    onChange={(e)=>{

                        setFname(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager Last Name</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter last name"
                    onChange={(e)=>{

                        setLname(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager Eddress</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter address"
                    onChange={(e)=>{

                        setAddress(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager Email</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter email"
                    onChange={(e)=>{

                        setEmail(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager contactNo</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter contactNo"
                    onChange={(e)=>{

                        setContactNo(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager Age</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter age"
                    onChange={(e)=>{

                        setAge(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Destination Manager Password</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter password"
                    onChange={(e)=>{

                        setPassword(e.target.value);

                    }}/>
                </div>
                <br></br>

                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    )
}