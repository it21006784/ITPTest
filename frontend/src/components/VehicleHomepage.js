import "./VehicleHomepage.css";
import vehiclehomepic from "../img/vehicle-homepage-pic.png";
import vehiclehomerec from "../img/vehicle-homepage-rec.png";
import vehiclehomepagepiccollage from "../img/vehicle-homepage-pic-collage.png";
import vehiclehomepagebgpic from "../img/vehicle-homepage-bg-pic.png";

export default function VehicleReserve(){

    return(
        <div className = "vehicle-reserve-container">
            <img src={vehiclehomepic} id = "vehicle-homepage-img" alt = "pic1"/>
            <h3 className = "vehicle-homepage-heading">WORLDS</h3>
            <img src={vehiclehomerec} id = "vehicle-homepage-rec" alt = "pic2"/>
            <h5 className = "vehicle-homepage-heading2">JOIN WITH US</h5>
            <h5 className = "vehicle-homepage-heading3">VEHICLE REGISTRATION</h5>

            <div id = "vehicle-hr-line"/>

            <img src={vehiclehomepagepiccollage} id = "vehicle-homepage-pic-collage" alt = "pic3" />

            <h3 className = "vehicle-homepage-heading4">
                Road Rules <br></br>And Regulations
            </h3>

            <h3 className = "vehicle-homepage-heading5">
                Why Choose <br></br>Our Services?
            </h3>

            <h3 className = "vehicle-homepage-heading6">
                Troble Finding <br></br>A Destination?
            </h3>

            <img src={vehiclehomepagebgpic} id = "vehicle-homepage-bg-pic" alt = "pic4" />

            <h4 className = "vehicle-homepage-heading7">Have an International Driver's Permit?</h4>

            <p id = "veh-first-para">Your International Driver's Permit is a national license counterpart that 
                serves as your special permit so that you can rent and drive a motor 
                vehicle in Sri Lanka. An IDP is significant for a hassle-free road trip 
                across the country. You don't want to stop on possible checkpoints longer 
                when all you want is to devote your time to explore the wonders of Sri Lanka.</p>

            <h4 className = "vehicle-homepage-heading8">Documents Required</h4>

            <p id = "veh-second-para">Sri Lanka has a well-maintained transport system, thus making it an excellent 
                destination to go road tripping. Car rentals are spurs throughout the country, 
                making it very accessible for you to get a car. Sri Lankan car rental agencies 
                usually require you to provide them your home country driving license. If it's 
                not in English, that's when IDP would come in, and a photocopy of it. They will 
                also need your passport with a photocopy on the photo page and your Sri Lankan Visa.</p>
                

            <button className = "veh-home-btn" id = "veh-home-btn-1">Looking For <br></br>A Vehicle</button>
            <button className = "veh-home-btn" id = "veh-home-btn-2">Looking For Renting<br></br>A Vehicle</button>
        </div>
    )
}