import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import Cookies from 'universal-cookie'
import '../style/ContentForm.css'
import ComponentHeader from './ComponentHeader'
import ComponentForm from './ComponentForm'
import ContentSearch from './ContentSearch'

const ContentForm = () => {
    const cookies = new Cookies()
    const [usuario, setUsuario] = useState({})
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
        history.push('/')
    }

    return (
        <div className="content-fluid" id='font-text'>
            <ComponentHeader />
            <h2 className='text-center font-weight-bold'>Bienvenido a GitInnova</h2>
            <div className='row' id='margin-row'>
                <div className="col-12 col-md-12 col-lg-6 
                d-flex justify-content-center flex-column height-register">
                    <div className="title-form text-center">
                        <h5 class="font-weight-bold">Registra la información del candidato</h5>
                    </div>
                    <div className=' d-flex justify-content-center align-items-center mt-5'>
                        <ComponentForm 
                        handleChange = {handleChange} 
                        handleSubmit = {handleSubmit}
                        />
                    </div>
                </div>
                <div className='col-12 col-md-12 col-lg-6 d-flex justify-content-center'>
                    <ContentSearch />
                </div>
            </div>
            <div className='form-group footer'>
                <p className='text-center p-2'> 
                &copy;Derechos reservados por Juan Torres</p>
            </div>
        </div>
        
    )
}
export default ContentForm