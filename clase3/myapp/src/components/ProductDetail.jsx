// ProductDetail.jsx
import React from 'react';
import Product from './Product';
import './ProductDetail.css';


const ProductDetail = () => {
  const productData = {
    name: 'Camiseta',
    description: 'Camiseta básica de algodón en color blanco',
    price: 123.73,
    sku: 'TSHIRT001',
    cantidad: 130,
  } ;

  return (
    <div className="product-detail-container">
      <h1 className="product-detail-header">Detalle del Producto</h1>
      <div className="product-info">
        <Product {...productData} />
      </div>
    </div>
  );
};

export default ProductDetail;

