import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ciLogo = require('../../assets/cilogo.svg')
const visio = require('../../assets/visiologo.png')
const ysera = require('../../assets/ysera.png')

function Layout(props) {
    return (
      <div className='layout'>
        <div className='header'>
          <div className="logos">
            
            <img src={ysera} className="cilogo" />
            <img src={ciLogo} className="cilogo" />
            <img src={visio} className="cilogo" />
  
          </div>
         
          <nav className="menu">
            <Link to="/" className="links">
              <span>Home</span>
            </Link>
            <Link to="/calculate" className="links">
              <span>Calcular</span>
            </Link>
            <Link to="/help" className="links">
              <span>Ajuda</span>
            </Link>
          </nav>
          
        </div>
        <div className='body'>
          {props.children}
        </div>
      </div>
    );
}

export default Layout;