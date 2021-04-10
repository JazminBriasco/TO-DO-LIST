import React from 'react';
import './App.css';
import Nav from './components/nav';
import FormCard from './components/Form-card';
import './css/utilities.css';


function App() {
  return (
    <>  {/* retorna 1 solo elemento. Es lo mismo con <Fragment> </Fragment> */}
      <Nav/> 
        
        <h2 className="text-control mt-5p">NEW</h2>
        <div className="container-card">
        
          <FormCard
            titulo = 'Welcome!'
          />
        </div>
{/* <input type="color"> */}
        
        <br></br><br></br>
        
        <hr></hr>
        <h2 className="text-control">DOING</h2>
        <div className="container-card">
          
          <FormCard
            titulo = 'Welcome!'
          />
          <FormCard
          titulo = 'Card 2'
          />
          <FormCard
          titulo = 'Card 3'
          />
          <FormCard
          titulo = 'Card 4'
          />


        </div>

        <hr></hr>
        <h2 className="text-control">DONE</h2>
        <div className="container-card">
          <FormCard
            titulo = 'Welcome!'
          />
          <FormCard
          titulo = 'Card 2'
          />
          <FormCard
          titulo = 'Card 3'
          />
          <FormCard
          titulo = 'Card 4'
          />
        </div>
        <hr></hr> 

        <div className='pepe'>asd
              <div className="jose">asdsad</div>
            </div>
    </>

    
    );
}

export default App;
