import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig';

const StaffDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = await firestore.collection('products').get();
      const productsData = productsRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Staff Dashboard</h2>

      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - {product.price} - {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffDashboard;
