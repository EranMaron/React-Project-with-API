import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';


class Navigation extends Component {

    active = {
        fontSize: "1.5vw",
        color: "white",
        borderBottom: "solid 2px white",
        borderRight: "solid 2px white",
        borderLeft: "solid 2px white"
    };

    render() {
        return (
            <div className="MyNav">
                <NavLink exact to="/2018-2019/dcs/dev_181/" activeStyle={this.active}>All Athlets</NavLink>
                <NavLink to="/2018-2019/dcs/dev_181/select" activeStyle={this.active}>Search Athlet</NavLink>
                <NavLink to="/2018-2019/dcs/dev_181/add" activeStyle={this.active}>Add Athlet</NavLink>
            </div>
        )
    }
}

export default Navigation;