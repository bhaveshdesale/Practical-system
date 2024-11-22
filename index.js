import express from 'express';
import dotenv from 'dotenv';

import dbConnect from '../config/database.js';
import practicalManagementRoute from '../routes/practicalManagementRoute.js';

dotenv.config();

const app = express();

// Connect to the database
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1", practicalManagementRoute);

app.get("/", (req, res)=>{
  res.json({
    success: true,
    message: "Server Running Successfully"
  })
})

// Export as a serverless function
export default app;
