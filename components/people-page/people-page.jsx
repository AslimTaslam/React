import React, {Component} from 'react';

import SwapiService from '../../service/swapi-service.js';
import ItemList from '../item-list/item-list.jsx';
import ItemDetalis from '../item-detalis/item-detalis.jsx';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';
import Row from '../row/row.jsx';
import ErrorBoundry from '../error-boundry/error-boundry.jsx';


export default class PeoplePage extends Component {
  
  swapiService = new SwapiService();
  
  state = {
    personSelected: 5,
  };
  
  onPersonSelected = (id) => {
    this.setState({
      personSelected: id
    });
  };
  
  
  render() {
    const itemList = (
      <ItemList 
        onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(i) => `${i.name}:  (${i.birthYear})`}
        >
        
       </ItemList>
    );
    
    const itemDetalis = (
      <ItemDetalis persId={this.state.personSelected}/>
    );
    
    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetalis}/>
      </ErrorBoundry>
    );
  }
}