import React, { useState } from 'react';
import AppContext from './AppContext';

const AppState = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AppContext.Provider value={{ isAuth, setIsAuth, message: 'One message' }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppState;
