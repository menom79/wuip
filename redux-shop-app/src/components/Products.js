// src/components/Products.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions';
import Product from './Product';
import axios from 'axios';
import './Products.css';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products data from your API (e.g., https://fakestoreapi.com/products)
    axios.get('https://fakestoreapi.com/products').then((response) => {
      dispatch(setProducts(response.data));
    });
  }, [dispatch]);

  return (
    <div className="products">
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
