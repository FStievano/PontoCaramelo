import { useState } from 'react'
import { Header } from "../../Components/Header"
import './index.css'

export function ContactPage(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return(
        <>
            <Header/>

            <main>
            <form>
                    <h1>Contate-nos</h1>
                    <div className="InputBox">
                        <label htmlFor="name">Nome:</label>
                        <input
                            id="name" 
                            name="name" 
                            placeholder="Exemplo da Silva" 
                            autoComplete='off'
                            type="text" 
                            value={name}
                            onChange={() => {setName(event.target.value)}}
                        />
                    </div>

                    <div className="InputBox">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            id="email" 
                            name="email" 
                            placeholder="exemplo@gmail.com" 
                            autoComplete='on'
                            type="email" 
                            value={email}
                            onChange={() => {setEmail(event.target.value)}}
                        />
                    </div>

                    <div className="InputBox">
                        <label htmlFor="message">Mensagem:</label>
                        <input
                            id="message" 
                            name="message" 
                            placeholder="Sua mensagem..." 
                            type="text" 
                            value={message}
                            onChange={() => {setMessage(event.target.value)}}
                        />
                    </div>

                    <button onClick={() => {LoginValidate(event)}}>Enviar</button>
                </form>
            </main>
        </>
    )
}