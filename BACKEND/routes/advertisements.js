const router = require("express").Router();
const multer = require("multer");
const path = require('path');
const fs = require('fs');
let Advertisement = require("../models/Advertisement");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, '../frontend/public/images');
      
    },
    filename: (req, file, callback) => {
      const filename = `${Date.now()}-${file.originalname}`;
      callback(null, filename);
    }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    const extname = path.extname(file.originalname);
    if (extname !== '.jpg' && extname !== '.jpeg' && extname !== '.png') {
      return callback(new Error('Only JPG, JPEG, and PNG files are allowed'));
    }
    callback(null, true);
  }
})

const validateFileUpload = (req, res, next) => {
  if (!req.file) {
    return res.status(400).send({ message: 'Please upload a file' });
  }
  next();
}

router.route("/addAdvertisement").post(upload.single('image'), validateFileUpload, (req, res) => {
  const { packageNo, category, website, time, note, price } = req.body;
  const image = req.file.filename;

  const newAdvertisement = new Advertisement({
      packageNo,
      category,
      website,
      time,
      image,
      note,
      price
  })

  newAdvertisement.save().then(() => {
    res.json("Advertisement added");
  }).catch((error) => {
    console.log(error);
    res.status(500).json({ error: 'Failed to add advertisement' });
  })
})

router.route("/viewAdvertisements").get((req,res) => {

  Advertisement.find({}, {  note: 0}).then((advertisements) => {
    res.json(advertisements)
  }).catch((error => {
    console.log(error)
  }))
})

router.route("/update/:advertisementId").put(upload.single('image'), async(req,res) => {

  let advertisementId = req.params.advertisementId;
  const status = req.body.status;

  const updateAdvertisement = {
    status
  }

  const update = await Advertisement.findByIdAndUpdate(advertisementId,updateAdvertisement)
        .then(() => {
            res.status(200).send({status : "Advertisement updated"})
        }).catch((error) => {
            console.log(error)
            res.status(500).send({status : "Error with updating data", error : error.message});
        })
})

router.put("/advertisement/update/:id", async (req, res) => {
  try {
    const advertisement = await Advertisement.findByIdAndUpdate(
      req.params.id,
      { status: "Accepted" },
      { new: true }
    );
    res.status(200).json(advertisement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.route("/delete/:advertisementId").delete(async(req,res) => {

  let advertisementId = req.params.advertisementId;

  await Advertisement.findByIdAndDelete(advertisementId)
  .then(() =>
        {
            res.status(200).send({status : "Advertisement deleted"})
        }).catch((error) => {
            console.log(error.message);
            res.status(500).send({status : "Error with delete advertisement", error : error.message});
        })
})


// Get path to advertisement image by package number
router.get("/getAcceptedAdvertisement/:advertisementId", async (req, res) => {
  let advertisementId = req.params.advertisementId;

    const advertisement = await Advertisement.findById(advertisementId)
        .then((advertisement) => {
            res.status(200).send({status : "Advertiser fetched", advertisement})
        }).catch((error) => {
            console.log(error.messsage);
            res.status(500).send({status : "Error with get user", error : error.message});
        })
})

router.route("/advertisement/:advertiserId").get(async(req,res) =>{

  const advertisement = await Advertisement.find({advertiserId: req.params.advertiserId})
      .then((room) =>{
          res.json(room);
      }).catch((err) =>{
          console.log(err.message);
          res.status(500).send({status : "Error with get advertiser ", error: err.message});
      })
})


module.exports = router;