import React, {useEffect, useState} from "react";
import hotelimg from "../img/hotel.jpg";
import axios from "axios";
import "./ViewHotel.css"
import { Link , useLocation} from 'react-router-dom';
import ImageSlider from "./ImageSlider"

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
  
    const slides=[
      {url : 'http://localhost:3000/images/AD-KFC.jpg', title: 'KFC'},
      {url : 'http://localhost:3000/images/1681798112850-ad1.jpg', title: 'Boat'},
      {url : 'http://localhost:3000/images/1681864619026-Ad2.jpg', title: 'Forest'},
      {url : 'http://localhost:3000/image-4.jpg', title: 'City'},
      {url : 'http://localhost:3000/image-5.jpg', title: 'Italy'}
    ]
    const containerStyles = {
      position: "absolute",
      zIndex: "1",
      width: "1200px",
      height: "200px",
      paddingTop: "30px",
      paddingBottom: "20px",
      paddingLeft: "140px",
    };
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
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
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