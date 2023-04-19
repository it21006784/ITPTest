import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./ViewRoom.css";
import img from "../img/hotelroom.jpg";
import rooms from "../img/room.jpg";

export default function ViewRoom(){

    const[Rooms,setRooms] = useState([]);
    const[hotel,setHotel] = useState({});
    const { id } = useParams();

    useEffect(() =>{
        function getRooms(){
            axios.get(`http://localhost:8070/hotel/viewRoom/${id}`).then((res) =>{
                setRooms(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getRooms();
    }, []);

    useEffect(() => {
        const fetchHotel = async () =>{
            const res = await axios.get(`http://localhost:8070/hotel/view/${id}`);
            setHotel(res.data);
            console.log(res.data)
        };
        fetchHotel();
      }, [id]);


    return(
        <div className="conte">
            <div className="Imgtop">
                <div className="topg1"><img src={img} className="img11"/></div>
                <div className="topg2"><img src={img} className="img2"/></div>
            </div>
            <div className="Imgbot">
                <div className="bottomg1"><img src={img} className="img3"/></div>
                <div className="bottomg2"><img src={img} className="img3"/></div>
                <div className="bottomg3"><img src={img} className="img3"/></div>
                <div className="bottomg4"><img src={img} className="img3"/></div>
            </div>
            <div className="content1">
                <hr className="line"/>
                <p className="topic">{hotel.hotelName}</p>
            </div>
            <div className="content2">
                <div className="leftdes">
                    <p className="Facilitie">Facilities </p>
                {hotel.wifi && (
                    <div className="facility-item">
                        <span className="material-icons">wifi</span>
                        <p>WiFi</p>
                    </div>
                )}
                {hotel.pool && (
                    <div className="facility-item">
                        <span className="material-icons">pool</span>
                        <p>Pool</p>
                    </div>
                )}
                {hotel.restaurant && (
                    <div className="facility-item">
                        <span className="material-icons">restaurant_menu</span>
                        <p>Restaurant</p>
                    </div>
                )}
                {hotel.park && (
                    <div className="facility-item">
                        <span className="material-icons">local_parking</span>
                        <p>Parking</p>
                    </div>
                )}
                {hotel.ac && (
                    <div className="facility-item">
                        <span className="material-icons">ac_unit</span>
                        <p>AC</p>
                    </div>
                )}
                {hotel.Laundry && (
                    <div className="facility-item">
                        <span className="material-icons">local_laundry_service</span>
                        <p>Laundry</p>
                    </div>
                )}
                {hotel.frontDesk && (
                    <div className="facility-item">
                        <span className="material-icons">info</span>
                        <p>24 frontDesk</p>
                    </div>
                )}
                {hotel.bar && (
                    <div className="facility-item">
                        <span className="material-icons">local_bar</span>
                        <p>Bar</p>
                    </div>
                )}
                {hotel.spa && (
                    <div className="facility-item">
                        <span className="material-icons">spa</span>
                        <p>Spa</p>
                    </div>
                )}
                <br/><br/><br/>
                </div>
                <div className="rightdes">
                    <p className="des">
                        {hotel.description}
                    </p>
                </div>
            </div>
            <div className="content3">
                <div className="loca"><p className="Facilitie" >Location</p><iframe
                    src={hotel.googleMap}
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    /></div>
                <div className="polices"><p className="Facilitie">Polices</p>
                Check-in from {hotel.checkingIn}
                <br/>
                Minimum check-in age: {hotel.minAge}
                <br/>
                Check-out before {hotel.checkOut}
                <br/>
                 pets or service animals {hotel.pets}
                <br/>
                {hotel.policy}
                </div>
            </div>
            <hr className="line2"/>
            <div className="contentroom">
            {Rooms && Rooms.map((room) => (
                <div className="room" key={room._id}>
                    <img src={rooms} className="roomimg" />
                    <p className="roomtopic">{room.name}</p>
                    <div className="icon-with-text">
                    <span className="material-symbols-outlined">crop</span>
                    <div className="text">Area {room.area} sq ft</div>
                    </div>
                    <div className="icon-with-text">
                    <span className="material-symbols-outlined">group</span>
                    <div className="text">Sleepers {room.sleepers}</div>
                    </div>
                    <div className="icon-with-text">
                    <span className="material-symbols-outlined">bed</span>
                    <div className="text">{room.typeOfBeds}</div>
                    </div>
                    <div className="icon-with-text">
                    <span className="material-symbols-outlined">balcony</span>
                    <div className="text">{room.view}</div>
                    </div>
                    <div className="icon-with-text">
                    <span className="material-symbols-outlined">accessible</span>
                    <div className="text">Wheelchair {room.wheelchair}</div>
                    </div>
                    <div className="icon-with-text">
                    <span className="material-symbols-outlined">keyboard_return</span>
                    <div className="text">{room.refundable}</div>
                    </div>
                    {room.numberofRooms > room.bookedRooms ? (
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">check_circle</span>
                        <div className="text">Available</div>
                    </div>
                    ) : (
                    <div className="icon-with-text">
                        <span className="material-symbols-outlined">dangerous</span>
                        <div className="text">Not Available</div>
                    </div>
                    )}
                    <div className="icon-with-text">
                    <span className="material-symbols-outlined">attach_money</span>
                    <div className="text">{room.price} per night</div>
                    </div>
                    <Link to={`/hotels/reserve/${room._id}`} className="btnSelect">
                    Reserve
                    </Link>
                </div>
                ))}
            </div>
            
        </div>
    )
}