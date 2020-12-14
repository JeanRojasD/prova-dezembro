import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage'
import Register from './pages/Register'
import Notfound from './pages/Notfound'

function Routes() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Landingpage} /> 
            <Route path="/register" component={Register} />
            <Route path="*" component={Notfound} />
          </Switch>
      </Router>
    );
  }
  export default Routes;