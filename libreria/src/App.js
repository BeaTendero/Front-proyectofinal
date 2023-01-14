import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import express from "express"
import { Button } from 'reactstrap';

import Home from "./Containers/Home/Home/Home";
import Header from "./Componentes/Header/Header";
import Login from "./Containers/User/Login/Login";
import Register from "./Containers/Home/";
import Libros from "./Containers/Home/Libros/Libros";
import Profile from "./Containers/Home/User/UserSettings/Login/Profile/Profile";
import UserSettings from "./Containers/Home/User/UserSettings/UserSettings/userSettings";

const app = express()
const port = 3306

app.use(express.json({limit:"100mbcl"}))

app.post("/api/users",(req,res)=>{
  console.log("dummy endPoint")
  res.send("You have posted something")
})

app.get("/",(req,res)=> {
  res.send("Hello word")
})


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userSettings" element={<UserSettings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

  
export default App;