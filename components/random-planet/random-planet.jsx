import React, {Component} from 'react';

import SwapiService from '../../service/swapi-service.js';
import Spinner from '../spinner/spinner.jsx';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';


export default class RandomPlanet extends Component {
  
  swapiService = new SwapiService();
  
  state = {
    planet: {},
    loading: true,
    error: false
  }
  
  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };
  
  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  };
  
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };
  
  render() {
    
    const { planet, loading, error } = this.state;
    
    const hasData = !(loading || error);
    const errorMassage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <ViewPlanet planet={planet}/> : null;
    
    return (
      <div className='random-planet jumbotron rounded'>
        {spinner}
        {content}
        {errorMassage}
      </div>
    );
  }
}




const ViewPlanet = ({planet}) => {
  const { id, name, population, diameter, rotationPeriod} = planet;
  return (
    <React.Fragment>
      <img 
          className='planet-image'
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Population:</span>
              <span>{population}</span>
            </li>
            
            <li className='list-group-item'>
              <span className='term'>Diameter:</span>
              <span>{diameter}</span>
            </li>
            
            <li className='list-group-item'>
              <span className='term'>Rotation period:</span>
              <span>{rotationPeriod}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
}