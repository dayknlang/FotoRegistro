
import * as React from 'react';
import './App.css';
import FeatureOffers from '../src/components/Navigation/FeaturedOffers'
// import Header from '../src/components/Header/header';
// import NavBody from '../src/components/Navigation/NavBody';
// import NavProperties from '../src/components/Navigation/NavProperties';


function App() {
  return (
    <div className="App">
       <div className="header-main">
        <div className="center">
            <div className="logoMeliuz"></div> 
            <div className="logoFotoRegistro"></div> 
          </div>
         
        </div>
        <div className="container-banner"></div>
        <div className="featuredOffers">
          <h2>Ofertas em destaque:</h2>
        </div>
          <div className="break"></div>
          <FeatureOffers/>

    </div>

    
  
  );
}

export default App;
