import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service.js';
import DummySwapiService from '../../service/dummy-swapi-service.js';
import Spinner from '../spinner/spinner.jsx';
import ErrorButton from '../error-button/error-button.jsx';


const Record = ({item, field, label}) => {
  return (
    <li className='list-group-item'>
      <span className='term'>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};


export default class ItemDetalis extends Component {
  swapiService = new SwapiService();
  
  state = {
    item: null,
    image: null
  };
  
  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if(!itemId) {
      return;
    }
    
    getData(itemId)
    .then((item) => {
      this.setState({ 
        item,
        image: getImageUrl(item)
      });
    });
  }
  
  componentDidMount() {
    this.updateItem();
  }
  
  componentDidUpdate(prevProps) {
    if(this.state.item != prevProps.persId) {
      this.updateItem();
    }
  }
  
  render() {
     if(!this.state.item) {
       return <Spinner/>;
     }
    const {item} = this.state;
     
    const { id, name, gender, birthYear, eyeColor } = item;
    
    
    return (
      <div className='person-details card'>
        <img 
          className='person-image'
          src={ this.state.image } />
        <div card-body>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
        <ErrorButton />
      </div>
    );
  }
}