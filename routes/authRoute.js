import express from "express"
import { 
  registerController,
  loginController, 
  testController, 
  forgotPasswordController
 }
from '../controllers/authController.js'
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
//Router Object
const router = express.Router();


//routing



//REGISTER || POST METHOD
router.post("/register", registerController)

//login || POST
router.post("/login", loginController)

// Forgot Password || Post
router.post("/forgot-password", forgotPasswordController)

//test controller || Get
router.get("/test", requireSignIn, isAdmin, testController)


//Protected Routes/auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });


export default router;