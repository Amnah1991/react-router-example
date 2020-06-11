import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link className='App-link' to="/">Home </Link>
      <Link  className='App-link' to="/about">About Us </Link>
      <Link className='App-link'  to="/shop">Shop Now </Link>
    </div>
  );
};

function App() {
  return (
    <div className='App-header'>
      <main>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </main>
    </div>

  );
}

export default App;
