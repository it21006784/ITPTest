const mongoose = require('mongoose');

const schema = mongoose.schema;

const DestinationCreateSchema = new mongoose.Schema ({

    packageType : {
        type : String,
        required: true
    },
    packageDescription : {
        type : String,
        required: true
    },
    location1 :{
        type:String,
        required:true
    },
    locationDescription1:{
        type:Number,
        required:true
    },
    location2 :{
        type:String,
        required:true
    },
    locationDescription2:{
        type:Number,
        required:true
    },
    location3 :{
        type:String,
        required:true
    },
    locationDescription3:{
        type:Number,
        required:true
    },
    location4 :{
        type:String,
        required:true
    },
    locationDescription4:{
        type:Number,
        required:true
    },
    location5 :{
        type:String,
        required:true
    },
    locationDescription5:{
        type:Number,
        required:true
    }
    

});

module.exports = mongoose.model('destinationCreates' ,DestinationCreateSchema)