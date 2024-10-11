import React, { useEffect, useState } from "react";
import { fetchPoint } from "../../lib/admin.request"; // api.js에서 함수 임포트
function Point() {
    const [point, setpoint] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const loadPoint = async () => {
        try {
          const data = await fetchPoint();
          setpoint(data);
        } catch (error) {
          setError("포인트 정보를 불러오는 중 문제가 발생했습니다.");
        }
      };
      loadPoint();
    }, []);
  
    return (
      <div>
        <h1>포인트관리</h1>
        {error && <p>{error}</p>}
        <ul>
          {point.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default Point