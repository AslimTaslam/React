import React from 'react';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <span className='boom'>Boom</span>
      <span>something has gone terrebly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
}

export default ErrorIndicator;