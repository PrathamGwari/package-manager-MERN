const router = require('express').Router()
const Parcel = require('../models/Parcel')

// CREATE PARCEL
router.post("/createparcel", async (req, res)=>{
    try{
        const newParcel = new Parcel({
            email: req.body.email,
            parcelInfo: req.body.parcelInfo,
            parcelCost: req.body.parcelCost,
            senderName: req.body.senderName,
            receiverName: req.body.receiverName,
            senderPhoneNumber: req.body.senderPhoneNumber,
            receiverPhoneNumber: req.body.receiverPhoneNumber,
            senderAddress: req.body.senderAddress,
            receiverAddress: req.body.receiverAddress,
            startLocation: req.body.startLocation,
            endLocation: req.body.endLocation,
        })
        const createdParcel = await newParcel.save();
        res.status(200).json(createdParcel)
    } catch(err){
        res.status(505).json(err)
        console.log(err)
    }
})

// GET ALL PARCELS FROM EMAIL
router.get('/', async (req, res)=>{
    const emailId = req.query.email
    try{    
        const parcels = await Parcel.find({email: emailId})
        res.status(200).json(parcels)
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router