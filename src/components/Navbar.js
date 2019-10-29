import React from 'react';
import {Link} from 'react-router-dom';

import "./styles/Navbar.css"
import logotipo from '../images/badge-header.svg';

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logotipo} alt="logotipo" />
                        <span className="font-weight-light">Dinoco</span> 
                        <span className="font-weight-bold">Inc</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;