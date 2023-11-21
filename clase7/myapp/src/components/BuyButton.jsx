import React from 'react';
import './ProductCard.css'; 

const BuyButton = ({ onBuyClick }) => {
  const handleClick = () => {
    onBuyClick();
  };

  return (
    <div className="product-card">
      <div className="product-card-content">
        <button onClick={handleClick}>Comprar</button>
      </div>
    </div>
  );
};

export default BuyButton;
