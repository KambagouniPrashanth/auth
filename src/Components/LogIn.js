import React,{useState} from 'react'

import axios from "axios"
import { useNavigate } from 'react-router-dom';



const LogIn=({setToken})=>{



    const [user,setUser]=useState({email:'',password:''});
    const[error,setError]=useState('');
    const[success,setSuccess]=useState('')
    const navigate=useNavigate()
    
    // let[name,email,password,confirmpassword]=user;
    // console.log(user)
    async function implementSignup(e){
        e.preventDefault();
        if(!user.email || !user.password){
            setError("All fields are required")
            setSuccess("")
            return;
        }
       

        try{
            let response=await axios.post("https://instagram-express-app.vercel.app/api/auth/login",
            {email:user.email,password:user.password},
            )
            console.log(response.data)
            console.log(response.data.data.token)
            setToken(response.data.data.token)
            setSuccess(response.data.message)
            navigate("/dashboard")
            // setError("")
        }
        catch(e){
            console.log(e.message)
            navigate("/signup")

            // setSuccess("")

        }
        
    }






    return(
        <div>
            {error && <h3 style={{color:"#800000"}}>{error}</h3>}
            {success && <h3 style={{color:"green"}}>{success}</h3>}

            <from className='singup-form'>
                <input type='email' id='email' placeholder='Enter Email' autoComplete='user-mail' onChange={e=>setUser({...user,email:e.target.value})}/>
                <input type='password' id='password' placeholder='Enter Password' autoComplete='current-password' onChange={e=>setUser({...user,password:e.target.value})}/>


                <button type='sumbmit' onClick={implementSignup}>LogIn</button>

            </from>
        </div>
        
    )
}

export default LogIn;

