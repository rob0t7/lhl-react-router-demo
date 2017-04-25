import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


import logo from './logo.svg';
import './App.css';


window.state = { authenticated: false }

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About Us</h2>
  </div>
)

const Beers = () => (
  <div>
    <h2>Beer List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Style</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Neds Stash</td>
          <td>Flanders Red</td>
          <td><Link to="/beers/1">View</Link></td>
        </tr>
        <tr>
          <td>Fracture</td>
          <td>IIPA</td>
          <td><Link to="/beers/2">View</Link></td>
        </tr>
      </tbody>
    </table>
  </div>
)

const Beer = ({ match }) => (
  <div>
    <h2>All about Beer {match.params.id}</h2>
  </div>
)

const ProtectedView = () => (
  <div>
    <h2>Protected Page</h2>
  </div>
)

const Login = () => (
  <div>
    <h2>Login</h2>
    <button>Login</button>
  </div>
)

const ProtectedRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={ props => (
                          window.state.authenticated
                          ? (<Component {...props}/>)
                          : (<Redirect to={{pathname: '/login', state: { from: props.location}}}/>)
    )}
  />
)

const App = () => (
  <Router>
    <div style={{width: '80%', margin: '1rem auto 0 auto'}}>
      <h1>My App</h1>

      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/beers">Beers</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
      </div>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <ProtectedRoute path="/protected" component={ProtectedView}/>
      <Switch>
        <Route path="/beers/:id" component={Beer}/>
        <Route path="/beers" component={Beers}/>
      </Switch>
    </div>
  </Router>
)

export default App;
