import React, { useState } from "react";
import styled from "styled-components";
import { AiFillSound } from "react-icons/ai";
function AuctionSound(props) {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };

  return (
    <Wrapper>
      <Title>사운드 조절</Title>
      <Row>
        <AiFillSound color="#fff" />
        <RangeInput
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <SliderValue>{sliderValue}</SliderValue>
      </Row>
    </Wrapper>
  );
}

export default AuctionSound;

const Wrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background-color: #242633;
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
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
  color: #fff;
  font-weight: bold;

  margin: 2px;
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const RangeInput = styled.input`
  width: 200px;
  margin: 3px;
  accent-color: #fd9800;
`;
const SliderValue = styled.div`
  color: #fff;
  font-weight: bold;
  margin: 3px;
  width: 20px;
`;
