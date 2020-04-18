import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Routes from "./routes";

export default class AppLayout extends Component {
  render() {
    return (
      <div>
        <Switch>
          {
            Routes.map((route, index) => (
              <Route
                  path={route.path}
                  exact
                  render={props => <route.template {...props}  />}
              />
            ))
          }
        </Switch>
      </div>
    );
  }
}
