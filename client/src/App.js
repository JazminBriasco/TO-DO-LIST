import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import FormCard from './components/Form-card';
import Card from './components/Card';
import Home from './components/Home';
import './App.css';
import './css/utilities.css';

function App() {
  return (
    <>  
      <Nav/> 
          <div className="new-button">
            <a className="new-link" href="formcard" >New +</a>
          </div>
        <h2 className="text-control mt-5p">Welcome!</h2>  {/* New / To do / Doing / Done */}
        <div className="container-card">
          <BrowserRouter>
            <Switch>
            <Route path='/home' component={Home} />
              <Route path='/formcard' component={FormCard} />
              <Route path='/all' 
                component={() => (
                  <Card
                    title={'All'}
                    />
                  )}
                  />
              <Route path='/todo' 
                component={() => (
                  <Card
                    title={'To do'}  
                    upTo="Doing"
                    />
                  )}
                  />
              <Route path='/doing' 
                component={() => (
                  <Card
                    title={'Doing'}
                    upTo="Done"
                    />
                  )}
                  />
              <Route path='/done' 
                component={() => (
                  <Card
                    title={'Done'}  />
                  )}
                  />

            </Switch>
          </BrowserRouter>
        </div>
    </>
);
}
/* <input type="color"> */

export default App;
