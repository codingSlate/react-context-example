import React from 'react';
import AppContext from './AppContext';

const AppState = ({ children }) => {
  return (
    <AppContext.Provider value={{ message: 'One message' }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppState;
