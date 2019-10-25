import React from 'react';

import "./styles/Badge.css"
import logotipoConf from '../images/badge-header.svg';

class Badge extends React.Component{
    render(){
        const fotoAndy = "https://instagram.fmex7-1.fna.fbcdn.net/vp/1119985ce3409471f3631c73d30cdb0d/5E64C107/t51.2885-19/s150x150/49683380_796737684024181_8687158980700536832_n.jpg?_nc_ht=instagram.fmex7-1.fna.fbcdn.net";
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logotipoConf} alt="Logotipo"/>
                </div>

                <article className="Badge__section-name">
                    <img className="Badge__avatar" src={fotoAndy} alt="Avatar"/>
                    <h1> André <br /> Merchant </h1>
                </article>

                <div className="Badge__section-info">
                    <h3>Frontend Engineer</h3>
                    <a href="https://twitter.com/andrerchant" >@andrerchant</a>
                </div>

                <footer className="Badge__footer">
                    #choroconf
                </footer>
            </div>
        );
    }
}

export default Badge;