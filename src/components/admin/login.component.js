import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../lib/admin.request";
const LoginComponent = () => {
  // 상태 관리 (사용자 입력값 및 오류 메시지)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (username === "admin" && password === "password") {
      login({ username, password });
      alert("로그인 성공!");
      navigate("/admin"); // 로그인 성공 시 /admin 페이지로 리디렉션
    } else {
      setErrorMessage("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Admin Login</Title>
        {errorMessage && <Error>{errorMessage}</Error>}
        <Input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">로그인</Button>
      </LoginForm>
    </LoginContainer>
  );
};
export default LoginComponent;
// styled-components로 스타일 정의
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Error = styled.p`
  color: red;
  margin-bottom: 15px;
  font-size: 14px;
  text-align: center;
`;
