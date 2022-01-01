const express = require('express')
const app = express()
const dotevn = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const parcelRoute = require('./routes/parcel')
const cors = require('cors')

dotevn.config()

mongoose.connect(process.env.MONGO_URL).
then(console.log('connected to mongo-db'))
.catch(err=> console.log(err))

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/parcel', parcelRoute);

app.listen(process.env.PORT || 8000, ()=>{
    console.log("backend is running...");
})