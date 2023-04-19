import "./AdminHeader.css";
import React from "react";
import { Link } from "react-router-dom";

export default function AdminHeader(){
    return(
        <div className="body-container">
            <div className="left-nav">

                <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-bar">
                    
                    <li className="nav-item1">
                        <Link to="/vehicleReservationForm" className="nav-link">Edit Profile</Link>
                    </li>
                    <li className="nav-item2">
                        <Link to="/" className="nav-link">Reserved Rooms</Link>
                    </li>
                    <li className="nav-item3">
                        <Link to="/vehicleReserveAdmin" className="nav-link">Booked Vehicles</Link>
                    </li>
                    <li className="nav-item4">
                        <Link to="/adminHeader" className="nav-link">Events</Link>
                    </li>
                    <li className="nav-item5">
                        <Link to="/adminViewDestinationManager" className="nav-link">Destinations</Link>
                    </li>
                    <li className="nav-item6">
                        <Link to="/adminHeader" className="nav-link">Booked Tour Guides</Link>
                    </li>
                    <li className="nav-item7">
                        <Link to="/adminHeader" className="nav-link">Insurances</Link>
                    </li>
                    <li className="nav-item8">
                        <Link to="/insuranceform" className="nav-link">Payments</Link>
                    </li>

                    <li className="nav-item8">
                        <Link to="/getAdvertisers" className="nav-link">Advertising</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
            
        </div>




    )
}