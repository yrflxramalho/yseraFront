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
              <span>Calculate</span>
            </Link>
            <Link to="/help" className="links">
              <span>Help</span>
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