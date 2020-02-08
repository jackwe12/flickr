import React from 'react';
import './App.css';
import {Router, Route} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import {createBrowserHistory} from 'history'
// import HomePage from './components/HomePage/HomePage';
import imageSearch from './components/ImageSearch/ImageSearch';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar bg="primary" expand="lg" variant="dark" >
          <Navbar.Brand href="/">Flickr Image App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/imageSearch">Image Search</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/" exact component={imageSearch} />


  
      </Router>
    </div>
  );
}

export default App;
