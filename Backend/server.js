import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routers/auth.routes.js';  
import connectMongoDB from './db/connetMongoDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// console.log(process.env.MONGO_URI); 

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
    connectMongoDB();
})