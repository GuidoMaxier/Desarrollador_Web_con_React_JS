// Product.jsx
import React from 'react';


const Product = ({ name, description, price, sku, cantidad }) => {
  return (
    <div> 
      <h2>Nombre: {name}</h2>
      <p>Descripcion: {description}</p>
      <p>Price: ${price}</p>
      <p>SKU: {sku}</p>
      <p>Cantidad Disponible: {cantidad}</p>
    </div>
  );
};

export default Product;
