const mongoose = require('mongoose');

const schema = mongoose.schema;

const DestinationReserveSchema = new mongoose.Schema ({

    fname : {
        type : String,
        required: true
    },
    lname : {
        type : String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    selectedDestination:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    noOfDays:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('destinationReserves' ,DestinationReserveSchema)