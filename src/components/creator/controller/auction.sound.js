import React, { useState } from "react";
import styled from "styled-components";
import { AiFillSound } from "react-icons/ai";
function AuctionSound(props) {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };

  return (
    <Warpper>
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
    </Warpper>
  );
}

export default AuctionSound;

const Warpper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 6px 6px;
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
  margin: 5px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const RangeInput = styled.input`
  width: 200px;
  margin: 5px;
  accent-color: #fd9800;
`;
const SliderValue = styled.div`
  color: #fff;
  font-weight: bold;
  margin: 5px;
  width: 20px;
`;
