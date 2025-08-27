import validator from 'validator'
import bcrypt from'bcrypt'
import {v2 as cloudinary } from  'cloudinary'
import doctorModel from '../models/doctorModel.js'

// API for adding doctor
const addDoctor=async(req,res)=>{
    try {
        const {name,email,password,speciality,experience,about,fees,address}=res.body
        const imageFile=req.file

        //checking for all daat tp doctor:
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees ||!address){
                return res.json({success:false,message:"Missing Details"})
        }

        //validating email formate 
        if(!validator.isEmail(email)){
                return res.json({success:false,message:"Plz enter valid email"})
        }

        //validating strong password:
        if(password.length<8){
                return res.json({success:false,message:"Plz enter strong password"})
        }

        //hashing doctor password:

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,slat)

        //upload image to cloudinary:
        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
         const imageUrl=imageUpload.secure_url;

         const docotorData={
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            fees,
            address:JSON.parse(address),
            date:Date.now()
         }

         const newDoctor=new doctorModel(docotorData)
         await newDoctor.save()

         res.json({success:true,message:"Doctor added"})


    } catch (error) {
        console.log(error);    
        res.json({success:false,message:error.message})
    }
}

export {addDoctor}