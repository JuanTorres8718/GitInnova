import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import Cookies from 'universal-cookie'
import '../style/ContentForm.css'

const ContentForm = () => {
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
        const cookies = new Cookies()
        cookies.set('Name', usuario.Name, { path : '/Search' })
        cookies.set('SurName', usuario.SurName, { path : '/Search' })
        cookies.set('Document', usuario.Document, { path : '/Search' })
        cookies.set('Birthday', usuario.Birthday, { path : '/Search' })
        cookies.set('Email', usuario.Email, { path : '/Search' })
        cookies.set('User', usuario.User, { path : '/Search' })
        history.push('/Search')
    }

    return (
        <div 
        className="content-form d-flex
        justify-content-center 
        align-items-center"
        >
            <form onSubmit={handleSubmit} 
            className="form-git mt-4 col-10 col-md-8 col-lg-6"
            >
                <div className="title-form text-center">
                    <h3>Bienvenido a GitInnova</h3>
                    <p>Diligencia el formulario</p>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <label htmlFor="nombre">Nombres</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="nombre" 
                        onChange={(event) => {
							handleChange('Name',event.target.value)
						}}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input 
                        type="text"
                        className="form-control"
                        id="apellidos"
                        onChange={(event) => {
							handleChange('SurName',event.target.value)
						}}
                        />
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="cedula">Cedula</label>
                        <input 
                        type="number"
                        className="form-control"
                        id="cedula"
                        onChange={(event) => {
							handleChange('Document',event.target.value)
						}}
                        />
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="birthday">Fecha de nacimiento</label>
                        <input 
                        type="date"
                        className="form-control"
                        id="birthday"
                        onChange={(event) => {
							handleChange('Birthday',event.target.value)
						}}
                        />
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={(event) => {
							handleChange('Email',event.target.value)
						}}
                        />
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="user">Usuario GitHub</label>
                        <input
                        type="text"
                        className="form-control"
                        id="user"
                        onChange={(event) => {
							handleChange('User',event.target.value)
						}}
                        />
                    </div>
                    <div className="text-center col-12">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ContentForm