import React from 'react';

import Spinner from '../spinner/spinner.jsx';
import ErrorIndicator from '../error-indicator/error-indicator.jsx';


const ItemList = (props) => {
  
  const { data, renderItem, onPersonSelected, children } = props;
    
  const items = data.map((item) => {
    const {id} = item;
    const label = children(item);
    return (
      <li 
        key={id} 
        onClick={() => onPersonSelected(id)}
        className='list-group-item'>{label}</li>
    );
  });

  return (
    <ul className='item-list list-group'>
      {items}
    </ul>
  );
};

export default ItemList;