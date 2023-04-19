import React from "react";
import "./UserHeader.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";


export default function UserHeader(){

    return(
        <div>
         <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#191970"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="Logo" style={{height:"40px",width:"40px"}}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Packages</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/hotels">Stay in</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/vehicleHomepage" className="nav-link">Vehicle</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/destinationHome" className="nav-link">Destination</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Event</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/insuranceform" className="nav-link">Insurance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/adminHeader" className="nav-link">Admin</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>   
        )
    }