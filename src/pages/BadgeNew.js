import React from 'react';

import "./styles/BadgeNew.css"; 
import header from '../images/badge-header.svg';
import Badge from '../components/badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    state = {  form:{
        firstName: 'TuNombre',
        lastName: 'TuApellido',
        email: 'correo@dominio.com',
        jobTitle: 'Puesto',
        twitter: '@usuario',
        
    }  };

    handleChange= e =>{
        //const nextForm = this.state.form;
        //nextForm[e.target.name] = e.target.value;

        this.setState({
            form: {
                ... this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }

    render(){
        const fotoAndy = "https://instagram.fmex7-1.fna.fbcdn.net/vp/1119985ce3409471f3631c73d30cdb0d/5E64C107/t51.2885-19/s150x150/49683380_796737684024181_8687158980700536832_n.jpg?_nc_ht=instagram.fmex7-1.fna.fbcdn.net";
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle}
                            twitter={this.state.form.twitter}
                            email={this.state.form.email}
                            avatar={fotoAndy}
                        />, 
                        </div>
                        
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default BadgeNew;