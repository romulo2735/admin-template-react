import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Routes from "./routes";
import Header from "../components/admin/Header";
import SideBar from "../components/admin/SideBar";

export default class AppLayout extends Component {
  render() {
    return (
        <div className="d-flex" id="main-wrapper">
          <SideBar/>

          <div className="content-wrapper">
            <Header/>
            <Switch>
              {
                Routes.map((route, index) => (
                    <div className="content-dynamic">
                      <Route
                          key={index}
                          path={route.path}
                          exact
                          render={props => <route.template {...props}  />}
                      />
                    </div>
                ))
              }
            </Switch>
          </div>
        </div>
    );
  }
}
