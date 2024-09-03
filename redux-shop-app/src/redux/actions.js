// src/redux/actions.js
export const setProducts = (products) => {
    return {
      type: 'SET_PRODUCTS',
      payload: products,
    };
  };
  
  export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };
  