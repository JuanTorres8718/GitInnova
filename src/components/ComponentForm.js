import React from 'react'

const ComponentForm = ({handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} 
        className="form-git mt-4 col-11"
        >
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
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </div>
            </div>
        </form>
    )
}

export default ComponentForm
