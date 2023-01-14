import logo from './logo.svg';
import './App.css';
import React from 'react';
import express from "express"
import { Button } from 'reactstrap';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

  
export default App;