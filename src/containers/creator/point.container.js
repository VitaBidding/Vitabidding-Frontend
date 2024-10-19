import React from "react";
import styled from "styled-components";
import SettlementApplication from "../../components/creator/point/settlement.application";
import SettlementAccount from "../../components/creator/point/settlement.account";
import Settlementpoint from "../../components/creator/point/settlement.point";
import Paymentpoint from "../../components/creator/point/payment.point";

function PointContainer() {
  const infoUrl = `${process.env.REACT_APP_MAIN_CLIENT_URL}/creator/info`;

  return (
    <Wrapper>
      <Section1>
        <SettlementApplication />
      </Section1>
      <Section2 as="a" href={infoUrl}>
        <SettlementAccount />
      </Section2>
      <Section3>
        <Paymentpoint />
      </Section3>
      <Section4>
        <Settlementpoint />
      </Section4>
    </Wrapper>
  );
}

export default PointContainer;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: grid;
  height: calc(100vh - 50px);

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 15px;
  padding: 15px 5px;
  @media only screen and (max-width: 280px) {
    width: calc(100vw - 5px);
  }
  @media only screen and (min-width: 280px) {
    width: calc(100vw - 5px);
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    width: calc(100vw - 30px);
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: calc(100vw - 220px);
  }
  @media only screen and (min-width: 1200px) {
    width: calc(100vw - 300px);
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Section1 = styled.div`
  /* border: 1px solid black; */
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  background: linear-gradient(45deg, #efb73e 60%, #fd9800);
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  overflow: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f8f9fa;
  }

  &::-webkit-scrollbar-thumb {
    background: #868e96;
    border-radius: 10px;
  }
`;
const Section2 = styled.div`
  /* border: 1px solid black; */
  grid-column: 3 / 5;
  grid-row: 1 / 3;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  background-color: #e9ecef;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.1s;
  }
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f8f9fa;
  }

  &::-webkit-scrollbar-thumb {
    background: #868e96;
    border-radius: 10px;
  }
`;
const Section3 = styled.div`
  /* border: 1px solid black; */

  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f8f9fa;
  }

  &::-webkit-scrollbar-thumb {
    background: #868e96;
    border-radius: 10px;
  }
  @media only screen and (max-width: 280px) {
    grid-column: 1 / 5;
    grid-row: 3 / 5;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 5;
    grid-row: 3 / 5;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 3;
    grid-row: 3 / 7;
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
const Section4 = styled.div`
  /* border: 1px solid black; */

  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f8f9fa;
  }

  &::-webkit-scrollbar-thumb {
    background: #868e96;
    border-radius: 10px;
  }
  @media only screen and (max-width: 280px) {
    grid-column: 1 / 5;
    grid-row: 5 / 7;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 5;
    grid-row: 5 / 7;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 3 / 5;
    grid-row: 3 / 7;
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
