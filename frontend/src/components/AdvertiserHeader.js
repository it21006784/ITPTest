import "./AdvertiserHeader.css";
import React from "react";
import { Link } from "react-router-dom";

export default function AdvertiserHeader(){
    return(
        <div className="bd-container">

<div className="left-nav">

<nav className="navbar navbar-expand-lg">
<div className="container-fluid">


<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav-bar">
        
    <li className="nav-item11" style={{marginTop:'100px'}}>
        <Link to="/advertiserHeader" className="nav-link">View profile</Link>
    </li>
    <li className="nav-item2">
        <Link to="/updateAdvertisers/advertiser/:id" className="nav-link">Edit Details</Link>
    </li>
    <li className="nav-item2" >
        <Link to="/advertiserHeader" className="nav-link">View my advertisements</Link>
    </li>
    <li className="nav-item2" >
        <Link to="/select" className="nav-link">Add new advertisements</Link>
    </li>
    
    <Link to="/logout" className="navlogout">Logout</Link>
    </ul>
</div>
</div>
</nav>
</div>

 </div>

    )
}