const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const checkInSchema = new Schema({

    roomId : {
        type :Schema.Types.ObjectId ,ref:"HotelRoom"
    },
    from : {
        type : String,
        require : true
    },
    to : {
        type : String,
        require : true
    },
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    phoneNo : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require: true
    },
    noOfGuest : {
        type : String,
        require : true
    }
})

const checkIn = mongoose.model("checkIn",checkInSchema);
module.exports = checkIn;