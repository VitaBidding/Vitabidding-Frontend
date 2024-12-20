import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserPointBalance } from "../../../lib/request"; // 경로는 실제 위치에 맞게 수정해주세요

function PointStatus() {
  const [points, setPoints] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await getUserPointBalance();
        if (response === null) {
          setError("포인트 조회에 실패했습니다.");
        } else {
          setPoints(response.totalPoints);
        }
      } catch (err) {
        console.error("Error fetching points:", err);
        setError("포인트 조회 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPoints();
  }, []);

  if (loading) {
    return <Wrapper>로딩 중...</Wrapper>;
  }

  if (error) {
    return <Wrapper>{error}</Wrapper>;
  }

  return (
    <Wrapper>
      <Title>보유 포인트</Title>
      <Point>{points?.toLocaleString() ?? 0} 포인트</Point>
    </Wrapper>
  );
}

export default PointStatus;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: GmarketSansMedium;
  @media only screen and (max-width: 280px) {
    padding: 20px 10px;
  }
  @media only screen and (min-width: 280px) {
    padding: 20px 10px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 20px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 2px black;
  @media only screen and (max-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 14pt;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 16pt;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Point = styled.div`
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 2px black;
  @media only screen and (max-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 14pt;
  }

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 16pt;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
