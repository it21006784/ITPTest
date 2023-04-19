import React,{useState} from "react"
import axios from "axios";

export default function ReserveDestination(){

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [selectedDestination, setSelectedDestination] = useState("");
    const [date, setDate] = useState("");
    const [noOfDays, setNoOfDays] = useState("");

    function sendData(e){

        e.preventDefault();

        const newDestinationReserve = {
            fname,
            lname,
            address,
            email,
            contactNo,
            selectedDestination,
            date,
            noOfDays

        }

        console.log(newDestinationReserve);
        axios.post("http://localhost:8070/destinationReserve/add",newDestinationReserve).then(()=>{
                alert("Destination Reserved");
              }).catch((err)=>{
                alert(err);
              })
    }

    return(
        <div className="container">
            <form onSubmit={sendData}>

                <div> 
                    <h1>Reserve Destination </h1>
                </div>

                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer First Nname</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter first name"
                    onChange={(e)=>{

                        setFname(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer Last Name</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter last name"
                    onChange={(e)=>{

                        setLname(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer Eddress</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter address"
                    onChange={(e)=>{

                        setAddress(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer Email</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter email"
                    onChange={(e)=>{

                        setEmail(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Customer ContactNo</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter contactNo"
                    onChange={(e)=>{

                        setContactNo(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Selected Destination</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter selected destination"
                    onChange={(e)=>{

                        setSelectedDestination(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Date</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter date"
                    onChange={(e)=>{

                        setDate(e.target.value);

                    }}/>
                </div>
                <br></br>

                <div className= "form-group">
                    <lable for="name">Number Of Days</lable>
                    <input type="text" className="form-control" id="name" placeholder="  Enter no of days"
                    onChange={(e)=>{

                        setNoOfDays(e.target.value);

                    }}/>
                </div>
                <br></br>

                <button type="submit" class="btn btn-primary">Save</button>
                <br></br>
                <br></br>
                <button type="submit" class="btn btn-primary">Delete</button>
                <br></br>
                <br></br>
                <button type="submit" class="btn btn-primary">PayNow</button>
            </form>
        </div>
    )
}