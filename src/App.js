import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from "./Routes";
import { Nav, Navbar  } from "react-bootstrap";
import RouteNavItem from "./components/RouteNavItem";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook Business Manager Accelerator</h1>
        </header>

        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem href="/audiences">Audience Management</RouteNavItem>
              <RouteNavItem href="/ads">Ads Management</RouteNavItem>
              <RouteNavItem href="/register">Register</RouteNavItem>
              <RouteNavItem href="/login">Login</RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}


export default App;
