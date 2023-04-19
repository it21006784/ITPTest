import React from "react";
import "./ViewInsurance.css";
import { Link } from "react-router-dom";

export default function ViewInsurance(){

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
