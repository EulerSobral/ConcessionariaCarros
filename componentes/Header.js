import React from "react";     
//import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import imgMenu from '../imagens/logo.jpg'
//import Home from './Home' 
//import Venda from './Venda' 
//import Contato from './Contato'

export default function Header(){  
    return(  
        <> 
        <nav class="class-hide-mobile navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img src={imgMenu}/> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src={imgMenu}/></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                <ul class="class-hide-mobile navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/venda">Venda</Link>
                    </li> 
                    <li class="nav-item">
                        <Link className="nav-link"  to="/sobre">Sobre</Link> 
                    </li>
                </ul>
             
                </div>
            </div>
            </div>  
            <Outlet/>
        </nav>  
        
        </>
    )
} 
