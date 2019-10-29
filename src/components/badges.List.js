import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/listBadges.css";
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
            <div className="pic">
                {/* <img 
                    src={this.props.badge.avatarUrl}
                    alt={this.props.badge.firstName}
                /> */}
                <Gravatar
                    className="Badge__avatar"
                    email={this.props.badge.email} 
                />
            </div>
            <div className="data">
                <strong>
                    {this.props.badge.firstName} {this.props.badge.lastName}
                </strong>
                <span className="twitter">
                    {this.props.badge.twitter}
                </span>
                <small>
                    {this.props.badge.jobTitle}
                </small>
            </div>
        </div>
      );
    }
  }


class BadgesList extends React.Component{
    render() {
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            );
        }

        return(
            <ul className="List-badges">
                {this.props.badges.map(badge=>{
                    return(
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration.none" to={`/badges/${badge.id}`}>
                                <BadgesListItem badge={badge}/>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList;