import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styles from '../styles/registerAdvertiser.css'
import advertiserHeader from "./AdvertiserHeader";

export default function UpdateAdvertiser() {

    const[advertiser,setAdvertiser] = useState({});
    const { advertiserId } = useParams();

   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [company, setCompany] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [contactWork, setContactWork] = useState("");
   const [contactMobile, setContactMobile] = useState("");

   useEffect(() => {
      axios.get(`http://localhost:8070/advertiser/get/${advertiserId}`)
        .then((response) => {
          const advertiser = response.data;
          setFname(advertiser.fname);
          setLname(advertiser.lname);
          setCompany(advertiser.company);
          setEmail(advertiser.email);
          setAddress(advertiser.address);
          setContactWork(advertiser.contactWork);
          setContactMobile(advertiser.contactMobile);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [advertiserId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updateAdvertiser = {
        fname,
        lname,
        company,
        email,
        address,
        contactWork,
        contactMobile
    }

    axios.put(`http://localhost:8070/advertiser/update/${advertiserId}`, updateAdvertiser)
      .then((response) => {
        console.log(response.data);
        alert("Successfully updated")
            // show success message or redirect to another page
          })
          .catch((error) => {
            console.log(error);
            // show error message
          });
      };


return (
    <div className="container">
        <h3 className="titleStyle"><br />Update Advertiser Details</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={fname} onChange={(e) => setFname(e.target.value)} /><br/>

                    </div>
                    <div className="col">
                        <input type="text" className="form-control"  value={lname} onChange={(e) => setLname(e.target.value)} /><br/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" className="form-control" id="company" value={company} onChange={(e) => setCompany(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} /><br/>
            </div>

            <div className="form-group">
                <label htmlFor="contactNo">Contact No</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={contactWork} onChange={(e) => setContactWork(e.target.value)} />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" value={contactMobile} onChange={(e) => setContactMobile(e.target.value)} /><br/>
                    </div>
                    </div>
            </div>

            <div className = "btns">
                <button type="submit" className = "register">Update</button>
                </div>

            </form>
        </div>

    )

}