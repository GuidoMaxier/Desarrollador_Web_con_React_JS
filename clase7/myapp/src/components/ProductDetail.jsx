import React from 'react';
import './ProductCard.css';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-card-content">
        <h2>{product.name}</h2>
        <p>Descripción: {product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>SKU: {product.sku}</p>
        <p>Cantidad disponible: {product.quantity}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
