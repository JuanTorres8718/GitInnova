import React from 'react'

const Pagination = ({ reposPerPage, totalRepos, paginate}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalRepos/reposPerPage); i++) {
        pageNumbers.push(i)   
    }

    return (
        <nav className='nav-pagination'>
            <ul className="pagination">
                {pageNumbers.map(number=>(
                    <li key={number} className='page-item'>
                        <a onClick={(e) => paginate(number, e)} 
                        href='!#' className='page-link'
                        style={{color: '#24292e'}}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination