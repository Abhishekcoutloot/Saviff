import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from "cors"
import path from "path ";

//config env
dotenv.config();


//Config Database
connectDB()


//rest Object
const app = express();

//Middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,"./saviff/build")))



//routes

app.use("*", function(req, res){
    res.send(path.join(__dirname,"./saviff/build/index.html"))
});



//rest apis
app.get('/',(req, res) =>{
    res.send("<h1>WELCOME TO SAVIFF</h1>");
});


//Port
const Port = process.env.PORT|| 8080

//Port run
app.listen(Port,()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${Port}`)
});




