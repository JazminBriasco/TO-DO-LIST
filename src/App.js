import React from 'react';
import './App.css';
import Nav from './components/nav';
import Card from './components/card';
import './css/utilities.css';


function App() {
  return (
    <>  {/* retorna 1 solo elemento. Es lo mismo con <Fragment> </Fragment> */}
      <Nav/> 
        
        <h2 className="text-control mt-5p">TO-DO</h2>
        <div className="container-card">
        
          <Card
            titulo = 'Welcome!'
          />
          <Card
          titulo = 'Card 2'
          />
          <Card
          titulo = 'Card 3'
          />
          <Card
          titulo = 'Card 4'
          />
        </div>

        <hr></hr>
        <h2 className="text-control">DOING</h2>
        <div className="container-card">
          
          <Card
            titulo = 'Welcome!'
          />
          <Card
          titulo = 'Card 2'
          />
          <Card
          titulo = 'Card 3'
          />
          <Card
          titulo = 'Card 4'
          />


        </div>

        <hr></hr>
        <h2 className="text-control">DONE</h2>
        <div className="container-card">
          <Card
            titulo = 'Welcome!'
          />
          <Card
          titulo = 'Card 2'
          />
          <Card
          titulo = 'Card 3'
          />
          <Card
          titulo = 'Card 4'
          />
        </div>
        <hr></hr>
    </>
    );
}

export default App;
