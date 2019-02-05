import React, {Component} from 'react';
import Card from './Card';
import '../App.css';
import axios from 'axios';


class All extends Component {

    constructor(props) {
        super(props);

        this.state = {
            athlets: [],
            isLoaded: false,
            isEmpty: false
        };
    }

    componentDidMount() {
        axios.get(`https://heroku-athletes.herokuapp.com/athletes`).then(res => {
            this.setState({
                athlets: res.data,
                isLoaded: true,
            })
            if (res.data.length === 0) {
                this.setState({
                    isEmpty: true
                })
            }
        });

    }

    eachAthlet(athlet, i) {
        return <Card
            name={athlet.name}
            nationality={athlet.nationality}
            age={athlet.age}
            classification={athlet.classification}
            rank={athlet.rank}
            titles={athlet.titles}
            key={athlet.id}
            index={i} />
    }

    render() {
        if (!this.state.isLoaded) {
            return <h1 className="loading">Loading...</h1>
        }
        else {
            if (this.state.isEmpty)
                return <h1 className="empty">There are no Athlets.</h1>
            else
                return (
                    <div className="mainPage">
                        {this.state.athlets.map(this.eachAthlet)}
                    </div>
                )
        }
    }
}

export default All;