import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import Cookies from 'universal-cookie'
import '../style/ContentForm.css'
import ComponentHeader from './header/ComponentHeader'
import ComponentForm from './formRegister/ComponentForm'
import ContentSearch from './search/ContentSearch'

const ContentForm = () => {
    const cookies = new Cookies()
    const [usuario, setUsuario] = useState({
        Name: '',
        SurName: '',
        Document: '',
        Birthday: '',
        Email: '',
        User: ''
    })
    let history = useHistory();

    const handleChange = (name ,value) =>{
        setUsuario({
            ...usuario,
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        cookies.set('Name', usuario.Name, { path : '/' })
        cookies.set('SurName', usuario.SurName, { path : '/' })
        cookies.set('Document', usuario.Document, { path : '/' })
        cookies.set('Birthday', usuario.Birthday, { path : '/' })
        cookies.set('Email', usuario.Email, { path : '/' })
        cookies.set('User', usuario.User, { path : '/' })
        setUsuario({
            Name: '',
            SurName: '',
            Document: '',
            Birthday: '',
            Email: '',
            User: ''
        })
        history.push('/')
        alert('Candidato Registrado exitosamente')
    }

    return (
        <div className="content-fluid" id='font-text'>
            <ComponentHeader />
            <h2 className='text-center font-weight-bold'
            style={{marginTop: '80px'}}
            >
                Bienvenido a GitInnova
            </h2>
            <p className='text-center'>Podrás registrar un usuario y lo visualizarás en la sección superior con sus datos además buscar los repositorios de cualquier usuario que este en GitHub</p>
            <div className='row' id='margin-row'>
                <div className="col-12 col-md-12 col-lg-6 height-register">
                    <div className='col-12 mt-4 d-flex justify-content-center flex-column'>
                        <div className="title-form text-center">
                            <h5 className='secundary-text'>Registra la información del candidato</h5>
                        </div>
                        <div className=' d-flex justify-content-center form-style'>
                            <ComponentForm 
                            handleChange = {handleChange} 
                            handleSubmit = {handleSubmit}
                            valueUser = {usuario}
                            />
                        </div>
                    </div> 
                </div>
                <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center margin-search'>
                    <ContentSearch />
                </div>
            </div>
            <div className='form-group footer'
            style={{marginTop: '15px'}}
            >
                <p className='text-center p-2'> 
                &copy;Derechos reservados por Juan Torres</p>
            </div>
        </div>
        
    )
}
export default ContentForm