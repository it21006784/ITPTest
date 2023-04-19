import React, { useState } from "react";
import axios from "axios";
import "./InsuranceApplicationForm.css";
import { Link } from "react-router-dom";

export default function InsuranceApplicationForm(){

   const [name,setName]=useState("");
   const [phone,setPhone]=useState("");
   const [age,setAge]=useState("");
   const [address,setAddress]=useState("");
   const [email,setEmail]=useState("");
   const [gender,setGender]=useState("");

   function sendData(e){
    e.preventDefault();
    
    const newInsurance={
      name,
      phone,
      age,
      address,
      email,
      gender
    }
    axios.post("http://localhost:8070/insurance/add",newInsurance).then(()=>{
      alert("Form Submitted")
    
    }).catch((err)=>{
      alert(err)
    })
   }
    
      return (
       
        <div class="login-form-wrap">
            <br></br>
             <h1 class="heading">Application Form</h1>
        <div>
        <form onSubmit={sendData}>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name"  placeholder="Enter Name" required="true" onChange={(e)=>{
            setName(e.target.value);
          }}/>
        </div>
        
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="text" className="form-control" id="phone"  placeholder="Enter Phone Number" required="true" onChange={(e)=>{
            setPhone(e.target.value);
          }}/>
        </div>

        <div class="form-group">
          <label for="age">Age</label>
          <input type="text" className="form-control" id="age"  placeholder="Enter Age" required="true" onChange={(e)=>{
            setAge(e.target.value);
          }}/>
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address"  placeholder="Enter Address" required="true" onChange={(e)=>{
            setAddress(e.target.value);
          }}/>
        </div>


        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="Enter Email" required="true" onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        </div>



        
       
        
 

        <div class="form-group">
  <label>Gender</label>
  <select class="gender" id="gender"onChange={(e)=>{
            setGender(e.target.value);
          }} >
    <option selected>Choose...</option>

    <option value="male">Male</option >

    <option value="female">Female</option>
  </select>
  </div>
     
  
    <div id="button1">
        <button type="reset" className="btn-reset"> Reset </button>
        </div>

       
        <div id="button2">
        <button type="submit" className="btn-submit">Submit</button>
       </div>
       
     
       
        </form>
      </div>
      </div>
      );
    }
      
