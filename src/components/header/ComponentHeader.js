import React from 'react'
import Cookies from 'universal-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarAlt, faEnvelope, faIdCard} from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const ComponentHeader = () => {
    const cookies = new Cookies()
    return (
          <nav className="fixed-top navbar navbar-expand-lg navbar-light primary-color">
              <p className="navbar-brand" id='color-light'>
                    <FontAwesomeIcon icon={faUser} /> {' '}
                    {cookies.get('Name')}{' '}
                    {cookies.get('SurName')}    
              </p>
              <button className="navbar-toggler" 
              type="button" data-toggle="collapse" 
              data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent"
              id='color-btn-light'
              aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                    <p className='text-color margin-p-header'>
                        <FontAwesomeIcon icon={faEnvelope} /> {cookies.get('Email')}
                    </p>
                    <p className='text-color margin-p-header'>
                        <FontAwesomeIcon icon={faIdCard} /> {cookies.get('Document')}
                    </p>
                    <p className='text-color margin-p-header'>
                        <FontAwesomeIcon icon={faCalendarAlt} /> {cookies.get('Birthday')}
                    </p>
                    <p className='text-color margin-p-header'>
                        <FontAwesomeIcon icon={faGithubAlt} /> {cookies.get('User')}
                    </p>
              </div>
          </nav>
    )
}

export default ComponentHeader
