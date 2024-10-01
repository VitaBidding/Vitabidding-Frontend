// SellerManagement.js
import React, { useEffect, useState } from "react";
import { fetchSellers } from "../../lib/admin.request"; // api.js에서 함수 임포트

const SellerManagement = () => {
  const [sellers, setSellers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSellers = async () => {
      try {
        const data = await fetchSellers();
        setSellers(data);
      } catch (error) {
        setError("판매자 정보를 불러오는 중 문제가 발생했습니다.");
      }
    };
    loadSellers();
  }, []);

  return (
    <div>
      <h1>판매자 관리</h1>
      {error && <p>{error}</p>}
      <ul>
        {sellers.map((seller) => (
          <li key={seller.id}>{seller.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SellerManagement;
