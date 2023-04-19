const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const ImageModel = require("./models/Vehicle");

require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 })

const connect = mongoose.connection;
mongoose.connection.once("open", () =>{
    console.log("MongoDB connection success!");
})

const Hotel = require("./routes/hotel.js");
app.use("/hotel",Hotel);

const insuranceRouter = require("./routes/insurance.js");
app.use("/insurance",insuranceRouter);

const vehicleRouter = require("./routes/vehicles.js");
app.use("/vehicle", vehicleRouter);

const vehicleReserveRouter = require("./routes/vehicleReserve.js");
app.use("/vehicleReserve", vehicleReserveRouter);

const destinationmanagerRouter = require("./routes/destinationmanagers.js");
app.use("/destinationmanager",destinationmanagerRouter);

const destinationReserveRouter = require("./routes/destinationReserves.js");
app.use("/destinationReserve",destinationReserveRouter);

const destinationCreateRouter = require("./routes/destinationCreates.js");
app.use("/destinationCreate",destinationCreateRouter);

const advertiserRouter = require("./routes/advertisers.js");
app.use("/advertiser",advertiserRouter);

const advertisementRouter = require("./routes/advertisements.js");
app.use("/advertisement", advertisementRouter);

app.listen(PORT, () =>{
    console.log(`Server is up and running on port : ${PORT}`);
})

//Vehicle image storage begin
// const storage = multer.diskStorage({
//     destination: 'uploads', 
//     filename:(req,file,cb) =>{
//         cb(null, file.originalname)
//     },
//   });
  
//   const upload = multer({ 
//     storage: storage 
//   }).single('testImage')

//   app.get("/", (req, res) =>{
//     res.send("upload file");
//   });

//   app.post('/upload', (req, res) =>{
//     upload(req, res, (err) =>{
//         if(err){
//             console.log(err)
//         }else{
//             const newImage = new ImageModel({
//                 name : req.body.name,
//                 image : {
//                     data : req.file.filename,
//                     contentType : 'image/jpg'
//                 }
//             })
//             newImage.save()
//             .then(() => res.send('Success'))
//             .catch(err => console.log(err));
//         }

//     })
//   })

  //Vehicle image storage end