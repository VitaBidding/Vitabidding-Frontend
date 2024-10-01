// pages/ErrorLogs.js
import React, { useEffect, useState } from "react";
import { fetchErrorLogs } from "../../lib/admin.request"; // api.js에서 함수 임포트

const ErrorLogs = () => {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadErrorLogs = async () => {
      try {
        const data = await fetchErrorLogs(); // API 호출
        setLogs(data);
      } catch (error) {
        setError("에러 로그를 불러오는 중 문제가 발생했습니다.");
      }
    };
    loadErrorLogs(); // 컴포넌트가 마운트되면 호출
  }, []);

  return (
    <div>
      <h1>에러 로그</h1>
      {error && <p>{error}</p>}
      <ul>
        {logs.map((log) => (
          <li key={log.id}>{log.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorLogs;
