import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom"

export default function AllAdvertisers() {

    const [advertisers, setAdvertisers] = useState([]);

    useEffect(() => {
        function getAdvertisers() {
            axios.get("http://localhost:8070/advertiser/").then((res) => {
                setAdvertisers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAdvertisers();

    }, [])

    const handleDelete = (advertiserId) => {
        console.log(`Delete advertiser with ID: ${advertiserId}`);
    }

    return (

        <div>
            <h3 className = "titleStyle"><br/>ALL ADVERTISERS</h3>
        
        <div class = "container">
        <table class="table table-striped">
        <thead>
        <tr>
            <th>Advertiser ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact No</th>
        </tr>
        </thead>
        <tbody>
        {advertisers.map((advertiser) => (
            <tr key={advertiser._id}>
            <td>{advertiser._id}</td>
            <td>{`${advertiser.fname} ${advertiser.lname}`}</td>
            <td>{advertiser.company}</td>
            <td>{advertiser.email}</td>
            <td>{advertiser.address}</td>
            <td>{`${advertiser.contactWork}, ${advertiser.contactMobile}`}</td>
            <td>
               
                <button onClick={() => handleDelete(advertiser._id)}>Delete</button>
            </td>
            </tr>
        ))}
        </tbody>
        </table>

        <Link to = "/getAdvertisements" className="btnSelect" style = {{width:"220px", textDecoration:"none"}}>
                    NEW ADVERTISEMENTS
        </Link>

        </div>

        </div>

    )
}