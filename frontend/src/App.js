import React, { Component } from 'react';
import './css/font-awesome.min.css';
import './css/style.css';
import Footer from './Footer.js';
import Home from './Home.js';
import TrainChoosing from './TrainChoosing.js';
import SeatsChoosing from './SeatsChoosing.js';

import {
  Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'

const history = qhistory(
  createBrowserHistory({}),
  stringify,
  parse
)

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render() {
    
    return (
      <Router history={history}>
        <React.Fragment>
          <Switch>
            <Route path="/seats-choosing/" component={SeatsChoosing} />
            <Route path="/train-choosing/" component={TrainChoosing} />
            <Route path="/" component={Home} />
          </Switch>
          
          <Footer />
        </React.Fragment>
      </Router>
    );    
  }
}
