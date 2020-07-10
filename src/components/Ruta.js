import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from '../components/ContentForm'
import Search from '../components/ContentSearch'

const Ruta = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Form} />
                <Route exact path='/Search' component={Search} />
            </Switch>
        </BrowserRouter>    
     );
}
 
export default Ruta;