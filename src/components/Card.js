import React, {Component} from 'react';
import pic from '../athlet.png';


class Card extends Component {

    render() {
        return (
            <div className="cardContainer">
                <div className="Card">
                    <img src={pic} alt="athlet" />
                    <h2>{this.props.name}</h2>
                    <div className="nationContainer">
                        <h3><strong>Age: </strong>{this.props.age}</h3>
                        <p className="nation"><strong>Nation: </strong> {this.props.nationality}</p>
                        <p className="classification"><strong>Classification: </strong>{this.props.classification}</p>
                        <h4 className="titles"><strong>Titles: </strong>{this.props.titles}</h4>
                        <p className="rank"><strong>Rank: </strong>{this.props.rank}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;