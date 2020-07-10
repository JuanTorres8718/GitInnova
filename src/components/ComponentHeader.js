import React from 'react'
import Cookies from 'universal-cookie'

const ComponentHeader = () => {
    const cookies = new Cookies()
    return (
            <div className="header">
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                </nav> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
            </div> 
    )
}

export default ComponentHeader
