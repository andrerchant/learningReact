import React from 'react';
import "./styles/listBadges.css";

class BadgesList extends React.Component{
    render() {
        return(
            <ul className="List-badges">
                {this.props.badges.map(badge=>{
                    return(
                        <li key={badge.id}>
                            <div className="pic">
                                <img 
                                    src={badge.avatarUrl}
                                    alt={badge.firstName}
                                />
                            </div>
                            <div className="data">
                                <strong>
                                    {badge.firstName} {badge.lastName}
                                </strong>
                                <span className="twitter">
                                    @{badge.twitter}
                                </span>
                                <small>
                                    {badge.jobTitle}
                                </small>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList;