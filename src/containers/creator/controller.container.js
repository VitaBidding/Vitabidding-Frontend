import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemList from "../../components/creator/controller/item.list";
import ItemImage from "../../components/creator/controller/item.image";
import ItemInfo from "../../components/creator/controller/item.info";
import AuctionBidStatus from "../../components/creator/controller/auction.bid.status";
import AuctionTimer from "../../components/creator/controller/auction.timer";
import AuctionProcess from "../../components/creator/controller/auction.process";
// import AuctionSound from "../../components/creator/controller/auction.sound";
import KakaoImage from "../../assets/img/KakaoTalk_20221126_235103258.png";
import AImge from "../../assets/img/vitaBiddingLogo.png";
import BImg from "../../assets/img/ticket.png";
import CImg from "../../assets/img/명품수석.png";
import DImg from "../../assets/img/vitaBiddingLogoBlack.png";
function ControllerContainer() {
  //선택 물품
  const [products, setProducts] = useState([
    {
      name: "비타비딩 로고",
      img: AImge,
      category: "디자인",
      Descriptiontextarea:
        " 이름긴거테스트하는중선택진행일시정지        이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지       이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지        이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지       테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지        이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선택진행일시정지이름긴거테스트하는중선",
    },

    {
      name: "핸드 메이드 잠옷",
      img: KakaoImage,
      category: "의류",
      Descriptiontextarea:
        "편안함과 스타일을 동시에!\n100% 핸드메이드로 제작된 특별한 잠옷입니다.\n부드럽고 내추럴한 소재로 제작되어 피부에 자극 없이 편안하게 입으실 수 있습니다.\n디테일 하나하나 정성을 담아 제작된 이 잠옷은 하루의 피로를 풀어주고 숙면을 도와줍니다.\n\n특징\n\n프리미엄 소재: 통기성이 우수한 고급 면 소재로 여름철에도 쾌적함을 유지해줍니다.\n편안한 핏: 몸을 편안하게 감싸주는 여유 있는 핏으로 하루 종일 입고 싶어질 편안함을 선사합니다.\n섬세한 핸드메이드: 각 제품이 장인의 손길을 거쳐 정성스럽게 제작되었습니다.",
    },

    { name: "S석 스탠딩 티켓", img: BImg, category: "티켓/교환권" },
    ,
    { name: "감정(인) 명품 수석", img: CImg, category: "기타" },
    ,
    { name: "비타비딩 블랙 로고", img: DImg, category: "디자인" },
  ]);
  const [selectproduct, setSelectedproduct] = useState({});
  //타이머
  const initialTime = 180;
  const [time, setTime] = useState(initialTime * 100);
  const [running, setRunning] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  //biduser/cost
  const [bid, setbid] = useState([
    { biduser: "마자용", bidprice: "200,000" },
    { biduser: "로스트아크모코코미스터피자먹고싶다", bidprice: "220,000" },
    { biduser: "마자용", bidprice: "240,000" },
    { biduser: "로스트아크모코코미스터피자먹고싶다", bidprice: "260,000" },
    { biduser: "마자용", bidprice: "280,000" },
  ]);
  return (
    <Wrapper>
      <Section1>
        <ItemList products={products} setSelectedproduct={setSelectedproduct} />
      </Section1>
      <Section2>
        <ItemImage selectproduct={selectproduct} />
      </Section2>
      <Section3>
        <ItemInfo selectproduct={selectproduct} />
      </Section3>
      <Section4>
        <AuctionTimer
          time={time}
          setTime={setTime}
          running={running}
          setTimerFinished={setTimerFinished}
        />
      </Section4>
      <Section5>
        <AuctionBidStatus bid={bid} />
      </Section5>
      <Section6>
        <AuctionProcess
          setRunning={setRunning}
          // handleChoiceItem={handleChoiceItem}
          // handleplay={handleplay}
          // handlepuase={handlepuase}
        />
      </Section6>
      {/* <Section7>
        <AuctionSound />
      </Section7> */}
    </Wrapper>
  );
}

export default ControllerContainer;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: grid;
  height: calc(100vh - 50px);

  @media only screen and (max-width: 280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(16, 1fr);
    width: calc(100vw - 20px);
    gap: 2px;
  }
  @media only screen and (min-width: 280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(16, 1fr);
    width: calc(100vw - 20px);
    gap: 2px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    width: calc(100vw - 30px);
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: calc(100vw - 220px);
  }
  @media only screen and (min-width: 1200px) {
    width: calc(100vw - 300px);
    gap: 3px;
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Section1 = styled.div`
  /* border: 1px solid black; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
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
const Section2 = styled.div`
  @media only screen and (max-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 4 / 9;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 4 / 9;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 2;
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
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-column: 1/ 4;
    grid-row: 9 / 12;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1/ 4;
    grid-row: 9 / 12;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 7 / 9;
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

  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 1 / 2;
    grid-row: 12 / 15;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 2;
    grid-row: 12 / 15;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }

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

const Section5 = styled.div`
  /* border: 1px solid black;
   */

  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 2 / 4;
    grid-row: 12 / 15;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 2 / 4;
    grid-row: 12 / 15;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 4 / 7;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }

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
const Section6 = styled.div`
  /* border: 1px solid black; */

  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 15 / 17;
  }
  @media only screen and (min-width: 280px) {
    grid-column: 1 / 4;
    grid-row: 15 / 17;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    grid-column: 2 / 3;
    grid-row: 7 / 9;
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

// const Section7 = styled.div`
//   /* border: 1px solid black; */

//   overflow-x: auto;
//   max-width: 100%;
//   width: 100%;
//   box-sizing: border-box;

//   @media only screen and (max-width: 280px) {
//     grid-column: 1 / 4;
//     grid-row: 15 / 17;
//   }
//   @media only screen and (min-width: 280px) {
//     grid-column: 1 / 4;
//     grid-row: 15 / 17;
//   }
//   @media only screen and (min-width: 360px) {
//   }
//   @media only screen and (min-width: 420px) {
//   }
//   @media only screen and (min-width: 600px) {
//     grid-column: 2 / 3;
//     grid-row: 8 / 9;
//   }
//   @media only screen and (min-width: 768px) {
//   }
//   @media only screen and (min-width: 992px) {
//   }
//   @media only screen and (min-width: 1200px) {
//   }
//   @media only screen and (min-width: 1480px) {
//   }
// `;
