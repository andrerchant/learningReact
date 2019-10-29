import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/badges.List';

import api from '../api'

class Badges extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            error:null,
            data:undefined,
        }
        console.log('1 constructor');
    }

    componentDidMount(){
        console.log("3. ComponentDidMount");
       /*  this.timeoutId = setTimeout(()=>{
            this.setState({
                data: undefined,
            })
        },3000); */

        this.fetchData();
    }

    fetchData= async () => {
        this.setState({
            loading:true, 
            error:null,
        });

        try {
            const data = await api.badges.list();
            this.setState({
                loading:false, 
                data:data,
            });
        } catch (error) {
            this.setState({
                loading:false, 
                error: error
            });
        }
    }

    componentDidUpdate(prevProps,prevState){

    }

    componentWillUnmount(){
        console.log("6. componentWillUnmount");
        // clearTimeout(this.timeoutId);
    }

    render(){
        if(this.state.loading === true){
            return "Loading";
        }

        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }

        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>
                

                <div className="Badge_container">
                    <div className="Badges__buttons">
                        <Link to="badges/new" className="btn btn-primary"> 
                            New Badge
                        </Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList 
                            badges={this.state.data}
                        />
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Badges;