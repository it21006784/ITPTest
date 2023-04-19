import React, { useState } from "react"
import axios from "axios"
import styles from '../styles/registerAdvertiser.css'

export default function AddAdvertiser() {

    const images = [
        './images/reg1.jpg',
        './images/reg2.jpg',
        './images/reg3.jpg',
        './images/reg4jpg.jpg',
        './images/reg5.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };
    
    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [company, setCompany] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [contactWork, setContactWork] = useState("");
   const [contactMobile, setContactMobile] = useState("");
   const [password, setPassword] = useState("");
   const [reEnteredPassword, setReEnteredPassword] = useState("");

   const [errorMessage, setErrorMessage] = useState("");

   function sendData(e) {
    e.preventDefault();

    const passwordError = validatePassword(password);
    const reEnteredPasswordError = validateReEnteredPassword(password, reEnteredPassword);

    if (passwordError || reEnteredPasswordError) {
        // Passwords do not meet the criteria, display error message
        setErrorMessage(passwordError || reEnteredPasswordError);
        return;
    }
    
    const newAdvertiser = {
        fname,
        lname,
        company,
        email,
        address,
        contactWork,
        contactMobile,
        password,
        reEnteredPassword
    }

    axios.post("http://localhost:8070/advertiser/add", newAdvertiser).then(() => {
        alert("Successfully registered")
        
    }).catch((err) => {
        alert(err)
    })

   }
  
    const handlePasswordChange = (e) => {
      const passwordValue = e.target.value;
      setPassword(passwordValue);
      setErrorMessage(validatePassword(passwordValue));
    };

    const validatePassword = (password) => {
        if (password.length < 8) {
          return "Password must be at least 8 characters long.";
        }
    
        return "";
    };

    const validateReEnteredPassword = (password, reEnteredPassword) => {
    if (password !== reEnteredPassword) {
        return "Passwords do not match.";
    }
    return "";
    };

    return (

        <div className="container">
            <div className = "slideshow">
                <img className = "imageStyle" src={images[currentIndex]} alt="Slideshow Image" />
                <button className = "previous" onClick={handlePrev}>&lt;</button>
                <button className = "next" onClick={handleNext}> &gt;</button>
            </div>
            <h3 className = "titleStyle"><br/>ADVERTISER REGISTRATION FORM</h3>
            <form onSubmit = {sendData}>
                <div class="form-group">
                    <label for="name">Name</label>
                      <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" onChange = {(e) => {
                                setFname(e.target.value);
                            }} reqired/><br/>

                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" onChange = {(e) => {
                                setLname(e.target.value);
                            }} reqired/><br/>
                        </div>
                     </div>
                </div>

                <div class="form-group">
                    <label for="company">Company</label>
                    <input type="text" class="form-control" id="company" placeholder="Company name or individual" onChange = {(e) => {
                                setCompany(e.target.value);
                            }} reqired/><br/>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="sample@example.com" onChange = {(e) => {
                                setEmail(e.target.value);
                            }} reqired/><br/>
                </div>

                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter address" onChange = {(e) => {
                                setAddress(e.target.value);
                            }} reqired/><br/>
                </div>

                <div class="form-group">
                    <label for="contactNo">Contact No</label>
                      <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Work"  onChange = {(e) => {
                                setContactWork(e.target.value);
                            }} reqired/><br/>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Mobile"  onChange = {(e) => {
                                setContactMobile(e.target.value);
                            }} reqired/><br/>
                        </div>
                     </div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" onChange = {(e) => {
                        handlePasswordChange(e);
                        setPassword(e.target.value);
                    }}  reqired/><br/>
                        <p style={{color:"red"}}>{errorMessage}</p>
                </div>

                <div class="form-group">
                    <label for="reEnteredPassword">Re-Enter Password</label>
                    <input type="password" class="form-control" id="reEnteredPassword" placeholder="Re-enter password" onChange = {(e) => {
                                setReEnteredPassword(e.target.value);
                            }} reqired/><br/>
                </div>

                <div className = "btns">
                <button type="submit" className = "register">Register</button>
                <h6>Already have an account?
                <button type="submit" className = "signin">SIGN IN</button></h6>
                </div>

            </form>
        </div>
    )
}