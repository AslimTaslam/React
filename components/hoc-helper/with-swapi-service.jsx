import React from 'react';
import {SwapiServiceConsumer} from '../swapi-service-context/swapi-service-context.jsx';

const withSwapiService = (Wrapped, mapMethodToProps) => {
    return (props) => {
      return (
        <SwapiServiceConsumer>
        {
          (swapiService) => {
          const serviceProps = mapMethodToProps(swapiService);  
            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
        </SwapiServiceConsumer>
      );
    }
  };

export default withSwapiService;