import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './comopnents/layout/Navbar'
import Dashboard from './comopnents/dashboard/Dashboard'
import ProjectDetails from './comopnents/projects/ProjectDetails'
import SignIn from './comopnents/auth/SignIn'
import SignUp from './comopnents/auth/SignUp'
import CreateProject from './comopnents/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/createproject' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
