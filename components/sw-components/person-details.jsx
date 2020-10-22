import React from 'react';

import ItemDetalis, {Record} from '../item-detalis/item-detalis.jsx';
import withSwapiService from '../hoc-helper/with-swapi-service.jsx';


const PersonDetails = (props) => {
  
  return (
    <ItemDetalis {...props}> 
     <Record field='eyeColor' label='Eye color:'/>
      <Record field='birthDay' label='Birth day:'/>
    </ItemDetalis>
  );
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default withSwapiService(PersonDetails, mapMethodToProps);
