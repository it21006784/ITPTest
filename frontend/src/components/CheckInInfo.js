import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./CheckInInfo.css";
import rooms from "../img/room.jpg";

export default function CheckInInfo(){

    const { id } = useParams();
    const[Room,setRoom] = useState([]);
    const[from,setFrom] = useState("");
    const[to,setTo] = useState("");
    const[firstName,setFname] = useState("");
    const[lastName,setLname] = useState("");
    const[phoneNo,setMnumber] = useState("");
    const[email,setEmail] = useState("");
    const[noOfGuest,setGuests] = useState("");

    useEffect(() => {
        const fetchRoom = async () =>{
            const res = await axios.get(`http://localhost:8070/hotel/viewRoomDetails/${id}`);
            setRoom(res.data);
            console.log(res.data)
        };
        fetchRoom();
      }, [id]);

      function sendData(e){
        e.preventDefault();
        
        const newCheckin ={
            from,
            to,
            firstName,
            lastName,
            phoneNo,
            email,
            noOfGuest,

        }

        console.log(newCheckin);
        axios.post(`http://localhost:8070/hotel/checkIn/${id}`,newCheckin).then(()=>{
            alert("Check In details added");
        }).catch((err)=>{
            alert(err);
        })
      }

    return(
        <div className="backg">
        <div className="box">
            <div className="topcontent1">
                <img src={rooms} className="img"/>
                <p className="topic">{Room.name}</p>
            </div>
            <div className="topcontent2">
                <p className="topic2" style={{marginTop : '4%'}}>Availability</p>
                {Room.numberofRooms > Room.bookedRooms ? (
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">check_circle</span>
                        <div className="text">Available</div>
                    </div>
                    ) : (
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">dangerous</span>
                        <div className="text">Not Available</div>
                    </div>
                )}
                <p className="topic2">Price</p>
                   <p style={{marginLeft:'4%'}}>  Price = Number of Nights * {Room.price}$</p>
                <p className="topic2">Features</p>
                <div style={{display: 'flex'}}>
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">crop</span>
                        <div className="text">Area {Room.area} sq ft</div>
                    </div>
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">group</span>
                        <div className="text">Sleepers {Room.sleepers}</div>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">bed</span>
                        <div className="text">{Room.typeOfBeds}</div>
                    </div>
                    <div className="icon-with-text" style={{marginLeft :'11%'}}>
                        <span className="material-symbols-outlined">balcony</span>
                        <div className="text">{Room.view}</div>
                    </div>
                </div>
            </div>
            </div>
            <div className="u=2">
            <div className="contentform">
            <form className="divform" style={{paddingTop:'2%'}} onSubmit={sendData}>
                <div className="row mb-3">
                    <br/>
                    <label htmlFor="inputfrom" className="col-sm-2 col-form-label">From</label>
                    <div className="col-sm-10">
                    <input type="date" className="form-control" id="inputfrom" 
                    onChange={(e) =>{
                        setFrom(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputto" className="col-sm-2 col-form-label">To</label>
                    <div className="col-sm-10">
                    <input type="Date" className="form-control" id="inputto" 
                    onChange={(e) =>{
                        setTo(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputfName" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                    <input type="Text" className="form-control" id="inputfName" 
                    onChange={(e) =>{
                        setFname(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputlName" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                    <input type="Text" className="form-control" id="inputlName" 
                    onChange={(e) =>{
                        setLname(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputmNumber" className="col-sm-2 col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                    <input type="Text" className="form-control" id="inputlmNumber " 
                    onChange={(e) =>{
                        setMnumber(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail"
                    onChange={(e) =>{
                        setEmail(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Number of Guests</label>
                    <select htmlFor="inputState" className="form-select" 
                    onChange={(e) =>{
                        setGuests(e.target.value);
                    }}>
                    <option defaultValue={2}>Choose...</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{marginTop:'2%',marginBottom:'2%', marginLeft:'90%', background:'linear-gradient(90.72deg, #191970, rgba(25, 25, 112, 0.77))'}}>Pay now</button>
                </form>
            </div>
            </div>
        </div>
    )
}