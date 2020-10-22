import React, {Component} from 'react';

export default class ToggleComponent extends Component {
  render() {
    return (
      <div className='toggle-component'>
        <button 
          className='btn btn-warning'
          onClick={() => this.props.onView()}>Toggle RandomPlanet</button>
      </div>
    );
  }
}