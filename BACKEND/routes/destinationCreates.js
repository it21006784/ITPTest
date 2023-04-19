const router = require("express").Router();
let DestinationCreate = require("../models/DestinationCreate");

router.route("/add").post((req,res)=> {

    const packageType = req.body.packageType;
    const packageDescription = req.body.packageDescription;
    const location1 = req.body.location1;
    const locationDescription1 = req.body.locationDescription1;
    const location2 = req.body.location2;
    const locationDescription2 = req.body.locationDescription2;
    const location3 = req.body.location3;
    const locationDescription3 = req.body.locationDescription3;
    const location4 = req.body.location4;
    const locationDescription4 = req.body.locationDescription4;
    const location5 = req.body.location5;
    const locationDescription5 = req.body.locationDescription5;
    
    
    const newDestinationCreate = new DestinationCreate({

        packageType,
        packageDescription,
        location1,
        locationDescription1,
        location2,
        locationDescription2,
        location3,
        locationDescription3,
        location4,
        locationDescription4,
        location5,
        locationDescription5
        
    })

    newDestinationCreate.save().then(()=>{
        res.json("Destination Created")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    DestinationCreate.find().then((destinationCreates)=>{
        res.json(destinationCreates)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const{packageType, packageDescription, location1, locationDescription1, location2, locationDescription2, location3, locationDescription3, location4, locationDescription4, location5, locationDescription5} = req.body;

    const updateDestinationCreate = {
        packageType,
        packageDescription,
        location1,
        locationDescription1,
        location2,
        locationDescription2,
        location3,
        locationDescription3,
        location4,
        locationDescription4,
        location5,
        locationDescription5

    }

    const update = await DestinationCreate.findByIdAndUpdate(userId, updateDestinationCreate)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await DestinationCreate.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await DestinationCreate.findById(userId)
      .then((destinationCreate) => {
        res.status(200).send({status: "User fetched", destinationCreate})
      }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
      })
})

module.exports = router;
