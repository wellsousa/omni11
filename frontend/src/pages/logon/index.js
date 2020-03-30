import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

function Logon(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function handleLogon(e){
        e.preventDefault()

        try{
            const response = await api.post('session', {"email" : email, "password": password})

            localStorage.setItem('ongId', response.data.id)
            localStorage.setItem('ongName', response.data.name)
           console.log( {"name": localStorage.getItem('ongName'), "id": localStorage.getItem('ongId')} )

           history.push('/profile')
        }catch(err){
            alert('Falha no logon, verifique usuario e senha')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>

                    <input 
                        type="text" 
                        placeholder="Seu email"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />
                    <input
                        type="text"
                        placehoder="Sua senha"
                        value={password}
                        onChange={ e=> setPassword(e.target.value) }
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}

export default Logon