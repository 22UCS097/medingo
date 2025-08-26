



// API for adding doctor
const addDoctor=async(req,res)=>{
    try {
        const {name,email,password,speciality,experience,about,fees,address}=req.body
        const imageFile=req.file

        consol.log(name,imageFile);

    } catch (error) {
        
    }
}

export {addDoctor}