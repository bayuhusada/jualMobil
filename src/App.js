import React, { useEffect } from 'react';
import ProductCreate from './components/ProductCreate.js';
import ProductList from './components/ProductList.js';
import './App.css';
import { useState } from 'react';
import { createProducts, deleteProducts, editProducts, fetchProducts } from './api/productAPI.js';

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchproducts = async () =>{
    const setResponse = await fetchProducts()
    setProducts(setResponse.data)
  }
  useEffect(()=>{
    fetchproducts()
  },[])
  const editProductById = async (id, data) => {
    const editResponse = await editProducts(id, data)
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...editResponse.data };
      }

      return prod;
    });
    setProducts(updatedProducts);
  };
  const onCreateProduct = async (product) => {
    const response = await createProducts(product);
    setProducts([
      ...products, response.data
    ]);
  };
  const onDeleteProduct = async (id) => {
    await deleteProducts(id);
    const updatedProducts = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        onEditProduct={editProductById}
        products={products}
        onDeleteProduct={onDeleteProduct}
      />
    </>
  );
};

export default App;
