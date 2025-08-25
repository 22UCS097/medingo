import  express from 'express'
import cors from  'cors'
import 'dotenv/config'
import connectDB from './config/mongoodb.js';
import connectCloudinary from './config/cloudinary.js';


//app confid:

const app=express();

const port=process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares

app.use(express.json())
app.use(cors()) 
 //this will allow to connect to frontend

//api endpoint:

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
     console.log("server is runing",port);
})






