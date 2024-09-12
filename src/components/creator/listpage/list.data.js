import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
function ListData({ products, handleShow, ThandleShow, setupproduct }) {
  const updateClick = (product) => {
    handleShow();
    setupproduct(product);
  };
  const inputTrackingClick = () => {
    ThandleShow();
  };
  const leftScrollRef = useRef(null);
  const rightScrollRef = useRef(null);
  const BScrollRef = useRef(null);

  const LhandleScroll = (e) => {
    const { scrollTop } = e.target;
    rightScrollRef.current.scrollTop = scrollTop;
  };
  const RhandleScroll = (e) => {
    const { scrollTop } = e.target;

    leftScrollRef.current.scrollTop = scrollTop;
  };

  const BhandleScroll = (e) => {
    const { scrollLeft } = e.target;
    rightScrollRef.current.scrollLeft = scrollLeft;
  };

  return (
    <DataContainer>
      <Atable id="AproductTable">
        <ADatathead>
          <ADatatr>
            <Updateth>수정/입력</Updateth>
            <Nameth>제품명</Nameth>
            <AThumbnailth>썸네일</AThumbnailth>
            <AItemstatusth>물건상태</AItemstatusth>
          </ADatatr>
        </ADatathead>
        <LScrollArea ref={leftScrollRef} onScroll={LhandleScroll}>
          {products.map((product) => (
            <ADatatr key={product.id}>
              <Asection>
                <Updatetd>
                  {product.item_status === "경매대기" ? (
                    <UpButton
                      variant="secondary"
                      onClick={() => updateClick(product)}
                    >
                      수정
                    </UpButton>
                  ) : (
                    <div></div>
                  )}
                  {product.item_status === "결제완료" ? (
                    <InButton
                      variant="info"
                      onClick={() => inputTrackingClick()}
                    >
                      입력
                    </InButton>
                  ) : (
                    <div></div>
                  )}
                </Updatetd>
                <Nametd>{product.item_name}</Nametd>
                <AThumbnailtd>
                  <ImageA src={product.Item_thumbnail.thumbnail} />
                </AThumbnailtd>
                <AItemstatustd>{product.item_status}</AItemstatustd>
              </Asection>
            </ADatatr>
          ))}
        </LScrollArea>
        <Scrollsection />
      </Atable>
      <Bsection ref={BScrollRef} onScroll={BhandleScroll}>
        <Btable id="BproductTable">
          <BDatathead>
            <BDatatr>
              <BThumbnailth>썸네일</BThumbnailth>
              <BItemstatusth>물건상태</BItemstatusth>
              <Waybillth>운송장</Waybillth>
              <StartDateth>경매날짜</StartDateth>
              <StartTimeth>경매시간</StartTimeth>
              <Descriptionth>상세설명</Descriptionth>
              <Categoryth>카테고리</Categoryth>
              <Priceth>경매시작가</Priceth>
              <Bidpriceth>경매낙찰가</Bidpriceth>
              <Vnamenickth>낙찰자닉네임</Vnamenickth>
              <Vnameth>낙찰자이름</Vnameth>
              <Vaddressth>낙찰자주소</Vaddressth>
              <Vphoneth>낙찰자전화번호</Vphoneth>
            </BDatatr>
          </BDatathead>
          <RScrollArea ref={rightScrollRef} onScroll={RhandleScroll}>
            {products.map((product) => (
              <BDatatr key={product.id}>
                <BsectionData>
                  <BThumbnailtd>
                    <ImageB src={product.Item_thumbnail.thumbnail} />
                  </BThumbnailtd>
                  <BItemstatustd>{product.item_status}</BItemstatustd>
                  <Waybilltd>
                    <Deliverycompany>
                      {product.delivery_company}
                    </Deliverycompany>
                    <TrackingNumber>{product.trackingNumber}</TrackingNumber>
                  </Waybilltd>
                  <StartDatetd>{product.start_day}</StartDatetd>
                  <StartTimetd>{product.start_time}</StartTimetd>
                  <Descriptiontd>{product.detailed_description}</Descriptiontd>
                  <Categorytd>{product.category}</Categorytd>
                  <Pricetd>{product.starting_price}</Pricetd>
                  <Bidpricetd>{product.bid_price}</Bidpricetd>
                  <Vnamenicktd>{product.view_fk_nickname}</Vnamenicktd>
                  <Vnametd>{product.view_fk_name}</Vnametd>
                  <Vaddresstd>{product.view_fk_address}</Vaddresstd>
                  <Vphonetd>{product.view_fk_phone}</Vphonetd>
                </BsectionData>
              </BDatatr>
            ))}
          </RScrollArea>
        </Btable>
      </Bsection>
    </DataContainer>
  );
}

