// pages/SalesAndTraffic.js
import React, { useEffect, useState } from "react";
import { fetchSalesAndTraffic } from "../../lib/admin.request";

const SalesAndTraffic = () => {
  const [salesData, setSalesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSalesData = async () => {
      try {
        const data = await fetchSalesAndTraffic(); // API 호출
        setSalesData(data);
      } catch (error) {
        setError(
          "매출 현황 및 유입수 데이터를 불러오는 중 문제가 발생했습니다."
        );
      }
    };
    loadSalesData(); // 컴포넌트가 마운트되면 호출
  }, []);

  return (
    <div>
      <h1>매출 현황 및 유입수</h1>
      {error && <p>{error}</p>}
      {salesData ? (
        <div>
          <p>총 매출: ₩{salesData.totalSales}</p>
          <p>총 유입 수: {salesData.totalVisitors}</p>
          <p>오늘 매출: ₩{salesData.todaySales}</p>
          <p>오늘 유입 수: {salesData.todayVisitors}</p>
        </div>
      ) : (
        <p>데이터를 불러오는 중...</p>
      )}
    </div>
  );
};

export default SalesAndTraffic;
