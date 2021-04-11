import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import FormCard from './components/Form-card';
import Card from './components/Card';
import Home from './components/Home';
import './App.css';
import './css/utilities.css';


function App() {


  const handleChange = (e) =>{
    if(e.target.value === "1"){
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/04/01/20/49/trees-6143244_960_720.jpg')";
    }   else if(e.target.value === "2"){
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/12/21/08/36/dog-5849152_960_720.jpg')";
    }   else if(e.target.value === "3"){
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg')";
    }    else if(e.target.value === "4"){
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/03/30/09/44/cherry-blossoms-301253_960_720.jpg')";
    }    else if(e.target.value === "5"){
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/05/20/07/52/gallo-5195311_960_720.jpg')";
    }
    }

  return (
    <>  
      <Nav/> 
          <div className="new-button">
            <a className="new-link" href="formcard" >New +</a>
          </div>
          <div >
            <form >
              {/*    <select onChange={(e) => setBackground(e.target.value)} onChange= {(e) => changebg} value={background}>
              */}

              <select className="bg-button" onChange={handleChange} >     
              
                <option value= "1" active >Fall</option>
                <option value= "2" >Dog</option>
                <option value= "3">Flower</option>
                <option value= "4" >House</option>
                <option value= "5">Crock</option>
              </select>
            </form>
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


export default App;
