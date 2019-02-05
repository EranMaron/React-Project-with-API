import React, {Component} from 'react';
import Card from './Card';


class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            age: 18,
            nationality: "default nationality",
            athlets: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.updateTheState = this.updateTheState.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    submitHandler = event => {
        event.preventDefault();

        fetch(`https://heroku-athletes.herokuapp.com/athletes/${this.state.age}/${this.state.nationality}`)
            .then(res => res.json())
            .then(json => {
                this.setState({athlets: []});
                if (json.length !== 0) {
                    json.map(athlet => {
                        this.updateTheState({
                            id: athlet.id,
                            name: athlet.name,
                            age: athlet.age,
                            nationality: athlet.nationality,
                            classification: athlet.classification,
                            titles: athlet.titles,
                            rank: athlet.rank
                        })
                        return 0;
                    });
                }
                else alert("Athlet Not Found");

            })
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

    updateTheState({id = 1, name = "undefined", age = 18, nationality = "Nation", classification = "", titles = "", rank = 0}) {
        this.setState(prevState => ({
            athlets: [
                ...prevState.athlets, {
                    id,
                    name,
                    age,
                    nationality,
                    classification,
                    titles,
                    rank
                }
            ]
        }))
    }


    render() {
        return (
            <div>
                <h1 className="title">Search an Athlet:</h1>
                <form className="MyForm" onSubmit={this.submitHandler}>
                    <label>Age:
                            <input type="number" name="age" require="true" onChange={this.handleChange} />
                    </label>
                    <label>Nationality:</label>
                    <input type="text" name="nationality" onChange={this.handleChange} />
                    <button type="submit">Serach</button>
                </form>
                {this.state.athlets.map(this.eachAthlet)}
            </div>
        )
    }
}

export default Search;