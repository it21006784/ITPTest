import React, { useState, useEffect } from 'react';
import axios from "axios"

export default function AddAdvertisement() {

    const [packageNo, setPackageNo] = useState("");
   const [category, setCategory] = useState("");
   const [website, setWebsite] = useState("");
   const [time, setTime] = useState("");
   const [image, setImage] = useState("");
   const [note, setNote] = useState("");
   const [price, setPrice] = useState("");

   function sendData(e) {
    e.preventDefault();
    

    const newAdvertisement = {
        packageNo,
        category,
        website,
        time,
        image,
        note,
        price
    }
     console.log(newAdvertisement)
     axios.post("http://localhost:8070/advertisement/addAdvertisement", newAdvertisement, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(() => {
        alert("Advertisement added");
      }).catch((err) => {
        alert(err);
      });
      

   }

    return (

        <div className = "container">

            <h3 className = "titleStyle"><br/>ADD ADVERTISEMENT</h3>

            <form onSubmit = {sendData} enctype="multipart/form-data">
                <div class="form-group">
                    <label for="package">Package</label>
                    <input type="text" class="form-control" id="package"  onChange = {(e) => {
                    setPackageNo(e.target.value);
                    }}  /><br/>
                </div>

                <div class="form-group">
                    <label for="category">Category</label>
                    <select class="form-control" id="category" placeholder="Select" onChange = {(e) => {
                                setCategory(e.target.value);
                            }}  required><br/>
                        <option value = "Property">Property</option>
                        <option value = "Education">Education</option>
                        <option value = "Electronics">Electronics</option>
                        <option value = "Vehicles">Vehicles</option>
                        <option value = "Services">Services</option>
                        <option value = "Other">Other</option>
                    </select><br/>

                </div>

                <div class="form-group">
                    <label for="website">Website</label>
                    <input type="text" class="form-control" id="website" placeholder="Enter url" onChange = {(e) => {
                                setWebsite(e.target.value);
                            }}  required/><br/>
                </div>

                <div class="form-group">
                    <label for="image">Attach advertisement</label><br/>
                    <input type="file" class="form-control-file" id="image" name = "image" onChange = {(e) => {
                                setImage(e.target.files[0]);
                            }} required/><br/><br/>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="time" id="No" value="No" checked={time === "No"}  onChange = {(e) => {
                                setTime(e.target.value);
                            }}/>
                    <label class="form-check-label" for="yes">
                         Default Time (25 days)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="time" id="Yes" value="Yes" checked={time === "Yes"} onChange = {(e) => {
                                setTime(e.target.value);
                            }}/>
                    <label class="form-check-label" for="no">
                        Publish 30 days (Additional fees apply)
                    </label>
                </div>

                <div class="form-group">
                    <label for="note"><br/>Notes</label>
                    <textarea class="form-control" id="note" rows="3" onChange = {(e) => {
                                setNote(e.target.value);
                            }} ></textarea><br/>
                </div>

                <div class="form-group">
                    <label for="price">Total fee</label>
                    <input type="text" class="form-control" id="price" onChange = {(e) => {
                                setPrice(e.target.value);
                            }} /><br/>
                </div>

                <div className = "btns">
                <button type="submit" className = "register">SAVE</button>
                
                </div>
                
                </form>

        </div>
    )
}