import express from "express"
import {registerController,loginController,testController} from '../controllers/authController.js'
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js"; 
//Router Object
 const router = express.Router();


 //routing
    


 //REGISTER || POST METHOD
 router.post("/register",registerController)

 //login || POST
 router.post("/login",loginController)

//test controller || Get
router.get("/test", requireSignIn,isAdmin,testController)




 export default router;