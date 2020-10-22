import React from 'react';

import ItemDetalis, {Record} from '../item-detalis/item-detalis.jsx';
import withSwapiService from '../hoc-helper/with-swapi-service.jsx';

const StarshipDetails = (props) => {
  
  return (
    <ItemDetalis {...props}> 
      <Record field='model' label='Model:'/>
      <Record field='length' label='Length:'/>
      <Record field='costInCredits' label='Cost:'/>
    </ItemDetalis>
  );
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(StarshipDetails, mapMethodToProps);