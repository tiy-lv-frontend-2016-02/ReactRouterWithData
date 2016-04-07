import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layout
import App from 'layouts/app';

// Components
import Home from 'ui/home';
import About from 'ui/about';
import UsersContainer from 'ui/users-container';
import WidgetsContainer from 'ui/widgets-container';

render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={UsersContainer} />
      <Route path="/widgets" component={WidgetsContainer} />
      <Route path="/users/:userId" component={UsersContainer} />
    </Route>
  </Router>
,document.getElementById('app'));