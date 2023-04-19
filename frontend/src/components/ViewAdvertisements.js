import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

export default function ViewAdvertisements () {

    const [advertisements, setAdvertisements] = useState([]);
    const navigate = useNavigate();

    const handleAccept = (advertisement) => {
      if (!advertisement._id) {
        alert('Advertisement ID is missing');
        return;
      }
    
      axios.put(
        `http://localhost:8070/advertisement/update/${advertisement._id}`,
        {
          status: "Accepted",
        }
      ).then(async (res) => {
        alert("Advertisement Accepted Successfully");
    
        // Navigate to the relevant page based on package number
        if (advertisement.packageNo === 1) {
          navigate(`/page1`);
        } else if (advertisement.packageNo === 2) {
          navigate(`/createdestinationform`, { state: { image: advertisement.image } });
        } else if (advertisement.packageNo === 3) {
          navigate(`/hotels`, { state: { image: advertisement.image } })
        } else if (advertisement.packageNo === 4) {
          navigate(`/page4`);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    
      

    
    useEffect(() => {
        function getAdvertisements() {
            axios.get("http://localhost:8070/advertisement/viewAdvertisements").then((res) => {
                setAdvertisements(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAdvertisements();

    }, [])
      
    return (

        <div>
            <h3 className = "titleStyle"><br/>NEW ADVERTISEMENTS</h3>
        
        <div className="container">
        <table class="table table-striped">
        <thead>
        <tr>
            <th>Advertisement ID</th>
            <th>Package</th>
            <th>Price</th>
            <th>Website</th>
            <th>File</th>
            
        </tr>
        </thead>
        <tbody>
        {advertisements.map((advertisement) => (
            <tr key={advertisement._id}>
            <td>{advertisement._id}</td>
            <td>{advertisement.packageNo}</td>
            <td>{advertisement.price}</td>
            <td>{advertisement.website}</td>
            <td><img src={`/images/${advertisement.image}`} /></td>

            <td>
                <button onClick={() => handleAccept(advertisement)}>Accept</button>
                <button>Reject</button>
            </td>
            </tr>
        ))}
        </tbody>
        </table>

        </div>

        </div>

    )
}