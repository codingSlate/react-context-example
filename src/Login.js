import React, { useContext } from 'react';
import AppContext from './context/AppContext';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AppContext);

  return (
    <div>
      {isAuth === 'true' ? (
        <p style={{ color: 'green' }}>You are valide user</p>
      ) : (
        <p>Try to login again</p>
      )}
      <label>
        <select onChange={(e) => setIsAuth(e.target.value)}>
          <option selected disabled>
            Select userAuth
          </option>
          <option value="true">Valid Access</option>
          <option value="false">Valid Denied</option>
        </select>
      </label>
    </div>
  );
};
export default Login;
