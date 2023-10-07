import React,{useState,useEffect} from 'react'

import axios from "axios"
import { useNavigate } from 'react-router-dom';


const DashBoard=({token,setToken})=>{
   const[zuku,setZuku]=useState('')
   const[name,setName]=useState('')
   const navigate=useNavigate()


    useEffect(()=>{
        if(token){
            axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
                headers:{
                    "Authorization" : `Bearer ${token!=""?token:localStorage.getItem("token")}`
                }
            }).then((res)=>{
                    console.log(res.data)
                    console.log(res.data.data.user.name)
                    
                    setZuku(res.data.data.message)
                    setName(res.data.data.user.name)

                }
            )
            
        }
    },[token])


    function logout(){
        axios.delete("https://instagram-express-app.vercel.app/api/auth/logout",{
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        }).then((res)=>{
            setZuku("")
            setName("")
            setToken("")
            navigate("/signup")



        })
    }


    return(<div>
        <h1>DashBoard</h1>
        {name &&<h3>{name}</h3>}
        {token &&<p>{token}</p>}
            
        
         { zuku &&<p>{zuku}</p>}
           
        
        {token&&<button onClick={logout}>LogOut</button>}
            
        
    </div>)

}
export default DashBoard;