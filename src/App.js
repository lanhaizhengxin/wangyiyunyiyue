import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./router/index.js"

console.log(routes)
function RouteWithSubRoutes(route) {
  console.log(<Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />)
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
class App extends Component{
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    )
  }
}

export default App;
