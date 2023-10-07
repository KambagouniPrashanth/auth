import React from "react";
import  ReactDOM  from "react-dom";
import App from './App'
//befor using below statement run this commnad in terminal  npm i react-router-dom to get alll properties of method of this library
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
<App/>
</BrowserRouter>,document.getElementById("root"))