import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from '../header/header.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';
import ErrorBoundry from '../error-boundry/error-boundry.jsx';
import ErrorButton from '../error-button/error-button.jsx';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';
import SwapiService from '../../service/swapi-service.js';
import DummySwapiService from '../../service/dummy-swapi-service.js';
import  {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context.jsx';

import {
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components/item-lists.jsx';
import PersonDetails from '../sw-components/person-details.jsx';
import PlanetDetails from '../sw-components/planet-details.jsx';
import StarshipDetails from '../sw-components/starship-details.jsx';


export default class Application extends Component {
  
  swapiService = new SwapiService();
  
  state = {
    viewComp: true,
    hasError: false
  }
  
  onViewComponent = () => {
    this.setState(({ viewComp }) => {
      const newView = viewComp;
      return {
        viewComp: !newView
      }
    });
  }
  
  componentDidCatch(error, info) {
    console.log(info);
    this.setState({hasError: true});
  }
  
  render() {
    const { viewComp, hasError } = this.state;
    if(hasError) {
      return <ErrorIndicator />;
    }
    const viewRandomPlanet = viewComp ? <RandomPlanet /> : null;
    
    return (
      <ErrorBoundry>
        <div>
          <SwapiServiceProvider value={this.swapiService}>
            <Header />
            
            <PersonDetails itemId={11}/>
            <PlanetDetails itemId={5}/>
            <StarshipDetails itemId={9}/>
            
            <PersonList />
            <PlanetList />
            <StarshipList />
        
          </SwapiServiceProvider>
        </div>
      </ErrorBoundry>
    );
  }
}