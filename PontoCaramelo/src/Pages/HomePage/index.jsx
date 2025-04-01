import { Header } from "../../Components/Header"
import './index.css'

export function HomePage(){
    return(
        <>
            <Header/>

            <main>
                <aside id="SearchBar">
                    <h1>Procurar por:</h1>
                    <input id='SearchInput' placeholder="Pesquisar por..." type="text" />
                    <div>
                        <h2>Produtos:</h2>
                        <br />
                        <a href="">Alimentadores.</a>
                        <a href="">Brinquedos.</a>
                        <a href="">Eletrônicos usados.</a>
                    </div>

                    <div>
                        <h2>Para tutor:</h2>
                        <br />
                        <a href="">Pontos de coleta.</a>
                        <a href="">Tutores.</a>
                        <a href="">Como reciclar lixo eletrônico.</a>
                    </div>

                    <div>
                        <h2>Troca e venda:</h2>
                        <br />
                        <a href="">Produtos usados.</a>
                        <br />
                        <a href="">Mais...</a>
                    </div>
                </aside>

                <div id="InitialText">
                    <h1>Bem-vindo à nossa startup!</h1>
                    <h2>Compre e troque!</h2>
                    <br />
                    
                    <div id="BuyBox">
                        <div className="ProductLine">
                            <div className="ProductBox">
                                <img width='200px' src="/src/assets/Aspirador de pelo elétrico.webp"/>
                                <div className="ProductInfo">
                                    <h3>Aspirador de Pelos</h3>
                                    <p>55,00💰</p>
                                    <button>Comprar</button>
                                </div>
                            </div>

                            <div className="ProductBox">
                                <img width='200px' src="/src/assets/Bebedouro inteligente.webp"/>
                                <div className="ProductInfo">
                                    <h3>Bebedouro Inteligente</h3>
                                    <p>150,00💰</p>
                                    <button>Comprar</button>
                                </div>
                            </div>

                            <div className="ProductBox">
                                <img width='200px' src="/src/assets/Brinquedo automático.webp"/>
                                <div className="ProductInfo">
                                    <h3>Brinquedo Automá...</h3>
                                    <p>100,00💰</p>
                                    <button>Comprar</button>
                                </div>
                            </div>
                        </div>

                        <div className="ProductLine">
                            <div className="ProductBox">
                                <img width='200px' src="/src/assets/Coleira rastreadora.webp"/>
                                <div className="ProductInfo">
                                    <h3>Coleira Rastreadora</h3>
                                    <p>110,00💰</p>
                                    <button>Comprar</button>
                                </div>
                            </div>

                            <div className="ProductBox">
                                <img width='200px' src="/src/assets/Comedouro automático para peixes.webp"/>
                                <div className="ProductInfo">
                                    <h3>Comedouro Automá...</h3>
                                    <p>150,00💰</p>
                                    <button>Comprar</button>
                                </div>
                            </div>

                            <div className="ProductBox">
                                <img width='200px' src="/src/assets/Comedouro por aproximação.webp"/>
                                <div className="ProductInfo">
                                    <h3>Comedouro por apr...</h3>
                                    <p>105,00💰</p>
                                    <button>Comprar</button>
                                </div>
                            </div>
                        </div>

                        <div className="ProductLine">
                            <div className="ProductBox">
                                <img width='200px' src="/src/assets/Comedouro inteligente.webp"/>
                                <div className="ProductInfo">
                                    <h3>Comedouro Inteli...</h3>
                                    <p>100,00💰</p>
                                    <button>Comprar</button>
                                </div>
                            </div>

                            <div className="ProductBox">
                                <img width='200px' src="/src/assets/Fones antiruído.webp"/>
                                <div className="ProductInfo">
                                    <h3>Fones Antiruído</h3>
                                    <p>120,00💰</p>
                                    <button>Comprar</button>
                                </div>
                            </div>

                            <div className="ProductBox">
                                <img width='200px' src="/src/assets/Lançador de bolinha automático.webp"/>
                                <div className="ProductInfo">
                                    <h3>Lançador de Bolin...</h3>
                                    <p>60,00💰</p>
                                    <button>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </main>
        </>
    )
}