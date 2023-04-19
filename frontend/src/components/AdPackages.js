import React, { useState } from "react"
import styles from '../styles/packages.css'
import { Link } from "react-router-dom";

export default function AdPackages() {
        
          return (
            
            <div className = "container">
                <h2 className = "title"><br/>SELECT AN ADVERTISING PACKAGE</h2><br/>
                <h3 className = "sub">Which page do you want to publish your advertisement?</h3>
                <Link to="/addAd">
                <button className="Advertising-btn" style = {{backgroundImage:"url('./images/home.jpg')"}}>Home<br/>Price : $ 100</button>
                <button className="Advertising-btn" style = {{backgroundImage:"url('./images/destination.jpg')"}}>Destination<br/>Price : $ 30</button>
                <button className="Advertising-btn" style = {{backgroundImage:"url('./images/hotelAd.jpg')"}} >Hotel Reservation<br/>Price : $ 50</button>
                <button className="Advertising-btn" style = {{backgroundImage:"url('./images/Car-Rental.jpg')"}}>Vehicle Renting<br/>Price : $ 60</button>
                </Link>
            </div>
        )
}