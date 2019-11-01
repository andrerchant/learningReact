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

  function useSearchBadges(badges){
    const [query,setQuery] = React.useState('');
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges);
    
    React.useMemo( () => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });

        setFilteredBadges(result)
    }, [ badges, query ]);

    return { query, setQuery, filteredBadges }
  }

function BadgesList(props) {
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges)
    

    if(filteredBadges.length === 0){
        return(
            <div>
                <div className="form-group">
                    <label>
                        Filter badges
                    </label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={
                            e => {
                                setQuery(e.target.value)
                            }
                        }
                    />
                </div>
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </div>
        );
    }

    return(
        <div>
            <div className="form-group">
                <label>
                    Filter badges
                </label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={
                        e => {
                            setQuery(e.target.value)
                        }
                    }
                />
            </div>
            <ul className="List-badges">
                {filteredBadges.map(badge=>{
                    return(
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration.none" to={`/badges/${badge.id}`}>
                                <BadgesListItem badge={badge}/>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default BadgesList;