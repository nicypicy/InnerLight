// import React from "react";
import './styles/Header.css';
import Homepage from "./pages/Homepage";
import Accordion from './components/Accordion';
import './styles/global.css';


export default function App(){
  return (
    <div className="App">
    <Homepage />
    <Accordion />
    </div>
  );
}