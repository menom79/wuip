import React from 'react';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
// import './App.css';
import './components/Products.css';

// const App = () => {
//   return (
//     <div>
//       <h1>Redux Shop App</h1>
//       <Products />
//       <hr />
//       <ShoppingCart />
//     </div>
//   );
// };

function App() {
  return (
    <>
      <div className="products">
        <Products />
      </div>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ShoppingCart />
      </div>
    </>
  );
};

export default App;
