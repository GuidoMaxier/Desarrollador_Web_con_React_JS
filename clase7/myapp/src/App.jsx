import React, { useState } from 'react';
import ProductDetail from './components/ProductDetail';
import BuyButton from './components/BuyButton';
import './app.css';

const App = () => {
  const [isPurchased, setIsPurchased] = useState(false);

  const product = {
    imageUrl: './src/assets/camiseta_frente.webp',
    name: 'Camiseta Argentina',
    description: 'Camiseta de Argentina color negra',
    price: 990.98,
    sku: 'TB-ARG-10',
    quantity: 180,
  };

  const handleBuyClick = () => {
    setIsPurchased(true);
  };

  return (
    <div>
      <ProductDetail product={product} />
      <BuyButton onBuyClick={handleBuyClick} />
      {isPurchased && <p>Gracias por su compra</p>}
    </div>
  );
};

export default App;

