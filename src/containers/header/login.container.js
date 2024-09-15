import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { requestChekLogin } from "../../lib/request";
import NonLogin from "../../components/header/non.login";
import LoginVIcon from "../../components/header/login.v";

export default function LoginContainer() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestChekLogin(); // requestChekLogin 함수 호출
        setData(response);
      } catch (err) {
        setError(err); // 에러 발생 시 에러 상태 저장
      }
    };

    fetchData(); // 비동기 함수 호출
  }, []);

  return (
    <SearchSection>
      {data ? (
        <div>
          <NonLogin />
        </div>
      ) : (
        <div>
          <div>
            <LoginVIcon />
          </div>
        </div>
      )}
    </SearchSection>
  );
}

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;

  /* border: 1px solid red; */
`;
