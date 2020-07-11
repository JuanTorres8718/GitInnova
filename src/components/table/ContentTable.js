import React from 'react'
import RowTable from './RowTable'

const ContentTable = ({repos, search}) => {
    return (
        <React.Fragment>
            <form className="form-inline">
                <input 
                className="form-control col-4 mr-sm-2" 
                type="search" placeholder="Buscar"
                aria-label="Search"
                id= "search-input"
                onChange={search}
                />
            </form>
            <div className='table-responsive height-table'>
                <table className="table margin-table">
                    <thead className='thead primary-color text-color'>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Language</th>
                        <th scope="col">Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((repo)=>{
                            return (
                            <RowTable 
                                key = {repo.id}
                                name = {repo.name}
                                description = {repo.description}
                                branch = {repo.branch}
                                language = {repo.language}
                                url = {repo.url}
                            />   
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
     )
}
 
export default ContentTable