 const router = require("express").Router();
const { request } = require("express");
const Hotel = require("../models/Hotel");
const HotelRoom = require("../models/HotelRoom")
const checkIn = require("../models/CheckIn");

router.route("/add").post((req,res) =>{

    const{firstName, lastName, hotelName,description,checkingIn,checkOut,minAge,pets,policy,googleMap, address,phoneNo , password, refund, price,wifi,pool,laundry,park,ac,frontDesk,restaurant,bar,spa} = req.body;

    const newHotel = new Hotel({
        firstName,
        lastName, 
        hotelName, 
        description,
        checkingIn,
        checkOut,
        minAge,
        pets,
        policy,
        googleMap,
        address,
        phoneNo , 
        password, 
        refund, 
        price,
        wifi,
        pool,
        laundry,
        park,
        ac,
        frontDesk,
        restaurant,
        bar,
        spa
    })

    newHotel.save().then(()=>{
        res.json("New Hotel Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/view").get((req,res) =>{

    Hotel.find().then((hotel)=>{
        res.json(hotel)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/view/:hotelId").get(async(req,res) =>{

    let hotelId = req.params.hotelId;
    const hotelL = await Hotel.findById(hotelId)
        .then((hotelL) =>{
            res.json(hotelL);
        }).catch(() =>{
            console.log(err.message);
            res.status(500).send({status : "Error with get hotel ", error: err.message});
        })
})

router.route("/addroom/:hotelId").post((req,res) =>{

    let hotelId = req.params.hotelId;
    const name = req.body.name;
    const numberofRooms = Number(req.body.numberofRooms);
    const bookedRooms = Number(req.body.bookedRooms);
    const wheelchair = req.body.wheelchair;
    const refundable = req.body.refundable;
    const typeOfBeds = req.body.typeOfBeds;
    const noOfBeds = Number(req.body.noOfBeds);
    const sleepers = Number(req.body.sleepers);
    const view = req.body.view;
    const area = Number(req.body.area);
    const price = Number(req.body.price);

    const newRoom = new HotelRoom({
 
        name,
        numberofRooms,
        bookedRooms,
        wheelchair,
        refundable,
        typeOfBeds,
        noOfBeds,
        sleepers,
        view,
        area,
        price,
        hotelId
    })

    newRoom.save().then(()=>{
        res.json("New Room Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/viewRoomDetails/:RoomId").get(async(req,res) =>{

    let roomId = req.params.RoomId;
    const room = await HotelRoom.findById(roomId)
        .then((room) =>{
            res.json(room);
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status : "Error with get Room ", error: err.message});
        })
})



router.route("/viewRoom/:hotelId").get(async(req,res) =>{

    const room = await HotelRoom.find({hotelId: req.params.hotelId})
        .then((room) =>{
            res.json(room);
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status : "Error with get hotel ", error: err.message});
        })
})


router.route("/checkIn/:roomid").post((req,res)=>{
    const{from, to, firstName, lastName, phoneNo, email,noOfGuest} = req.body;
    let roomId = req.params.roomid;
    const newcheckIn = new checkIn({
        roomId,
        from,
        to,
        firstName,
        lastName,
        phoneNo,
        email,
        noOfGuest
    })

    newcheckIn.save().then(()=>{
        res.json("Check in added");
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/viewCheckIn").get((req,res) =>{

    checkIn.find().then((CheckIn)=>{
        res.json(CheckIn)
    }).catch((err) =>{
        console.log(err)
    })
})


router.route("/deleteCheckIn/:checkinid/").delete(async (req ,res)=>{
    let id = req.params.checkinid;

    await checkIn.findByIdAndDelete(id)
        .then(()=> {
            res.status(200).send({status : "CheckIn Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete CheckIn", error: err.message});
    })
})

router.route("/updatehotel/:hotelId").put(async(req,res) =>{
    let id = req.params.hotelId;
    const {hotelName, password, phoneNo,price} =req.body;

    const updatehotel = {
        hotelName,
        password,
        phoneNo,
        price
    }

    const update = await Hotel.findByIdAndUpdate(id,updatehotel).then(()=>{
        res.status(200).send({status: "Hotel updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with update data",error: err.message});
    })
})





module.exports = router;