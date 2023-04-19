import React, {useEffect, useState} from "react";
import hotelimg from "../img/hotel.jpg";
import axios from "axios";
import "./ViewHotel.css"
import { Link , useLocation} from 'react-router-dom';

export default function ViewHotel(){

    const[hotels,setHotels] = useState([]);
    const location = useLocation();
  const image = location.state?.image;

    useEffect(() =>{
        function getHotels(){
            axios.get("http://localhost:8070/hotel/view").then((res) =>{
                setHotels(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getHotels();
    }, [])
  
    return (
        <div className="bg">
          <div className="container">
            <img src={hotelimg} className="img1" alt="hotel" />
            <div className="q1">HOTEL</div>
            <div className="q2">
              "Book your dream stay with just a few clicks -
              <br />
              make it easy and convenient"
            </div>
            {image && <img src={`images/${image}`} alt="advertisement" />}
          </div>
          <div className="newcont">
            <Link to={'/newhotel'} className="btnNew">Add your hotel</Link>
          </div>
          <br />
        {hotels.map((hotel) => (
              <div className="cont1" key={hotel._id}>
              <div className="cont2">
                <img src={hotelimg} className="imgh" alt="hotel" />
                </div>
                <div className="cont3">
                  <div className="ref">{hotel.refund}</div>
                  {hotel.hotelName} <br />
                  <i className="bi bi-geo-alt-fill "></i> {hotel.address} <br />
                  <i className="bi bi-currency-dollar"></i>
                  {hotel.price} <br />
                  <div className="icons">
                  {hotel.wifi && (
                                    <div>
                                    <i className="bi bi-wifi icon"></i> WIFI
                                    </div>
                                    )}
                {hotel.pool && (
                                    <div>
                                    <i className="bi bi-water icon"></i> Pool
                                    </div>
                                 )}
                </div>
                <Link to={`/hotels/view/${hotel._id}`} className="btnSelect">Select Room</Link>
                </div>
              </div>
            ))}
          
        </div>
      );
}