import React from 'react';

import ItemDetalis, {Record} from '../item-detalis/item-detalis.jsx';
import withSwapiService from '../hoc-helper/with-swapi-service.jsx';

const PlanetDetails = (props) => {
  
  return (
    <ItemDetalis {...props}> 
      <Record field='population' label='Population:'/>
      <Record field='rotationPeriod' label='Rotation:'/>
      <Record field='diameter' label='Diameter:'/>
    </ItemDetalis>
  );
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default withSwapiService(PlanetDetails, mapMethodToProps);