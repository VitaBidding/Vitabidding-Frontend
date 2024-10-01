// ProductManagement.js
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../lib/admin.request"; // api.js에서 함수 임포트

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError("상품 정보를 불러오는 중 문제가 발생했습니다.");
      }
    };
    loadProducts();
  }, []);

  return (
    <div>
      <h1>상품 관리</h1>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
