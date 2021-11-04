import * as React from 'react';
import { render } from 'react-dom';

import './App.css';
import Header from '../src/components/Header/header';
import FeatureOffers from '../src/components/Navigation/FeaturedOffers';
import CarouselOffers from '../src/components/Navigation/CarouselOffers';

function App() {
  return (
    <div className="App">
       <Header/>
        <div className="container-banner"></div>
        <h2>Ofertas em destaque:</h2>
        <div className="featuredOffers">           
            <FeatureOffers/>
        </div>
        <h2>Demais Ofertas:</h2>
        <div className="carouselOffers">
          <CarouselOffers/>
        </div>
    </div>
   
  );
  
}
render(<App />, document.getElementById("root"));

export default App;
