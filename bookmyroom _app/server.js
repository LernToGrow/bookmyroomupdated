const express =require("express");

const app= express();
require('dotenv').config()
const dbconfig =require('./db')
const roomsRoute = require('./routes/roomRoute');
const userRoute = require('./routes/userRoute');
const bookingRoute = require('./routes/bookingRoute');


app.use(express.json()); 
app.use('/api/rooms', roomsRoute);
app.use('/api/users', userRoute);
app.use('/api/bookings' , bookingRoute);

const port= process.env.PORT || 5000;
app.listen(port , ()=>{console.log(`server running at port no ${port}`);});

