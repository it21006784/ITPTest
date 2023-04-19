const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    vehicleOwnerName : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    emailAddress : {
        type : String,
        require : true
    },
    phoneNumber : {
        type : String,
        require : true
    },
    vehicleModel : {
        type : String,
        require : true
    },
    vehicleYearOfManufacture : {
        type : Number,
        require : true
    },
    licensePlateNumber : {
        type : String,
        require : true
    },
    color : {
        type : String
    },
    vehicleCondition : {
        type : String
    },
    specialNotes : {
        type : String
    },
    image : {
        data : Buffer,
        contentType: String
    }

})

const Vehicle = mongoose.model("Vehicle", VehicleSchema)
module.exports = Vehicle;