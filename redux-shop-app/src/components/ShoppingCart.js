import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Calculate the total cost
  const totalCost = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    
    <div className="shopping-cart-container">
      {/* <h2 className="cart-header">Shopping Cart</h2> */}
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-details">
              <span className="item-title">{item.title}</span>
              <br />
              <span className="item-price">${item.price}</span>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="total-cost">Total Cost: ${totalCost}</p>
    </div>
  );
};

export default ShoppingCart;