export default ListData;

const DataContainer = styled.div`
  border-bottom: 0.063rem solid #e0dde1;
  /* width: 1160px; */
  justify-content: center;
  align-items: center;
  display: flex;
  @media only screen and (max-width: 360px) {
    width: 270px;
    font-size: 12px;
  }
  @media only screen and (min-width: 360px) {
    width: 350px;
    font-size: 12px;
  }
  @media only screen and (min-width: 420px) {
    width: 420px;
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    width: 550px;
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    width: 750px;
    font-size: 16px;
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
const LScrollArea = styled.div`
  flex: 1;

  /* height: 500px; */
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @media only screen and (max-width: 360px) {
    height: 50vh;
  }
  @media only screen and (min-width: 360px) {
    height: 60vh;
  }
  @media only screen and (min-width: 420px) {
    height: 60vh;
  }
  @media only screen and (min-width: 600px) {
    height: 60vh;
  }
  @media only screen and (min-width: 768px) {
    height: 70vh;
    width: 396px;
  }
  @media only screen and (min-width: 992px) {
    width: 476px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const RScrollArea = styled.div`
  flex: 1;
  /* height: 500px; */
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @media only screen and (max-width: 360px) {
    width: 1550px;
    height: 50vh;
  }
  @media only screen and (min-width: 360px) {
    width: 1550px;
    height: 60vh;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 2000px;
    height: 70vh;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Atable = styled.div``;
const Btable = styled.div``;
const ADatathead = styled.div`
  color: black;
  display: flex;

  @media only screen and (max-width: 420px) {
    width: 140px;
    height: 40px;
  }
  @media only screen and (min-width: 420px) {
    width: 140px;
    height: 40px;
  }

  @media only screen and (min-width: 600px) {
    width: 140px;
    height: 40px;
  }
  @media only screen and (min-width: 768px) {
    width: 396px;
    height: 30px;
  }
  @media only screen and (min-width: 992px) {
    width: 476px;
    height: 30px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const BDatathead = styled.div`
  color: black;
  display: flex;

  @media only screen and (max-width: 420px) {
    width: 1550px;
    height: 40px;
  }
  @media only screen and (min-width: 420px) {
    width: 1550px;
    height: 40px;
  }
  @media only screen and (min-width: 600px) {
    width: 1550px;
    height: 40px;
  }
  @media only screen and (min-width: 768px) {
    width: 2000px;
    height: 30px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Scrollsection = styled.div`
  height: 8px;
`;

const ADatatr = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.063rem solid #e0dde1;
  @media only screen and (max-width: 420px) {
    width: 140px;
  }
  @media only screen and (min-width: 420px) {
    width: 140px;
  }
  @media only screen and (min-width: 600px) {
    width: 140px;
  }
  @media only screen and (min-width: 768px) {
    width: 396px;
  }
  @media only screen and (min-width: 992px) {
    width: 476px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const BDatatr = styled.div`
  display: flex;
  flex-direction: row;
  white-space: normal;
  overflow: hidden;
  border-bottom: 0.063rem solid #e0dde1;
  @media only screen and (max-width: 420px) {
    width: 1550px;
  }
  @media only screen and (min-width: 420px) {
    width: 1550px;
  }
  @media only screen and (min-width: 600px) {
    width: 1550px;
  }
  @media only screen and (min-width: 768px) {
    width: 2000px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Asection = styled.div`
  display: flex;
  overflow: hidden;
  @media only screen and (max-width: 420px) {
    height: 60px;
  }
  @media only screen and (min-width: 420px) {
    height: 60px;
  }
  @media only screen and (min-width: 600px) {
    height: 60px;
  }
  @media only screen and (min-width: 768px) {
    height: 96px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Bsection = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  @media only screen and (max-width: 420px) {
    width: 50vw;
  }
  @media only screen and (min-width: 420px) {
    width: 550px;
  }
  @media only screen and (min-width: 600px) {
    width: 550px;
  }
  @media only screen and (min-width: 768px) {
    width: 390px;
  }
  @media only screen and (min-width: 992px) {
    width: 330px;
  }
  @media only screen and (min-width: 1200px) {
    width: 480px;
  }
  @media only screen and (min-width: 1480px) {
    width: 720px;
  }
`;
const BsectionData = styled.div`
  @media only screen and (max-width: 420px) {
    height: 60px;
  }
  @media only screen and (min-width: 420px) {
    height: 60px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    height: 96px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
  display: flex;
  justify-content: center;
`;
const Updateth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Updatetd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Waybillth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 150px;
  }
  @media only screen and (min-width: 420px) {
    width: 150px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 220px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Waybilltd = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 150px;
  }
  @media only screen and (min-width: 420px) {
    width: 150px;
  }
  @media only screen and (min-width: 600px) {
    width: 150px;
  }
  @media only screen and (min-width: 768px) {
    width: 220px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Deliverycompany = styled.div`
  margin: 5px;
`;
const TrackingNumber = styled.div``;
const AThumbnailth = styled.div`
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    width: 96px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const AThumbnailtd = styled.div`
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    width: 96px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const BThumbnailth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const BThumbnailtd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const ImageA = styled.img`
  width: 96px;
`;
const ImageB = styled.img`
  width: 60px;
`;
const Nameth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 200px; */
  @media only screen and (max-width: 420px) {
    width: 80px;
  }
  @media only screen and (min-width: 420px) {
    width: 80px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 200px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Nametd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 200px; */
  @media only screen and (max-width: 420px) {
    width: 80px;
  }
  @media only screen and (min-width: 420px) {
    width: 80px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 200px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const AItemstatusth = styled.div`
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    width: 80px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const AItemstatustd = styled.div`
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 420px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    width: 80px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const BItemstatusth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 80px;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const BItemstatustd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 420px) {
    width: 60px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 80px;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const StartDateth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 70px;
  }
  @media only screen and (min-width: 420px) {
    width: 70px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const StartDatetd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 70px;
  }
  @media only screen and (min-width: 420px) {
    width: 70px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const StartTimeth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 70px;
  }
  @media only screen and (min-width: 420px) {
    width: 70px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const StartTimetd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 70px;
  }
  @media only screen and (min-width: 420px) {
    width: 70px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Descriptionth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
const Descriptiontd = styled.div`
  display: flex;
  width: 300px;
`;
const Categoryth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Categorytd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Bidpriceth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Bidpricetd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Vnamenickth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 130px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Vnamenicktd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 130px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Vnameth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 130px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Vnametd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 130px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Vaddressth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 200px;
  }
  @media only screen and (min-width: 420px) {
    width: 200px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 350px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Vaddresstd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 200px;
  }
  @media only screen and (min-width: 420px) {
    width: 200px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 350px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Vphoneth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 130px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Vphonetd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 130px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Priceth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Pricetd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 420px) {
    width: 110px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const UpButton = styled(Button)`
  font-weight: bold;
  @media only screen and (max-width: 420px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const InButton = styled(Button)`
  font-weight: bold;
  @media only screen and (max-width: 420px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
