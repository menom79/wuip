// src/components/Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
