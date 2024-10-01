import React, { useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BuyerManagement from "../../components/admin/buyer.management";
import SellerManagement from "../../components/admin/seller.management";
import ProductManagement from "../../components/admin/product.management";
import ErrorLogs from "../../components/admin/error.logs";
import ServerMonitoring from "../../components/admin/server.monitoring";
import SalesAndTraffic from "../../components/admin/sales.and.traffic";
import { Navbar, Nav } from "react-bootstrap";
function AdminContainer() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // 또는 sessionStorage
    if (!token) {
      navigate("/admin/login"); // 토큰이 없으면 로그인 페이지로 리디렉션
    }
  }, [navigate]);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/admin">
          Admin Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/admin/buyers">
              구매자 관리
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/sellers">
              판매자 관리
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/products">
              상품 관리
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/error-logs">
              에러 로그
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/server-monitoring">
              서버 성능 모니터링
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/sales-traffic">
              매출 현황 & 유입수
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <MainContainer>
        <Routes>
          <Route path="/buyers" element={<BuyerManagement />} />
          <Route path="/sellers" element={<SellerManagement />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/error-logs" element={<ErrorLogs />} />
          <Route path="/server-monitoring" element={<ServerMonitoring />} />
          <Route path="/sales-traffic" element={<SalesAndTraffic />} />
        </Routes>
      </MainContainer>
    </div>
  );
}

export default AdminContainer;

const MainContainer = styled.div``;
