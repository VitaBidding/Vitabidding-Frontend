import React, { useEffect, useState } from "react";
import { fetchBuyers } from "../../lib/admin.request"; // api.js에서 함수 임포트

const BuyerManagement = () => {
  const [buyers, setBuyers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBuyers = async () => {
      try {
        const data = await fetchBuyers(); // API 호출
        setBuyers(data);
      } catch (error) {
        setError("구매자 정보를 불러오는 중 문제가 발생했습니다.");
      }
    };
    loadBuyers(); // 컴포넌트가 마운트되면 호출
  }, []);

  return (
    <div>
      <h1>구매자 관리</h1>
      {error && <p>{error}</p>}
      <ul>
        {buyers.map((buyer) => (
          <li key={buyer.id}>{buyer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuyerManagement;
