import React from 'react'

const RowTable = ({number, name, description, branch, language, url}) => {
    return ( 
        <tr>
            <th scope="row">{number}</th>
            <td>{name}</td>
            <td>{description}</td>
            <td>{branch}</td>
            <td>{language}</td>
            <td>{url}</td>
        </tr>
     );
}
 
export default RowTable