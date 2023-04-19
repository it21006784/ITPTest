import React, {useState, useEffect} from "react";
import axios from "axios";
import "./VehicleReserveAdmin.css";


export default function ViewReservedVehicles(){

    function myFunction(x){
        console.log("Hey" + x)
    }
    const [vehicles, setVehicles] = useState([]);

    useEffect(() =>{
        function getVehicles(){
            axios.get("http://localhost:8070/vehicleReserve").then((res) =>{
                setVehicles(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getVehicles();
    }, [])

    return(
        <div>
            
            <table style = {{width: 900}}>
                    <tr>
                        <th>Car No.</th>
                        <th>Driver's Name</th>
                        <th>Pick Up</th>
                        <th>Drop Off</th>
                        <th>Payment</th>
                    </tr>
                {
                    vehicles.map( i=>{
                        return(
                            <tr>
                                <td>{i._id}</td>
                                <td>{i.firstName}</td>
                                <td>{i.from}</td>
                                <td>{i.to}</td>
                                <td>{i.totalPrice}</td>
                                <td>
                                    <button onClick={myFunction(i._id)}>Cancel</button>
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