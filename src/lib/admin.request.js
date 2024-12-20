import axios from "axios";

// 기본 axios 인스턴스 생성 (필요시 API 기본 URL 설정 가능)
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_VITE_SERVER_URL, // 서버 기본 URL
  timeout: 10000, // 요청 타임아웃 설정
});

export const login = async ({ data }) => {
  // data = { username, password };
  try {
    const response = await apiClient.post(`/login`, data);

    const { access_token } = response.data;
    localStorage.setItem("access_token", access_token);

    return response;
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

// 구매자 정보 가져오기
export const fetchBuyers = async () => {
  try {
    const response = await apiClient.get("/buyers");
    return response.data; // 서버에서 받은 데이터 반환
  } catch (error) {
    console.error("구매자 정보를 가져오는 중 오류가 발생했습니다:", error);
    throw error;
  }
};

// 판매자 정보 가져오기
export const fetchSellers = async () => {
  try {
    const response = await apiClient.get("/sellers");
    return response.data;
  } catch (error) {
    console.error("판매자 정보를 가져오는 중 오류가 발생했습니다:", error);
    throw error;
  }
};

// 상품 정보 가져오기
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    console.error("상품 정보를 가져오는 중 오류가 발생했습니다:", error);
    throw error;
  }
};

// 에러 로그 가져오기
export const fetchErrorLogs = async () => {
  try {
    const response = await apiClient.get("/error-logs");
    return response.data;
  } catch (error) {
    console.error("에러 로그를 가져오는 중 오류가 발생했습니다:", error);
    throw error;
  }
};

// 서버 성능 모니터링 데이터 가져오기
export const fetchServerMonitoringData = async () => {
  try {
    const response = await apiClient.get("/server-monitoring");
    return response.data;
  } catch (error) {
    console.error("서버 성능 데이터를 가져오는 중 오류가 발생했습니다:", error);
    throw error;
  }
};

// 매출 현황 및 유입수 정보 가져오기
export const fetchSalesAndTraffic = async () => {
  try {
    const response = await apiClient.get("/sales-traffic");
    return response.data;
  } catch (error) {
    console.error(
      "매출 현황 및 유입수 정보를 가져오는 중 오류가 발생했습니다:",
      error
    );
    throw error;
  }
};

// 모든 충전 요청 조회 (관리자용)
export const getAllPointRequests = async () => {
  try {
    const response = await axios.get("/point/requests");
    return response.data;
  } catch (error) {
    console.error("충전 요청 조회 실패:", error);
    return null;
  }
};

// 특정 상태의 충전 요청 조회 (관리자용)
export const getPointRequestsByStatus = async (status) => {
  try {
    const response = await axios.get(`/point/requests?status=${status}`);
    return response.data;
  } catch (error) {
    console.error(`${status} 상태의 충전 요청 조회 실패:`, error);
    return null;
  }
};

// 특정 사용자의 충전 요청 조회 (관리자용)
export const getPointRequestsByUserId = async (userId) => {
  try {
    const response = await axios.get(`/point/requests?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error("사용자별 충전 요청 조회 실패:", error);
    return null;
  }
};

// 충전 요청 승인 또는 거절 (관리자용)
export const approveOrRejectPointRequest = async (requestId, data) => {
  try {
    const response = await axios.post(`/point/approve/${requestId}`, data);
    return response.data;
  } catch (error) {
    console.error("충전 요청 승인/거절 실패:", error);
    return null;
  }
};
