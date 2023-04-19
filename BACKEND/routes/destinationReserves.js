const router = require("express").Router();
let DestinationReserve = require("../models/DestinationReserve");

router.route("/add").post((req,res)=> {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const email = req.body.email;
    const contactNo = req.body.contactNo;
    const selectedDestination = req.body.selectedDestination;
    const date = req.body.date;
    const noOfDays = req.body.noOfDays;

    const newDestinationReserve = new DestinationReserve({

        fname,
        lname,
        address,
        email,
        contactNo,
        selectedDestination,
        date,
        noOfDays
    })

    newDestinationReserve.save().then(()=>{
        res.json("Destination Saved")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    DestinationReserve.find().then((destinationReserves)=>{
        res.json(destinationReserves)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const{fname, lname, address, contactNo, selectedDestination, date, noOfDays} = req.body;

    const updateDestinationReserve = {
        fname,
        lname,
        address,
        email,
        contactNo,
        selectedDestination,
        date,
        noOfDays

    }

    const update = await DestinationReserve.findByIdAndUpdate(userId, updateDestinationReserve)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({sttatus: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await DestinationReserve.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await DestinationReserve.findById(userId)
      .then((destinationReserve) => {
        res.status(200).send({status: "User fetched", destinationReserve})
      }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
      })
})

module.exports = router;
