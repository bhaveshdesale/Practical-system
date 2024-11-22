import express from 'express';
import dotenv from 'dotenv';

import dbConnect from '../config/database.js';
import practicalManagementRoute from '../routes/practicalManagementRoute.js';


dotenv.config();

const app=express();


dbConnect();

app.use(express.json());

app.use("/api/v1",practicalManagementRoute);

app.get("/",(req,res)=>{
    res.send("Practical Management System");
})
const PORT=3000 || process.env.PORT ;
app.listen(PORT,()=>{
    console.log(`sever is running at port: ${PORT}`);

})

