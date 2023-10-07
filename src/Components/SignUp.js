import React,{useState} from 'react'

import axios from "axios"

import {useNavigate} from 'react-router-dom'


const SignUp=({setToken})=>{
    const navigate=useNavigate();



    const [user,setUser]=useState({name:'',email:'',password:'',confirmpassword:''});
    const[error,setError]=useState('');
    const[success,setSuccess]=useState('')

    
    
    console.log(user)
    async function implementSignup(e){
        e.preventDefault();
        if(!user.name || !user.email || !user.password || !user.confirmpassword ){
            setError("All fields are required")
            setSuccess("")
            return;
        }
        else if(user.password!==user.confirmpassword){
            setError("Password should be same")
            setSuccess("")
            return;
        }

        try{
            let response=await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",
            {name:user.name,email:user.email,password:user.password},
            )
            console.log(response.data)
            console.log(response.data.data.token)
            setToken(response.data.data.token)
            setSuccess(response.data.message)
            localStorage.setItem("token",response.data.data.token)
            navigate("/dashboard")
            // setError("")
        }
        catch(e){
            console.log(e.message)
            // setSuccess("")

        }
        // user.name='';
        // user.email='';
        // user.password='';
        // user.confirmpassword='';
        
        
    }

    //by using this
    // <input type='text' id='name' placeholder='Enter name'  autoComplete='user-name' onChange={e=>setUser({...user,name:e.target.value})} />//adding the previous data to the user and  new data to user object







    return(
        <div>
            {error && <h3 style={{color:"red"}}>{error}</h3>}
            {success && <h3 style={{color:"green"}}>{success}</h3>}

            <from className='singup-form'>
                <input type='text' id='name' placeholder='Enter name'  autoComplete='user-name' onChange={e=>setUser({...user,name:e.target.value})} />
                <input type='email' id='email' placeholder='Enter Email' autoComplete='user-mail' onChange={e=>setUser({...user,email:e.target.value})}/>
                <input type='password' id='password' placeholder='Enter Password' autoComplete='current-password' onChange={e=>setUser({...user,password:e.target.value})}/>


                <input type='password' id='confirmpassword' placeholder='Confirm Password' autoComplete='new-password' onChange={e=>setUser({...user,confirmpassword:e.target.value})}/>
                <button type='submit' onClick={implementSignup}>Singup</button>

            </from>
        </div>
        
    )
}

export default SignUp;

