import React from "react";   
import { useState } from "react"; 
import Carro1 from '../imagens/carro1.jpg'
import Header from "./Header";

export default function Venda(){ 
    const preco_0 = 0 //Mostra todos os carros
    const preco_1 = 50000 //Mostra só os carros de 50000 
    const preco_2 = 80000 //Mostra só os carros de 80000 
    const preco_3 = 90000 //Mostra só os carros de 90000

    const [inputPreco, setInputPreco] = useState(''); 
    const [inputAno, setInputAno] = useState('') 

    const showCarros50=()=>{ 
        return( 
            <div className="main-cars carro-50">
                    <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p> 
                            <p className="preco-carro">Valor: R$50000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                    </div> 
                    <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$50000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                    </div> 
                    <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$50000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                    </div> 
                </div> 
        )
    } 
    const showCarros80=()=>{ 
        return( 
            <div className="main-cars carro-80">
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$80000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$80000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$80000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                    </div> 
        )
    } 
    const showCarros90=()=>{ 
        return( 
            <div className="main-cars carro-90">
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$90000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$90000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$90000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                    </div> 
        )
    }
    const showCarros=()=>{ 
        return( 
            <> 
                <div className="main-cars carro-50">
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p> 
                            <p className="preco-carro">Valor: R$50000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$50000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$50000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                </div>  
                    <div className="main-cars carro-80">
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$80000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$80000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$80000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button>
                        </div> 
                    </div> 
                    <div className="main-cars carro-90">
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p> 
                            <p className="preco-carro">Valor: R$90000</p> 
                            <button type="button" class="btn btn-danger">Mais Detalhes</button> 
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$90000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button> 
                        </div> 
                        <div className="cars-content"> 
                            <img className="img-car-sell" alt="Volkswagen Karmann-ghi 1969" src={Carro1}/> 
                            <p className="tipo-carro">Volkswagen Karmann-ghia</p> 
                            <p className="description-carro">1.6 8v, Gasolina, 2P, Manual 1969</p>  
                            <p className="preco-carro">Valor: R$90000</p>
                            <button type="button" class="btn btn-danger">Mais Detalhes</button> 
                        </div>  
                    </div>
            </>
        )
    } 

    const mostraPreco=(p)=>{ 
       if(p == preco_0 || p < preco_0 || p == null || p == ' '){ 
            return showCarros()
       } else if(p == preco_1){ 
            return showCarros50()
       } else if(p == preco_2){ 
            return showCarros80()
       } else if(p == preco_3){ 
            return showCarros90()
       }
    } 

    

    return( 
        <>  
            <h2 className="title"><div className="div-title-venda"></div>Venda<div className="div-title-venda-2"></div></h2>
            <div className="main-venda"> 
                <div className="filtro-venda"> 
                    <div className="filtro-preco">
                        <h3 className="filtro-title">Filtro por preço</h3> 
                        <input type="text" value={inputPreco} placeholder="Digite o preço desejado..." onChange={(e) => setInputPreco(e.target.value)}/> 
                    </div>  
                </div> 
                <div className="cars-venda">  
                    {mostraPreco(inputPreco)}
                </div>
            </div>
        </>
    )
}