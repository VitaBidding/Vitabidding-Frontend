import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { BsCashCoin, BsCashStack, BsFillBoxSeamFill, BsTruck, BsXSquare } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import styled from "styled-components";
function ListStatusComponent({ products }) {
  const 전체갯수 = products.length;
  const 경매대기갯수 = products.filter((item) => item.item_status === "경매대기").length;
  const 경매중갯수 = products.filter((item) => item.item_status === "경매중").length;
  const 결제대기갯수 = products.filter((item) => item.item_status === "결제대기").length;
  const 결제완료갯수 = products.filter((item) => item.item_status === "결제완료").length;
  const 배송진행갯수 = products.filter((item) => item.item_status === "배송진행").length;
  const 배송완료갯수 = products.filter((item) => item.item_status === "배송완료").length;
  const 거래완료갯수 = products.filter((item) => item.item_status === "거래완료").length;
  const 거래금지갯수 = products.filter((item) => item.item_status === "거래금지").length;
  const itemstatus = [
    {
      icon: <AiFillAppstore style={{ width: "25px", height: "25px", color: "black" }} />,
      title: "전체",
      count: 전체갯수,
    },
    {
      icon: <BiTime style={{ width: "25px", height: "25px", color: "black" }} />,
      title: "경매대기",
      count: 경매대기갯수,
    },
    {
      icon: <RiAuctionFill style={{ width: "25px", height: "25px", color: "black" }} />,
      title: "경매중",
      count: 경매중갯수,
    },
    {
      icon: <BsCashCoin style={{ width: "25px", height: "25px", color: "black" }} />,
      title: "결제대기",
      count: 결제대기갯수,
    },
    {
      icon: <BsCashStack style={{ width: "25px", height: "25px", color: "black" }} />,
      title: "결제완료",
      count: 결제완료갯수,
    },
    {
      icon: <BsTruck style={{ width: "25px", height: "25px", color: "black" }} />,
      title: "배송진행",
      count: 배송진행갯수,
    },
    {
      icon: <BsFillBoxSeamFill style={{ width: "25px", height: "25px", color: "black" }} />,
      title: "배송완료",
      count: 배송완료갯수,
    },
    {
      icon: <FaHandshake style={{ width: "25px", height: "25px", color: "black" }} />,
      title: "거래완료",
      count: 거래완료갯수,
    },
    {
      icon: <BsXSquare style={{ width: "25px", height: "25px", color: "black" }} />,
      title: "거래금지",
      count: 거래금지갯수,
    },
  ];
  return (
    <Wrapper>
      {itemstatus.map((e) => (
        <TotalSection key={e.title}>
          <Totalicon>{e.icon}</Totalicon>
          <Totaltext>
            <TotalTitle>{e.title}</TotalTitle>
            <Totalconunt>
              <Counttext>{e.count}</Counttext>
              <Unit>건</Unit>
            </Totalconunt>
          </Totaltext>
        </TotalSection>
      ))}
    </Wrapper>
  );
}

export default ListStatusComponent;

const Wrapper = styled.div`
  display: flex;
  /* width: 1160px; */
  border-bottom: 1px solid black;
  @media only screen and (max-width: 360px) {
    flex-wrap: wrap;
    width: 270px;
  }
  @media only screen and (min-width: 360px) {
    flex-wrap: wrap;
    width: 350px;
  }
  @media only screen and (min-width: 420px) {
    flex-wrap: wrap;
    width: 420px;
  }
  @media only screen and (min-width: 600px) {
    flex-wrap: nowrap;
    width: 550px;
  }
  @media only screen and (min-width: 768px) {
    width: 750px;
  }
  @media only screen and (min-width: 992px) {
    width: 770px;
  }
  @media only screen and (min-width: 1200px) {
    width: 920px;
  }
  @media only screen and (min-width: 1480px) {
    width: 1160px;
  }
`;
const TotalSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 420px) {
    margin: 0 12px;
  }
  @media only screen and (min-width: 420px) {
    margin: 0 12px;
  }
  @media only screen and (min-width: 600px) {
    margin: 0 12px;
  }
  @media only screen and (min-width: 768px) {
    margin: 0 12px;
  }
  @media only screen and (min-width: 992px) {
    margin: 0 12px;
  }
  @media only screen and (min-width: 1200px) {
    margin: 0 20px;
  }
  @media only screen and (min-width: 1480px) {
    margin: 0 20px;
  }
`;
const Totalicon = styled.div`
  @media only screen and (max-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    display: block;
  }
  @media only screen and (min-width: 1200px) {
    display: block;
  }
  @media only screen and (min-width: 1480px) {
    display: block;
  }
`;
const Totaltext = styled.div`
  /* border: 1px solid red; */
  @media only screen and (max-width: 420px) {
    margin: 2px;
  }
  @media only screen and (min-width: 420px) {
    margin: 2px;
  }
  @media only screen and (min-width: 600px) {
    margin: 2px;
  }
  @media only screen and (min-width: 768px) {
    margin: 5px;
  }
`;
const TotalTitle = styled.div`
  @media only screen and (max-width: 420px) {
    font-size: 10px;
    width: 40px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 10px;
    width: 28px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 10px;
    width: 28px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 12px;
    width: 28px;
  }
  @media only screen and (min-width: 992px) {
    width: 28px;
  }
  @media only screen and (min-width: 1200px) {
    width: 28px;
  }
  @media only screen and (min-width: 1480px) {
    width: 48px;
  }
`;
const Totalconunt = styled.div`
  display: flex;
  /* border: 1px solid red; */
  align-items: center;
`;
const Counttext = styled.div`
  margin: 0;
  /* border: 1px solid red; */
  padding: 0;
  @media only screen and (max-width: 420px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 24px;
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

  display: flex;
  align-items: flex-end;
  font-family: "BMJUA";
`;
const Unit = styled.div`
  font-size: 12px;
`;
