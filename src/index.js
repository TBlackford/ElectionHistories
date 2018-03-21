import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import ElectionSlider from './common/ElectionSlider';
import registerServiceWorker from './registerServiceWorker';

// Import routing components
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom';

// Import custom components
import Home from './common/home.component.jsx';
import USElection from './elections/us.component.jsx';

/*ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
ReactDOM.render(
  <ElectionSlider />,
  document.getElementById('election-slider')
);*/

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/us" component={App}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('container')
);

registerServiceWorker();
