import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar"
import Card from "./components/cards/Card"
import "./App.css"



const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Card/>
      
    </div>
  );
}

export default App;
