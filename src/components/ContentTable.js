import React from 'react'
import RowTable from './RowTable'

const ContentTable = (repos) => {
    return ( 
        <table className="table">
            <thead className='thead-dark'>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Branch</th>
                <th scope="col">Language</th>
                <th scope="col">Url</th>
                </tr>
            </thead>
            <tbody>
                {repos.repos.map((repo)=>{
                    return (
                    <RowTable 
                        key = {repo.id}
                        number = {repo.id}
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
     )
}
 
export default ContentTable