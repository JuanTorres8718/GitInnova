import React, { useState } from 'react'
import axios from 'axios'
import ContentTable from './ContentTable'
import Pagination from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../style/ContentSearch.css'


const ContentSearch = () => {
    const [user, setUser] = useState()
    const [repos, setRepos] = useState([])
    const [repoBackup, setRepoBackup] = useState([])
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
            setRepoBackup(array)  
            if(resultado.length === 0){
                alert('usuario no existe o sin repositorios creados')
            }
        })
    }

    const indexOfLastRepo = currentPage * reposPerPage
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage
    const currentRepo = repos.slice(indexOfFirstRepo, indexOfLastRepo)

    const paginate = (pageNumber, e) => {
        e.preventDefault()
        setCurrentPage(pageNumber)
    }
    
    const searchRepo = (e) => {
        const names = e.target.value
        const info = repoBackup
        const result = info.filter(repo =>
          repo.name.toLowerCase().indexOf(names.toLowerCase()) > -1)
        if(names.length >= 3){
            if(result.length>0){
                let array = []
                for (let i = 0; i < result.length; i++) {
                    array.push(result[i]) 
                    if(i === 4){
                        i = result.length
                    }
                }
                setRepos(array)
                setCurrentPage(1)
            }else{
                setRepos(result)
                setCurrentPage(1)
            }
            
        }else{
            setRepos(info)
        }
    }

    return ( 
        <div className="col-12 mt-4">
            <div className="content-user-github">
                <h5 class="text-center font-weight-bold">Buscador de repositorios de usuarios de GitHub</h5>
                <div className='form-group d-flex justify-content-center'>
                    <input
                        type="text"
                        className="form-control col-6"
                        id="user"
                        onChange={(event) => {
                            handleChange(event.target.value)
                        }}
                    />
                    <button className='btn-search' onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
            <div className='list-repo'>
                <Pagination 
                   reposPerPage = {reposPerPage} 
                   totalRepos = {repos.length} 
                   paginate = {paginate}
                />
                {repoBackup.length > 0 ? 
                    <ContentTable search ={searchRepo} repos = {currentRepo}/> 
                : ''}
            </div>
        </div>
    )
}
 
export default ContentSearch