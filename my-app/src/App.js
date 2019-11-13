import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav.js';
import { Route, Link } from 'react-router-dom';
import SubNav from './Components/SubNav.js'

function App() {
  const [subItems, setSubItems] = useState();

  return (
    <div className="App">
        <Link className="home" to="/">Home</Link>
        <Nav />
        <Route exact path="/:item" render={() => (
                    <SubNav item={subItems}/>
                  )} />
    </div>
  );
}

export default App;
