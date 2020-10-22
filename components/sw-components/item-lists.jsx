import React from 'react';

import ItemList from '../item-list/item-list.jsx';
import withData from '../hoc-helper/with-data.jsx';
import withSwapiService from '../hoc-helper/with-swapi-service.jsx';




const withChildFunc = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
};

const renderName = ({name}) => (<span>{name}</span>);

const mapPersonMethodToProos = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodToProos = (swapiService) => {
  return {
    getData: swapiService.getAllPlanet
  }
}

const mapStarshipMethodToProos = (swapiService) => {
  return {
    getData: swapiService.getAllStarship
  }
}

const PersonList = withSwapiService(withData(
    withChildFunc(ItemList, renderName)), mapPersonMethodToProos);
    
const PlanetList = withSwapiService(withData(
    withChildFunc(ItemList, renderName)), mapPlanetMethodToProos);
    
const StarshipList = withSwapiService(withData(
    withChildFunc(ItemList, renderName)), mapStarshipMethodToProos);

export {
  PersonList,
  PlanetList,
  StarshipList
};