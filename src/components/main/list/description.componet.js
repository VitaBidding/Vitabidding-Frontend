import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auction } from "../../../redux/features/auction/auction.slice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MdOutlineLiveTv } from "react-icons/md";
import { TimeCheck } from "../../../lib/request";
function DescriptionComponet() {
  const location = useLocation();
  const { state } = location;
  const {
    Creator,
    detailed_description,
    start_day,
    start_time,
    starting_price,
    id,
  } = state;

  const { Obs_studio, nick_name } = Creator;

  const [remainingDays, setRemainingDays] = useState(0);
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [currentTime, setcurrentTime] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    TimeCheck()
      .then((res) => {
        if (res) {
          setcurrentTime(res.data.currentTime);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date(`${currentTime}`);
      const targetDate = new Date(`${start_day} ${start_time}`);

      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        // Auction has started or already ended
        setbuttonDisabled(false);
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setRemainingDays(days);
        setRemainingHours(hours);
        setRemainingMinutes(minutes);
        setRemainingSeconds(seconds);
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [currentTime]);

  let message;

  if (
    remainingDays === 0 &&
    remainingHours === 0 &&
    remainingMinutes === 0 &&
    remainingSeconds === 0
  ) {
    message = "경매 진행 중입니다.";
  } else if (
    remainingDays === 0 &&
    remainingHours === 0 &&
    remainingMinutes === 0
  ) {
    message = `경매시작 ${remainingSeconds}초 남았습니다.`;
  } else if (remainingDays === 0 && remainingHours === 0) {
    message = `경매시작 ${remainingMinutes}분 ${remainingSeconds}초 남았습니다.`;
  } else if (remainingDays === 0) {
    message = `경매시작 ${remainingHours}시간 ${remainingMinutes}분 ${remainingSeconds}초 남았습니다.`;
  } else {
    message = `경매시작 ${remainingDays}일 ${remainingHours}시간 ${remainingMinutes}분 ${remainingSeconds}초 남았습니다.`;
  }

  const navigate = useNavigate();
  const auctionPage = () => {
    dispatch(auction(id));
    navigate(`/auction/${Obs_studio.id}`);
  };

  const liveStreamingpage = () => {
    window.open(Obs_studio.video_live_url, "_blank");
  };
  return (
    <ProductInfo>
      <ProductPrice>경매시작가 : {starting_price} 포인트</ProductPrice>
      <CreatornfoContainer>
        <SellerInfoLabel>판매자: </SellerInfoLabel>
        <CreatorInfo>{nick_name}</CreatorInfo>
        <CreatorLive onClick={liveStreamingpage}>
          ON AIR
          <StyledIcon />
        </CreatorLive>
      </CreatornfoContainer>
      <ProductDescription>{detailed_description}</ProductDescription>
      <AuctionInfoContainer>
        <AuctionStartLabel>경매시작날짜:</AuctionStartLabel>
        <AuctionStartTime>{start_day}</AuctionStartTime>
      </AuctionInfoContainer>
      <AuctionInfoContainer>
        <AuctionStartLabel>경매시작시간:</AuctionStartLabel>
        <AuctionStartTime>{start_time}</AuctionStartTime>
      </AuctionInfoContainer>
      <AuctionConterContainer>
        <AuctionConter>{message}</AuctionConter>
      </AuctionConterContainer>
      <AuctionButton disabled={buttonDisabled} onClick={() => auctionPage()}>
        경매장 바로가기
      </AuctionButton>
    </ProductInfo>
  );
}

export default DescriptionComponet;

const ProductInfo = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 360px) {
    width: 270px;
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
    width: 320px;
    padding: 5px;
  }
  @media only screen and (min-width: 420px) {
    width: 350px;
    padding: 10px;
  }
  @media only screen and (min-width: 600px) {
    width: 400px;
    padding: 20px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 450px;
    padding: 30px;
  }
`;

const ProductDescription = styled.p`
  height: 140px;
  margin-bottom: 10px;
  font-family: "GmarketSansTTFMedium";
  @media only screen and (max-width: 360px) {
    font-size: 12px;
    height: 100px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12px;
    height: 100px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 16px;
    height: 140px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    height: 180px;
  }
`;

const ProductPrice = styled.p`
  font-family: "GmarketSansTTFBold";

  color: black;
  @media only screen and (max-width: 360px) {
    margin: 5px 0 5px 0;
    font-size: 16px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px 0 5px 0;
    font-size: 16px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 20px;
    margin: 10px 0 10px 0;
  }
  @media only screen and (min-width: 600px) {
    margin: 0 0 20px 0;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const CreatornfoContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
const SellerInfoLabel = styled.p`
  margin: 0 10px 0 0;
  @media only screen and (max-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const CreatorInfo = styled.p`
  margin: 0 20px 0 0;
  font-family: "GmarketSansTTFBold";
  @media only screen and (max-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const CreatorLive = styled.button`
  display: flex;
  background-color: red;
  color: #fff;
  padding: 3px 10px;
  border: none;
  border-radius: 4px;
  font-family: "BMJUA";
  cursor: pointer;
  @media only screen and (max-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const StyledIcon = styled(MdOutlineLiveTv)`
  margin: 0 0 0 10px;
  @media only screen and (max-width: 360px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const AuctionInfoContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 360px) {
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin-bottom: 5px;
  }
  @media only screen and (min-width: 420px) {
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const AuctionStartLabel = styled.p`
  margin: 0 10px 0 0;
  @media only screen and (max-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const AuctionStartTime = styled.p`
  font-family: "GmarketSansTTFBold";
  color: black;
  margin: 0;
  @media only screen and (max-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const AuctionConterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`;

const AuctionConter = styled.p`
  font-family: "GmarketSansTTFLight";
  margin: 0;
  @media only screen and (max-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const AuctionButton = styled(Button)`
  @media only screen and (max-width: 360px) {
    margin: 0 0 10px 0;
  }
  @media only screen and (min-width: 360px) {
    margin: 0 0 10px 0;
  }
  @media only screen and (min-width: 420px) {
    margin: 0 0 10px 0;
  }
  @media only screen and (min-width: 600px) {
    margin: 0;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
