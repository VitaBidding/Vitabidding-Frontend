import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
function AuctionProcess({ setRunning, setTime, handleplay, handlepuase }) {
  const handleStart = () => {
    setRunning(true);

    // handleplay();
  };

  const handleStop = () => {
    setRunning(false);

    // handlepuase();
  };
  // const handlereset = () => {
  //   setRunning(false);
  //   setTime(10000);
  //   setRunning(true);

  //   // handlepuase();
  // };
  return (
    <Wrapper>
      <Title>경매 진행 버튼</Title>
      <div>
        {/* <SelectButton variant="outline-light" onClick={handlereset}>
          선택
        </SelectButton> */}
        <PlayButton variant="outline-info" onClick={handleStart}>
          진행
        </PlayButton>
        <PuaseButton variant="outline-warning" onClick={handleStop}>
          일시정지
        </PuaseButton>
      </div>
    </Wrapper>
  );
}

export default AuctionProcess;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #242633;
`;
const Title = styled.div`
  color: #fff;
  font-weight: bold;

  @media only screen and (max-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
  }

  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 600px) {
    margin: 10px;
    font-size: 16pt;
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
const SelectButton = styled(Button)`
  @media only screen and (max-width: 280px) {
    font-size: 16px;
    margin: 3px;
    padding: 4px 8px;
  }
  @media only screen and (min-width: 280px) {
    font-size: 16px;
    margin: 3px;
    padding: 4px 8px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
    margin: 5px;
    padding: 6px 12px;
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
const PlayButton = styled(Button)`
  @media only screen and (max-width: 280px) {
    font-size: 16px;
    margin: 3px;
    padding: 4px 8px;
  }
  @media only screen and (min-width: 280px) {
    font-size: 16px;
    margin: 3px;
    padding: 4px 8px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 20px;
    margin: 5px;
    padding: 8px 12px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 24px;
    margin: 5px;
    padding: 8px 20px;
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
const PuaseButton = styled(Button)`
  @media only screen and (max-width: 280px) {
    font-size: 16px;
    margin: 3px;
    padding: 4px 8px;
  }
  @media only screen and (min-width: 280px) {
    font-size: 16px;
    margin: 3px;
    padding: 4px 8px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 20px;
    margin: 5px;
    padding: 8px 12px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 24px;
    margin: 5px;
    padding: 8px 20px;
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
