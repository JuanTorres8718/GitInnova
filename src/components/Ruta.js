import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from '../components/ContentForm'

const Ruta = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Form} />
            </Switch>
        </BrowserRouter>    
     );
}
 
export default Ruta;