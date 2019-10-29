import React from 'react';

import "./styles/Badge.css"
import logotipoConf from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component{
    constructor(props){
        super(props);
        /* this.state = {
            prueba : { cosa : true},
        } */
    }
    render(){
        
        

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logotipoConf} alt="Logotipo"/>
                </div>

                <article className="Badge__section-name">
                    {/* <img className="Badge__avatar" src={this.props.avatar} alt="Avatar"/> */}
                    <Gravatar
                        className="Badge__avatar"
                        email={this.props.email} 
                    />
                    <h1> {this.props.firstName} <br /> {this.props.lastName} </h1>
                </article>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <small>
                        <a href="https://twitter.com/andrerchant"> {this.props.twitter} </a>
                    </small>
                </div>

                <footer className="Badge__footer">
                    #choroconf
                </footer>
            </div>
        );
    }
}

export default Badge;