import React,{ useContext } from 'react';
import AppContext  from './context/AppContext';
const Products = () => {
  const { message } = useContext(AppContext);
  return (
    <>
      <div>I am products</div>
      <p>{message}</p>
    </>
  );
};
export default Products;
