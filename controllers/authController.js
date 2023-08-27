
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT  from "jsonwebtoken";

export const registerController =  async(req,res) =>{
    try {
        const{name,email,password,phone,address,role} = req.body
        
        //Validation
        if (!name){
            return res.send({message: "Name is Required"})
        }
        if(!email){
            return res.send({message : "Email is required"})

        }
        if(!password){
            return res.send({message:"Password is required"})

        }
        if(!address){
            return res.send({message:"Address is required"})

        }
        if(!phone){
            return res.send({message:"Phone is Required"})

        }
       

        const existinguser = await userModel.findOne({email})
        //existing users
        if(existinguser){
            return res.status(200).send({
                success:false,
                message : "Already Register please login"
            })
        }
        

        //Register User
        const hashedPassword = await hashPassword(password);
        //save
        const user = new userModel({name,email,phone,address,role,password:hashedPassword}).save()

        res.status(201).send({
            success: true,
            message:"User Registered Sucessfully",
            user,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "Registration failed",
            error

        }) 
    }
}

//POST Login

export const loginController = async(req,res)=>{
    try {
        const {email,password} =req.body

        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message: "Invalid email or password"
            })
        }

        //check user
        const user = await userModel.findOne({email})
        if(!user){
           return res.status(404).send({
            success: false,
            message: "Email not Registered"
           })
        }
        
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success: false,
                message:"Invalid Password"
            })
        }


        //token 
        const token = await JWT.sign({_id : user._id}, process.env.JWT_SECRET,{
            expiresIn:"7d"
        })
        res.status(200).send({
            success:true,
            message:'login successfully',
            user :{
                name :user.name,
                email: user.email,
                phone:user.phone,
                address: user.address
            },
            token,
        });





    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: "Error in login",
            error            
        })
        
    }
};


//forgotPasswordController

export const forgotPasswordController= async(req, res) => {
    try {
    const {email,answer,newPassword} = req.body
    if(!email){
        res.status(500).send({message:"Email Required"})
    }     
    if(!answer){
        res.status(500).send({message:"Answer Required"})
    }     
    if(!newPassword){
        res.status(500).send({message:"New Password Required"})
    } 
    
// Check
    const user = await userModel.findOne({email,answer});
    if(user){
        return res.status(500).send({
            success:false,
            message:"Wrong Email or Answer"
        })
    }
    const hashed =await hashPassword(newPassword)
    await userModel.findByIdAndUpdate(user._id,{password:hashed})
    res.status(200).send({
        success:true,
        message:"Password reset Sucessfully"
    })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Some thing went wrong"
        })
    }
}


//test controller
export const testController = (req,res)=>{
    try {
        req.send("Protected Routes")
    } catch (error) {
        console.log(error)
        res.send({error})
    }
}





