import './App.css';
// import './style.css'

import React,{useState} from 'react';

/*module downloaded 
npm i axios */

import SignUp from './Components/SignUp';
import DashBoard from './Components/DashBoard';
import LogIn from './Components/LogIn';
import {Routes,Route} from 'react-router-dom'
// npm i react-router-dom this library has some features to navigate from one component to another component
//local storage pending do that
//token is global so any componnent can access it use it
function App() {
  //token is global for the Components so any componnent can access it use it
  const[token,setToken]=useState('')
 
 
  return (
   <div>
    <Routes>
      <Route path="/signup" element={ <SignUp setToken={setToken}/>}/>
      <Route path="/login" element={<LogIn setToken={setToken}/>}/>
      <Route path="/dashboard" element={<DashBoard token={token} setToken={setToken}/>}/>

    </Routes>
   




   </div>
  );
}

export default App;
