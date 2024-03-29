import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/badges.List';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api'
import MiniLoader from '../components/MiniLoader';
import { clearInterval } from 'timers';

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

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
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
        if(this.state.loading === true && !this.state.data){
            return <PageLoading />;
        }

        if (this.state.error) {
            return(
                <PageError error={this.state.error} />
            );
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
                    <BadgesList 
                        badges={this.state.data}
                    />
                    {this.state.loading && <MiniLoader/>}
                </div>

            </React.Fragment>
        );
    }
}

export default Badges;