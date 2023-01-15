import './App.css';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import express from "express"
import { Button } from 'reactstrap';

import Home from "./Containers/Home/Home";
import Header from "./Containers/Home/Home";
import Login from "./Containers/User/Login/Login";
import Register from "./Containers/User/Register/Register";
import Profile from "./Containers/User/Profile/Profile";
import Libros from "./Containers/Libros/Libros";
import UserSettings from "./Containers/User/Settings/UserSettings/UserSettings";

// const app = express()
// const port = 3306

// app.use(express.json({limit:"100mb"}))

// app.post("/api/users",(req,res)=>{
//   console.log("dummy endPoint")
//   res.send("You have posted something")
// })

// app.get("/",(req,res)=> {
//   res.send("Hello word")
// })


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/UserSettings" element={<UserSettings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

  
export default App;