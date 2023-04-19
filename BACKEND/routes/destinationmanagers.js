const router = require("express").Router();
let Destinationmanager = require("../models/Destinationmanager");

router.route("/add").post((req,res)=> {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const email = req.body.email;
    const contactNo = req.body.contactNo;
    const age = Number(req.body.age);
    const password = req.body.password;

    const newDestinationmanager = new Destinationmanager({

        fname,
        lname,
        address,
        email,
        contactNo,
        age,
        password
    })

    newDestinationmanager.save().then(()=>{
        res.json("Destinationmanager Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    Destinationmanager.find().then((destinationmanagers)=>{
        res.json(destinationmanagers)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const{fname, lname, address, contactNo, age, password} = req.body;

    const updateDestinationmanager = {
        fname,
        lname,
        address,
        email,
        contactNo,
        age,
        password

    }

    const update = await Destinationmanager.findByIdAndUpdate(userId, updateDestinationmanager)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await Destinationmanager.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await Destinationmanager.findById(userId)
      .then((destinationmanager) => {
        res.status(200).send({status: "User fetched", destinationmanager})
      }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
      })
})

module.exports = router;


