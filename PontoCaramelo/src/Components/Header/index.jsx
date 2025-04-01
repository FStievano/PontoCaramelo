import { use, useEffect, useState } from 'react'
import './index.css'

export function Header(){
    const [hide, setHide] = useState()
    useEffect(() => {
        window.location.pathname != "/" ? setHide(true) : setHide(false) 
    })

    const [hidePerfil, setHidePerfil] = useState()
    useEffect(() => {
        window.location.pathname === "/homepage" ? setHidePerfil(true) : setHidePerfil(false) 
    })


    return(
        <>
            <header>
                <div>
                    <h1>.Caramelo</h1>
                </div>

                <nav className='NavBar'>
                    <a className='PageLink' href="/contactpage">Contato</a>
                    <a className='PageLink' href='/' style={
                        {display: hide ? 'inline-block' : 'none'}
                    }>Login</a>
                    <img id='PerfilImage'
                        src="/src/assets/UserImage.png"
                        style={{display: hidePerfil ? 'inline-block' : 'none'}}
                    />
                </nav>
            </header>
        </>
    )
}