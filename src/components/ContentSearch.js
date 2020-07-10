import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import ContentTable from './ContentTable'
import Pagination from './Pagination'


const ContentSearch = () => {
    const cookies = new Cookies()
    const [user, setUser] = useState()
    const [repos, setRepos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [reposPerPage] = useState(5)

    const handleChange = (value) =>{
        setUser(value)
    }

    const handleSubmit = async () => {
        const array = []
        await axios.get(`https://api.github.com/users/${user}/repos`)
        .then((res)=>{
            const resultado = res.data
            for (let i = 0; i < resultado.length; i++) {
                let object = {
                    id : i+1,
                    name : resultado[i].name,
                    description : resultado[i].description,
                    language : resultado[i].language,
                    branch : resultado[i].default_branch,
                    url : resultado[i].html_url
                }
                array.push(object)
            }
            setRepos(array)     
        })
    }

    const indexOfLastRepo = currentPage * reposPerPage
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage
    const currentRepo = repos.slice(indexOfFirstRepo, indexOfLastRepo)

    const paginate = (pageNumber, e) => {
        e.preventDefault()
        setCurrentPage(pageNumber)
    }    

    return ( 
        <div className="content-search">
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <p className="navbar-brand">
                        Bienvenid@{' '}
                        {cookies.get('Name')}{' '}
                        {cookies.get('SurName')}    
                    </p>
                    <button className="navbar-toggler" type="button" 
                        data-toggle="collapse" 
                        data-target="/navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <p>Correo: {cookies.get('Email')}</p>
                        <p>Cedula: {cookies.get('Document')}</p>
                        <p>Birthday: {cookies.get('Birthday')}</p>
                        <p>Usuario GitHub: {cookies.get('User')}</p>
                    </div>
                </nav>
            </div>
            <div className="content-user-github">
                <p>Bienvenido al Buscador de repositorios de los usuarios de GitHub</p>
                <input
                    type="text"
                    className="form-control col-4"
                    id="user"
                    onChange={(event) => {
                        handleChange(event.target.value)
                    }}
                />
                <button onClick={handleSubmit}>Buscar</button>
            </div>
            <div className='list-repo col-10'>
               {repos.length > 0 ? <ContentTable  repos = {currentRepo}/> : ''}
               <Pagination 
               reposPerPage = {reposPerPage} 
               totalRepos = {repos.length} 
               paginate = {paginate}
               />
            </div>
        </div>
    )
}
 
export default ContentSearch