import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Import your Home component here

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* Add other routes here */}
    </Switch>
  </Router>,
  document.getElementById('root')
);
