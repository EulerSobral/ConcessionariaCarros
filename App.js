import React from "react"; 
import Header from "./componentes/Header"; 
import Home from './componentes/Home'      
import Footer from "./componentes/Footer";
import Venda from './componentes/Venda' 
import Sobre from './componentes/Sobre' 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap'

export default function App() {
  return (
    <>   
      <BrowserRouter> 
          
        <Header/> 
          <Routes>               
              <Route path="/" element={<Home/>}/>
              <Route path="/venda" element={<Venda/>}/> 
              <Route path="/sobre" element={<Sobre/>}/> 
          </Routes>  
        <Footer/>
      </BrowserRouter>
    </>
  );
}