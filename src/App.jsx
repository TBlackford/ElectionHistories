import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';

// Import custom page elements
import ElectionSlider from './common/ElectionSlider.jsx';
import NavigationDrawer from './common/NavigationDrawer.jsx';

// Import custom components
import Home from './common/home.component.jsx';
import USElection from './elections/us.component.jsx';

export default class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            year: 2016,
        };
    }
    
    setYear = (year) => {
        this.setState({ year: year });
    }
    
    render() {
        return(
            <div>
                <NavigationDrawer></NavigationDrawer>
                <USElection></USElection>
                <ElectionSlider></ElectionSlider>
            </div>
        )
    }
}

/*
render() {
    return (
      <Router>
          <Route path="/" component={Home}/>
          <Route path="/us" component={USElection}/>
      </Router>,
      document.getElementById('container')
  );
}
*/