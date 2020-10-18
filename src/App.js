import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from './components/Landing'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="App">
    
        <Switch>
            <Route path='/contact'>
              <Contact/>
            </Route>
            <Route path = "/">
              <Landing/>
            </Route>
        </Switch>
   
      </div> 
    </Router>
  );
}

export default App;
