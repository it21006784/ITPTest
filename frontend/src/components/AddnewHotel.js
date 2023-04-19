import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import mapimg from "../img/imgmap.png";
import "./AddnewHotel.css";

export default function AddnewHotel(){

    const[firstName,setFname] = useState("");
    const[lastName,setLname] = useState("");
    const[hotelName,sethotel] = useState("");
    const[description,setdescription] = useState("");
    const[checkingIn,setcheckingIn] = useState("");
    const[checkOut,setcheckOut] = useState("");
    const[minAge,setminAge] = useState("");
    const[pets,setPets] = useState("");
    const[policy,setPolicy] = useState("");
    const[googleMap,setMap] = useState("");
    const[address,setAddress] = useState("");
    const[phoneNo,setMnumber] = useState("");
    const[password,setPassword] = useState("");
    const[refund,setRefund] = useState("");
    const[price,setPrice] = useState("");
    const[wifi,setWifi] = useState(false);
    const[pool,setPool] = useState(false);
    const[laundry,setLaundry] = useState(false);
    const[park,setPark] = useState(false);
    const[ac,setac] = useState(false);
    const[frontDesk,setFrontdesk] = useState(false);
    const[restaurant,setRestaurant] = useState(false);
    const[bar,setBar] = useState(false);
    const[spa,setSpa] = useState(false);

    function sendData(e){
        e.preventDefault();

        const newhotel ={
            firstName,
            lastName, 
            hotelName, 
            description,
            checkingIn,
            checkOut,
            minAge,
            pets,
            policy,
            googleMap,
            address,
            phoneNo , 
            password, 
            refund, 
            price,
            wifi,
            pool,
            laundry,
            park,
            ac,
            frontDesk,
            restaurant,
            bar,
            spa
        }

        console.log(newhotel);
        axios.post(`http://localhost:8070/hotel/add`,newhotel).then(()=>{
            alert("Check In details added");
        }).catch((err)=>{
            alert(err);
        })
      }
      return(
        <div className="bgcont">
            <div className="fstdev">
                <Link to = "/login" className="btnalreday" >Already Signup</Link>
            </div>
            <div className="formcont">
            <form className="formclass" onSubmit={sendData}>
                
                <div className="row mb-3">
                    <label htmlFor="inputFname" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputFname"
                    onChange={(e) =>{
                        setFname(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputLname" className="col-sm-2 col-form-label">Last name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputLname"
                    onChange={(e) =>{
                        setLname(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputHotelName" className="col-sm-2 col-form-label">Hotel name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputHotelName"
                    onChange={(e) =>{
                        sethotel(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="des" className="form-label">Description about the hotel</label>
                    <textarea className="form-control" id="des" rows="3"
                    onChange={(e) =>{
                        setdescription(e.target.value);
                    }}/>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputinTime" className="col-sm-2 col-form-label">Check-In time period</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputinTime"
                    onChange={(e) =>{
                        setcheckingIn(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputoutTime" className="col-sm-2 col-form-label">Check out before</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputoutTime"
                    onChange={(e) =>{
                        setcheckOut(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputminAge" className="col-sm-2 col-form-label">Minimum Age to check in</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputminAge"
                    onChange={(e) =>{
                        setminAge(e.target.value);
                    }}/>
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Pets are</legend>
                    <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Allowed" checked
                        onChange={(e) =>{
                            setPets(e.target.value);
                        }}/>
                        <label className="form-check-label" htmlFor="gridRadios1">
                        Allowed
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Not Allowed"
                        onChange={(e) =>{
                            setPets(e.target.value);
                        }}/>
                        <label className="form-check-label" htmlFor="gridRadios2">
                        Not Allowed
                        </label>
                    </div>
                    </div>
                </fieldset>
                <div className="mb-3">
                    <label htmlFor="policy" className="form-label">Other policies</label>
                    <textarea className="form-control" id="policy" rows="3"
                    onChange={(e) =>{
                        setPolicy(e.target.value);
                    }}/>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputcity" className="col-sm-2 col-form-label">Located City</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputcity"
                    onChange={(e) =>{
                        setAddress(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputphone" className="col-sm-2 col-form-label">Phone No</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputphone"
                    onChange={(e) =>{
                        setMnumber(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword1" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword1"
                    onChange={(e) =>{
                        setPassword(e.target.value);
                    }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPasswordr" className="col-sm-2 col-form-label">Re-Enter Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPasswordr"/>
                    </div>
                </div>
                <div className="col-md-4" style={{marginBottom:'2%'}}>
                    <label htmlFor="inputState" className="form-label" style={{display: 'inline-block', marginRight: '15%'}}>Refund Policy</label>
                    <select htmlFor="inputState" className="form-select" style={{display: 'inline-block', width: '60%'}} onChange={(e) => { setRefund(e.target.value); }}>
                        <option defaultValue="Not refunable">Choose...</option>
                        <option value="Fully refundable">Fully refundable</option>
                        <option value={"Refunable"}>refundable</option>
                        <option value={"Not refunable"}>Not refunable</option>
                    </select>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputprice" className="col-sm-2 col-form-label">Price Range</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputprice"
                    onChange={(e) =>{
                        setPrice(e.target.value);
                    }}/>
                    </div>
                </div>
                <p className="topic2">Facilities</p>
                <div className="checkbox-column">
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wifi" onChange={(e) => { setWifi(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="wifi">WIFI</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="pool" onChange={(e) => { setPool(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="pool">Pool</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="laundry" onChange={(e) => { setLaundry(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="laundry">Laundry</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="park" onChange={(e) => { setPark(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="park">Parking</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ac" onChange={(e) => { setac(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="ac">A/C</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="frontdesk" onChange={(e) => { setFrontdesk(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="frontdesk">24 h frontDesk</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="restuarant" onChange={(e) => { setRestaurant(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="restuarant">Restaurant</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="bar" onChange={(e) => { setBar(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="bar">Bar</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="spa" onChange={(e) => { setSpa(e.target.checked ? true : false); }}/>
                        <label className="form-check-label" htmlFor="spa">Spa</label>
                    </div>
                    </div>
                </div>
                <br/>
                <div style={{height:'375px'}}>
                    <div className="mapleft">
                    <p className="topic2">Add GoogleMaps</p>
                    <p className="topic3">1. Open Google Maps</p>
                    <p className="topic3">2. Find your location in Google Maps</p>
                    <p className="topic3">3. Click share button</p>
                    <p className="topic3">4. Go to "Embed a map"</p>
                    <p className="topic3">5. Copy only the https://www.....</p>
                    <p className="topic3">6. Do not copy "width=600, height = 450.........."</p>
                    <p className="topic3">7. Paste URL here</p>
                    <div className="row mb-3">
                        <label htmlFor="inputurl" className="col-sm-2 col-form-label">URL</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputurl"
                        onChange={(e) =>{
                            setMap(e.target.value);
                        }}/>
                        </div>
                    </div>
                    </div>
                    <div className="mapright">
                        <img src={mapimg} style={{height:'370px', width:'370px'}}/>
                    </div>
                    
                </div>
                   
                
                <button type="submit" className="btnsbt">Add hotel</button>
                </form>
            </div>
        </div>
      )
}