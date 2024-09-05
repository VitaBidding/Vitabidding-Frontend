import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { requestChekLogin } from '../../lib/request';
import NonLogin from '../../components/Header/NonLogin';


export default function LoginContainer() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await requestChekLogin(); // requestChekLogin 함수 호출
            setData(response); // 데이터가 정상적으로 받아졌을 때, 상태에 저장
          } catch (err) {
            setError(err); // 에러 발생 시 에러 상태 저장
          }
        };
    
        fetchData(); // 비동기 함수 호출
      }, []);
  
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }
  
    return (
      <SearchSection>
        {data ? (
          <div>
            <h1>Data from API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <div><NonLogin/></div>
        )}
      </SearchSection>
    );
  };

  const SearchSection = styled.div`
  display: flex;
  align-items: center;
    margin: 10px;


    /* border: 1px solid red; */
  `;
  