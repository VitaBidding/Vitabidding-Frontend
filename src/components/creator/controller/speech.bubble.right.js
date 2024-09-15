// Bubble.js

import React from "react";
import styled from "styled-components";

// Bubble 컴포넌트 정의
const Bubble = ({ biduser, bidprice }) => {
  return (
    <Warpper>
      <UserSection>{biduser}</UserSection>
      <BubbleWrapper>{bidprice} 포인트</BubbleWrapper>
    </Warpper>
  );
};

export default Bubble;
const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative; /* 추가: relative position을 사용하여 자식 요소들의 z-index를 활용할 수 있게 합니다. */
  margin-top: 20px; /* 필요에 따라 조정하여 UserSection과의 간격을 설정합니다. */
`;
const UserSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  font-weight: bold;
  color: #fff;
  position: absolute; /* 추가: absolute position을 사용하여 BubbleWrapper 위에 겹치게 합니다. */
  top: -20px; /* 조정: 위치 조정을 위해 top 속성을 사용합니다. */
  right: 10px; /* 조정: 위치 조정을 위해 left 속성을 사용합니다. */
  z-index: 1; /* 추가: z-index를 사용하여 BubbleWrapper 위에 배치합니다. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BubbleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border-radius: 15px 0 15px 15px;

  background-color: #efb73e;
  color: #fff;
  width: fit-content;
  position: relative; /* 추가: 상대적인 위치를 유지합니다. */
`;
