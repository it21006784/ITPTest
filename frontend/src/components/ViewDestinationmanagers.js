import React, {useEffect, useState} from "react";
import axios from "axios";
import "./ViewDestinationmanager.css"
import {Link} from 'react-router-dom';

export default function ViewDestinationmanagers(){

    function myFunction(x){
        console.log("Hey" + x)
    }

const[destinationmanagers,setDestinationmanagers] = useState([]);

    useEffect(() =>{
        function getDestinationmanagers(){
            axios.get("http://localhost:8070/destinationmanager/").then((res) =>{
                setDestinationmanagers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDestinationmanagers();
    }, [])

    return(
        
        <div>

            <Link to="/destinationmanagerform" className="btn btn-primary">Add</Link>

            <table style = {{width: 900}}>
                    <tr>
                        <th>Destination Manager ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Age</th>
                        <th>Password</th>
                    </tr>
                {
                    destinationmanagers.map( i=>{
                        return(
                            <tr>
                                <td>{i._id}</td>
                                <td>{i.fname}</td>
                                <td>{i.lname}</td>
                                <td>{i.address}</td>
                                <td>{i.email}</td>
                                <td>{i.contactNo}</td>
                                <td>{i.age}</td>
                                <td>{i.password}</td>
                                <td>
                                    <button onClick={myFunction(i._id)}>Delete</button>
                                </td>
                            </tr>
                            
                        );
                    }

                    )
                }
                </table>
        </div>
    )
}