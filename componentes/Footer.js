import React from "react";  
import { Link, Outlet } from "react-router-dom";

export default function Footer(){ 
    return( 
        <footer className="bg-dark text-center text-white" > 
                    <Link className="container p-4 text-white text-decoration-none" to="/">Home</Link>
                    <Link className="container p-4 text-white text-decoration-none" to="/venda">Venda</Link>
                    <Link className="container p-4 text-white text-decoration-none" to="/contato">Contato</Link> 
        </footer>
    )
}