import './index.css'
import { Header } from "../../Components/Header";
import { useState } from 'react';

export function LoginPage(){
    const [email, setEmail] = useState('')
    const [pass, setPass]   = useState('')

    function LoginValidate(event){
        event.preventDefault();

        if(email === 'andremilani34@gmail.com' && pass === 'Senha123'){
            window.location.href = '/homepage'
            return alert('Login bem sucessido!')
        }
        else{
            return alert('Login não feito')
        }
    }

    return(
        <>
            <Header/>
            
            <main>
                <form>
                    <h1>Login</h1>
                    <div className="InputBox">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            id="email" 
                            name="email" 
                            placeholder="exemplo@gmail.com" 
                            type="email" 
                            value={email}
                            onChange={() => {setEmail(event.target.value)}}
                        />
                    </div>

                    <div className="InputBox">
                        <label htmlFor="pass">Senha:</label>
                        <input 
                            id="pass" 
                            name="pass" 
                            placeholder="SenhaForte123!" 
                            type="password"
                            value={pass}
                            onChange={() => {setPass(event.target.value)}}
                        />
                    </div>

                    <button onClick={() => {LoginValidate(event)}}>Logar</button>
                </form>
            </main>
        </>
    )
}