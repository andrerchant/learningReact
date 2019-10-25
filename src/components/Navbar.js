import React from 'react';

import "./styles/Navbar.css"
import logotipo from '../images/badge-header.svg';

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logotipo} alt="logotipo" />
                        <span className="font-weight-light">Dinoco</span> 
                        <span className="font-weight-bold">Inc</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;