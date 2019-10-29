import React from 'react';

import "./styles/BadgeEdit.css"; 
import header from '../images/platziconf-logo.svg';
import Badge from '../components/badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component{
    state = {  
        loading: true,
        error: null,
        form:{
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
        }
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({
            loading: true,
            error: null,
        });

        try {
            const data = await api.badges.read(this.props.match.params.badgeId)

            this.setState({
                loading: false,
                form: data,
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error,
            });
        }
    }

    handleChange= e =>{
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            loading:true,
            error: null
        })

        try {
            await api.badges.update(this.props.match.params.badgeId,this.state.form);
            this.setState({
                loading:false
            })

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({
                loading:false,
                error: error
            })
        }
    }

    render(){
        //const fotoAndy = "https://instagram.fmex7-1.fna.fbcdn.net/vp/1119985ce3409471f3631c73d30cdb0d/5E64C107/t51.2885-19/s150x150/49683380_796737684024181_8687158980700536832_n.jpg?_nc_ht=instagram.fmex7-1.fna.fbcdn.net";
        if( this.state.loading ){
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="img-fluid" width="113" src={header} alt="" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge
                            firstName={this.state.form.firstName ||  'TuNombre'}
                            lastName={this.state.form.lastName ||  'TuApellido'}
                            jobTitle={this.state.form.jobTitle ||  'Puesto'}
                            twitter={this.state.form.twitter ||  '@usuario'}
                            email={this.state.form.email ||  'correo@dominio.com'}
                            avatar={this.state.form.avatar}
                        />, 
                        </div>
                        
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default BadgeEdit;