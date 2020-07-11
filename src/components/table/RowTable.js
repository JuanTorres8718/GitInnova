import React from 'react'

const RowTable = ({name, description, branch, language, url}) => {
    return ( 
        <tr className='light-primary-color color-text-table'>
            <td>{name}</td>
            <td>{description}</td>
            <td>{branch}</td>
            <td>{language}</td>
            <td>
                <a className='color-text-table color-a-table' 
                href={url} target='_blank' rel="noopener noreferrer"
                >{url}</a></td>
        </tr>
     );
}
 
export default RowTable