import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/Catalog' component={Catalog} />*/}
          <Route path='/services' component={Services} />
          {/* <Route path='/Aboutus' component={Aboutus} />*/}
          <Route path='/products' component={Products} />
          {/* <Route path='/Delivery' component={Delivery} /> */}
          <Route path='/sign-up' component={SignUp} />
          {/* <Route path='/Contacts' component={Contacts} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
