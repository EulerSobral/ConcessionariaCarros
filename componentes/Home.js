import Footer from "./Footer";
import React from "react";  
import Chager from '../imagens/1969 Dodge Charger.jpeg'
import Carro1 from '../imagens/carro1.jpg'
import Carro2 from '../imagens/bg.jpg' 
import Header from "./Header";

export default function Main(){ 
    return( 
        <>  
            <div className="div-bg"> 
                <div className="btns"> 
                <a href="#" class="btn-bg">Consultoria</a> 
                <a href="#" class="btn-bg">Compra</a> 
                <a href="#" class="btn-bg">Venda</a> 
                <a href="#" class="btn-bg-e">E-MAIL@HOTMAIL.COM</a>
                </div>
            </div> 
            <div className="content-destaque"> 
            <div className="div-title"></div><h2 className="title-cars">Veículos em destaque</h2> <div className="div-title-2"></div>
                <div className="cars"> 
                    <div className="cars-content"> 
                        <img className="img-car" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                        <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                        <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p> 
                        <button type="button" class="btn btn-danger">Mais Detalhes</button>
                    </div> 
                    <div className="cars-content"> 
                        <img className="img-car" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                        <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                        <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p> 
                        <button type="button" class="btn btn-danger">Mais Detalhes</button>
                    </div> 
                    <div className="cars-content"> 
                        <img className="img-car" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                        <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                        <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p> 
                        <button type="button" class="btn btn-danger">Mais Detalhes</button>
                    </div>
                </div>
            </div>  
            <form>  
            <div className="div-2-title"></div><h2 className="title-cars">Contato</h2> <div className="div-2-title-2"></div>
            <div class="form-group">
                    <label for="exampleInputName">Nome</label>
                    <input type="name" class="form-control form-control-lg" id="exampleInputName" aria-describedby="emailHelp" placeholder="Digite seu nome..."/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email..."/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Telefone</label>
                    <input type="tel" class="form-control form-control-lg" id="exampleInputTel" placeholder="Digite seu telefone..."/>
                </div>
                <div class="form-group"> 
                    <label>Envie uma mensagem</label>
                    <textarea class="form-control" placeholder="Digite sua mensagem..."> 

                    </textarea>
                </div>
                <button type="submit" class="btn btn-lg w-25 btn-primary">Enviar</button>
            </form> 
        </>
    )
}