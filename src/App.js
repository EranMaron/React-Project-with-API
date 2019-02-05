import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import All from './components/All';
import Search from './components/Search';
import Add from './components/Add';
import Error from './components/Error';
import Navigation from './components/Navigation';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation className="MyNav" />
            <Switch>
              <Route exact path="/2018-2019/dcs/dev_181/" component={All} />
              <Route exact path="/2018-2019/dcs/dev_181/select" component={Search} />
              <Route exact path="/2018-2019/dcs/dev_181/add" component={Add} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

