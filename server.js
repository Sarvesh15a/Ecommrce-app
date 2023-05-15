import express from 'express';
import Colors from 'colors';
import  dotenv from 'dotenv';
import morgan from 'morgan';
import connectdb from './config/db.js';
import authrout from './routes/authRoute.js';
import cors from 'cors';
//configer env
dotenv.config();

// database configure 
connectdb();


//rest object
const app = express();


//middelware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//rest routes
app.use("/api/v1/auth",authrout);


//rest api
app.get('/',(req,res) =>{
     res.send("<h2>welcome to ecommerce app </h2>");
});

//port
const PORT= process.env.PORT || 8000;
//run
app.listen(PORT,() => {
    console.log(`server Running on ${process.env.dev_mode} mode on port ${PORT}`.bgCyan.white);
});