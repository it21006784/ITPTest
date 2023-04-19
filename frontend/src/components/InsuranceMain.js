import React from "react";
import "./InsuranceMain.css";
import insuranceBanner from "../img/insuranceBanner.jpg";
import { Link } from "react-router-dom";

export default function ViewInsurance(){

        return (
          <div id="banner">
            <img src={insuranceBanner}></img>
          </div>
         
        );
      }