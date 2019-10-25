import React from 'react';

import "./styles/BadgeNew.css"; 
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/badge'

class BadgeNew extends React.Component{
    render(){
        const fotoAndy = "https://instagram.fmex7-1.fna.fbcdn.net/vp/1119985ce3409471f3631c73d30cdb0d/5E64C107/t51.2885-19/s150x150/49683380_796737684024181_8687158980700536832_n.jpg?_nc_ht=instagram.fmex7-1.fna.fbcdn.net";
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Badge
                            firstName="Andrew" 
                            lastName="merchant" 
                            jobTitle="Software developer"
                            twitter="andrerchant"
                            avatar={fotoAndy}
                        />, 
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BadgeNew;