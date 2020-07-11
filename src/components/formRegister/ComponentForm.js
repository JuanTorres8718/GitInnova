import React from 'react'

const ComponentForm = ({handleChange, handleSubmit, valueUser}) => {
    return (
        <form onSubmit={handleSubmit} 
        className="form-git col-11"
        style= {{marginTop: '10px'}}
        >
            <div className="row">
                <div className="form-group col-6">
                    <label className='secundary-text' htmlFor="nombre">Nombres</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="nombre"
                    value={valueUser.Name}
                    onChange={(event) => {
                        handleChange('Name',event.target.value)
                    }}
                    />
                </div>
                <div className="form-group col-6">
                    <label className='secundary-text' htmlFor="apellidos">Apellidos</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="apellidos"
                    value={valueUser.SurName}
                    onChange={(event) => {
                        handleChange('SurName',event.target.value)
                    }}
                    />
                </div>
                <div className="form-group col-12">
                    <label className='secundary-text' htmlFor="cedula">Cédula</label>
                    <input 
                    type="number"
                    className="form-control"
                    id="cedula"
                    value={valueUser.Document}
                    onChange={(event) => {
                        handleChange('Document',event.target.value)
                    }}
                    />
                </div>
                <div className="form-group col-12">
                    <label className='secundary-text' htmlFor="birthday">Fecha de nacimiento</label>
                    <input 
                    type="date"
                    className="form-control"
                    id="birthday"
                    value={valueUser.Birthday}
                    onChange={(event) => {
                        handleChange('Birthday',event.target.value)
                    }}
                    />
                </div>
                <div className="form-group col-12">
                    <label className='secundary-text' htmlFor="email">Correo Electrónico</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={valueUser.Email}
                    onChange={(event) => {
                        handleChange('Email',event.target.value)
                    }}
                    />
                </div>
                <div className="form-group col-12">
                    <label className='secundary-text' htmlFor="user">Usuario GitHub</label>
                    <input
                    type="text"
                    className="form-control"
                    id="userForm"
                    value={valueUser.User}
                    onChange={(event) => {
                        handleChange('User',event.target.value)
                    }}
                    />
                </div>
                <div className="text-center col-12">
                    <button type="submit" className="btn-color-register">Registrar</button>
                </div>
            </div>
        </form>
    )
}

export default ComponentForm
