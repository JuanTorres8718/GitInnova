import React from 'react'

const RowTable = ({name, description, branch, language, url}) => {
    return ( 
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>{branch}</td>
            <td>{language}</td>
            <td>{url}</td>
        </tr>
     );
}
 
export default RowTable