const router = require("express").Router();
const Vehicle = require("../models/Vehicle");


router.route("/add").post((req,res) =>{
    const vehicleOwnerName = req.body.vehicleOwnerName;
    const address = req.body.address;
    const emailAddress = req.body.emailAddress;
    const phoneNumber = req.body.phoneNumber;
    const vehicleModel = req.body.vehicleModel;
    const vehicleYearOfManufacture = Number(req.body.vehicleYearOfManufacture);
    const licensePlateNumber = req.body.licensePlateNumber;
    const color = req.body.color;
    const vehicleCondition = req.body.vehicleCondition;
    const specialNotes = req.body.specialNotes;

    const newVehicle = new Vehicle({
        vehicleOwnerName,
        address,
        emailAddress,
        phoneNumber,
        vehicleModel,
        vehicleYearOfManufacture,
        licensePlateNumber,
        color,
        vehicleCondition,
        specialNotes
        
    })

    newVehicle.save().then(()=>{
        res.json("Vehicle Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get ((req, res)=>{

    Vehicle.find().then((vehicles)=>{
        res.json(vehicles)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) =>{
    let vehicleId = req.params.id;
    const {vehicleOwnerName, address, emailAddress, phoneNumber, vehicleModel, vehicleYearOfManufacture, licensePlateNumber, color, vehicleCondition, specialNotes} = req.body;

    const updateVehicle = {
        vehicleOwnerName,
        address,
        emailAddress,
        phoneNumber,
        vehicleModel,
        vehicleYearOfManufacture,
        licensePlateNumber,
        color,
        vehicleCondition,
        specialNotes
    }

    const update = await Vehicle.findByIdAndUpdate(vehicleId, updateVehicle).then(() =>{
        res.status(200).send({status: "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error in updating data"});
    })
    
})

router.route("/delete/:id").delete(async(req, res) =>{
    let vehicleId = req.params.id;

    await Vehicle.findByIdAndDelete(vehicleId).then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((err) =>{
        console.log(err);
    })
})

router.route("/get/:id").get(async (req, res) =>{
    let vehicleId = req.params.id;
    const vehicle = await Vehicle.findById(vehicleId).then(() =>{
        res.status(200).send({status: "User Fetched", vehicle: vehicle})
    }).catch((err) =>{
        console.log(err);
    })
})



module.exports = router;