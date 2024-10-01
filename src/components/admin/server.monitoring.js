// pages/ServerMonitoring.js
import React, { useEffect, useState } from "react";
import { fetchServerMonitoringData } from "../../lib/admin.request"; // api.js에서 함수 임포트

const ServerMonitoring = () => {
  const [monitorData, setMonitorData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMonitoringData = async () => {
      try {
        const data = await fetchServerMonitoringData(); // API 호출
        setMonitorData(data);
      } catch (error) {
        setError("서버 성능 데이터를 불러오는 중 문제가 발생했습니다.");
      }
    };
    loadMonitoringData(); // 컴포넌트가 마운트되면 호출
  }, []);

  return (
    <div>
      <h1>서버 성능 모니터링</h1>
      {error && <p>{error}</p>}
      {monitorData ? (
        <div>
          <p>CPU 사용률: {monitorData.cpuUsage}%</p>
          <p>메모리 사용률: {monitorData.memoryUsage}%</p>
          <p>디스크 사용률: {monitorData.diskUsage}%</p>
        </div>
      ) : (
        <p>데이터를 불러오는 중...</p>
      )}
    </div>
  );
};

export default ServerMonitoring;
