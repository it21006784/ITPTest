import React from "react";
import "./ViewInsurance.css";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider"

export default function ViewInsurance(){

  const slides=[
    {url : 'http://localhost:3000/images/1681798112850-ad1.jpg', title: 'KFC'},
    {url : 'http://localhost:3000/images/1681878961045-Ad4.jpg', title: 'Boat'},
    {url : 'http://localhost:3000/image-3.jpg', title: 'Forest'},
    {url : 'http://localhost:3000/image-4.jpg', title: 'City'},
    {url : 'http://localhost:3000/image-5.jpg', title: 'Italy'}
  ]
  const containerStyles = {
    width: "auto",
    height: "400px",
    margin: "0 auto",
    padding: "30px"
  };

        return (
          <div id="login-form-wrap">
            
            <h2>Did You Fill the Application Form?</h2>
            <form id="login-form" >
              <p>
              <Link to="/InsuranceMain">
                <input type="submit" id="login" value="Yes"/>
                </Link>
              </p>
            
            </form>
       
            <div id="create-account-wrap">
              <p>Still not?    <a href="/InsuranceApplicationForm"> Fill the form</a></p>
            </div>
          </div>
         
        );
      }
