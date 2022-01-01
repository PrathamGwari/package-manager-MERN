const mongoose = require('mongoose')

const parcelSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    parcelInfo:{
        type: String,
        required: true
    },
    parcelCost:{
        type: String,
        required: true
    },
    senderName:{
        type: String,
        required: true
    },
    receiverName:{
        type: String,
        required: true
    },
    senderAddress:{
        type: String,
        required: true
    },
    receiverAddress:{
        type: String,
        required: true
    },
    senderPhoneNumber:{
        type: String,
        required:true
    },
    receiverPhoneNumber:{
        type: String,
        required:true
    },
    startLocation:{
        type: String,
        required: true
    },
    endLocation:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Parcel", parcelSchema)