import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout.js'
import axios from "axios"
import{useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css"

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate= useNavigate()

  
const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        {

            email,
            newPassword,
            answer,
 
        }
        );
        if(res && res.data.success){
            toast.success(res.data && res.data.message);
         
            navigate("/login")
        }else{
            toast.error(res.data.message)
        }



    } catch (error) {
        if (error.response) {
            // The request was made, but the server responded with a non-2xx status code
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            // The request was made, but no response was received
            console.log(error.request);
        } else {
            // Something else happened while setting up the request
            console.log("Error", error.message);
        }
        toast.error("Network error. Please try again later.");
    }
    
}

  return (
    <Layout>
     <div className='form-container'>
 
 <form onSubmit={handleSubmit}>
 <h4 className="title">Reset Password</h4>

    

     <div className="mb-3">
         <input type="email" 
         value={email} 
         onChange={(e)=>setEmail(e.target.value)} 
         className="form-control" 
         id="exampleInputEmail1" 
         placeholder='Enter Your Email'
         required  
         />
     </div>

     <div className="mb-3">
         <input type="text" 
         value={answer} 
         onChange={(e)=>setAnswer(e.target.value)} 
         className="form-control" 
         id="exampleInputEmail1" 
         placeholder='Enter Your Answer'
         required  
         />
     </div>

     <div className="mb-3">
         <input type="password" 
          value={newPassword}
           onChange={(e)=>setNewPassword(e.target.value)}
            className="form-control" 
            id="exampleInputPassword1"
             placeholder='Enter new Password' 
             required
             />
     </div>

          <button type="submit"
      className="btn btn-primary">
         Reset
         </button>
 </form>

</div>
        </Layout>
  )
}

export default ForgotPassword