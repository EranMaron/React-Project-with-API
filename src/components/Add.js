import React, {Component} from 'react';
import idGenerator from 'react-id-generator';
import '../App.css'

class Add extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            name: "",
            age: "",
            nationality: "",
            classification: "",
            titles: [],
            rank: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }


    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }


    submitHandler = event => {
        event.preventDefault();

        let temp = {
            "id": parseInt(idGenerator(222)),
            "name": this.state.name,
            "age": parseInt(this.state.age),
            "nationality": this.state.nationality,
            "classification": this.state.classification,
            "rank": parseInt(this.state.rank),
            "titles": this.state.titles
        }
        fetch(`https://heroku-athletes.herokuapp.com/athletes/add`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(temp)
        })
            .then(res => res.json)
            .then(json => alert("The Athlet was added successfully")
            )
    }

    render() {
        return (
            <div>
                <h1 className="title">Add new Athlet:</h1>
                <form className="MyForm" onSubmit={this.submitHandler}>
                    <label>Name:
                        <input type="text" name="name" require="true" onChange={this.handleChange} />
                    </label>
                    <label>Age:
                            <input type="number" name="age" require="true" onChange={this.handleChange} />
                    </label>
                    <label>Nationality:
                        <input type="text" name="nationality" require="true" onChange={this.handleChange} />
                    </label>
                    <label>Classification:
                        <select name="classification" onChange={this.handleChange}>
                            <option value="undefined"></option>
                            <option value="basketball">Basketball</option>
                            <option value="baseball">Baseball</option>
                            <option value="hockey">hockey</option>
                            <option value="chess">chess</option>
                        </select>
                    </label>
                    <label>Title:
                        <input type="text" name="titles" require="true" onChange={this.handleChange} />
                    </label>
                    <label>Rank:
                        <select name="rank" onChange={this.handleChange}>
                            <option value="0"></option>
                            <option value="5">*****</option>
                            <option value="4">****</option>
                            <option value="3">***</option>
                            <option value="2">**</option>
                            <option value="1">*</option>
                        </select>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default Add;