import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function CompletepaymentItem(el) {
  const { item } = el;
  const handleButtonClick = () => {
    // 복사할 데이터
    const copiedData = item.trackingNumber;

    // 클립보드에 데이터 복사
    navigator.clipboard
      .writeText(copiedData)
      .then(() => {})
      .catch(() => {});
  };
  return (
    <Item>
      <Colfirst>
        <ItemThumbnailSection>
          <ItemThumbnail src={item.Thumbnail} alt="Thumbnail" />
        </ItemThumbnailSection>
        <ColRowSectionFirst>
          <ItemNameSection>
            <ItemTite>{item.title}</ItemTite>
            <Itemcategory>{item.category}</Itemcategory>
          </ItemNameSection>
          <ItemCreatorSection>
            <ItemCreator>{item.creator}</ItemCreator>
          </ItemCreatorSection>
          <ItemPriceSection>
            <ItemPriceLabel>결제포인트</ItemPriceLabel>
            <ItemPrice>{item.price}</ItemPrice>
          </ItemPriceSection>
        </ColRowSectionFirst>
      </Colfirst>
      <Colsecond>
        <Container>
          <Form>
            <div>
              <p>배송지 정보:</p>
              <DefRow>
                <Col>{item.Recipient}</Col>
              </DefRow>
              <DefRow>
                <Col>{item.contact}</Col>
              </DefRow>
              <DefRow>
                <Col>
                  ({item.zip_code}) {item.street_address1}
                </Col>
              </DefRow>
              <DefRow>
                <Col>{item.street_address2}</Col>
                <Col>{item.state}</Col>
              </DefRow>
            </div>
          </Form>
        </Container>
      </Colsecond>
      <Colthird>
        {item.item_status === "결제완료" && (
          <DisplayRow>
            <StatusLabel>거래상태</StatusLabel>
            <Status>{item.item_status}</Status>
            <Addition>배송진행 중 입니다.</Addition>
          </DisplayRow>
        )}
        {item.item_status === "배송진행" && (
          <DisplayRow>
            <ColRowSectionSecond>
              <StatusLabel>거래상태</StatusLabel>
              <Status>{item.item_status}</Status>
            </ColRowSectionSecond>
            <ColRowSectionThird>
              <Deliverycompany>{item.delivery_company}</Deliverycompany>
              <TrackingNumber>{item.trackingNumber}</TrackingNumber>
            </ColRowSectionThird>
            <TrackingNumberButton onClick={handleButtonClick} variant="outline-dark">
              운송번호 복사
            </TrackingNumberButton>
          </DisplayRow>
        )}
      </Colthird>
      <Colfourth>
        <Comment>
          <div>경매 물건이 도착하셨다면</div>
          <div>&nbsp;완료버튼을 눌러주세요</div>
        </Comment>
        <CompleteButton>거래완료</CompleteButton>
      </Colfourth>
    </Item>
  );
}

export default CompletepaymentItem;
const Item = styled.div`
  margin-bottom: 20px;
  /* background-color: #f1f1f1; */
  border-radius: 10px;
  /* 그림자 스타일 설정 */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  @media only screen and (max-width: 360px) {
    width: 260px;
    padding: 2px;
    font-size: 10px;
  }
  @media only screen and (min-width: 360px) {
    width: 340px;
    padding: 2px;
    font-size: 10px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    width: 500px;
    padding: 5px;
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    width: 700px;
    padding: 10px;
    font-size: 14px;
  }
  @media only screen and (min-width: 992px) {
    width: 900px;
    padding: 10px;
    font-size: 16px;
  }
  @media only screen and (min-width: 1200px) {
    width: 900px;
    padding: 10px;
  }
`;
const Colfirst = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Colsecond = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: 1px solid black;

  @media only screen and (max-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Colthird = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: 1px solid black;
  @media only screen and (max-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Colfourth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid black; */
  @media only screen and (max-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemThumbnailSection = styled.div`
  width: 130px;
  margin: 10px;
`;
const ItemThumbnail = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;
const ColRowSectionFirst = styled.div`
  display: flex;
  @media only screen and (max-width: 360px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 360px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemNameSection = styled.div`
  @media only screen and (max-width: 360px) {
    width: 240px;
  }
  @media only screen and (min-width: 360px) {
    width: 320px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    width: 300px;
  }
  @media only screen and (min-width: 768px) {
    width: 300px;
    border-right: 1px solid lightgray;
  }
  @media only screen and (min-width: 992px) {
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemTite = styled.div`
  color: black;

  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Itemcategory = styled.div`
  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemCreatorSection = styled.div`
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
    width: 140px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemCreator = styled.div`
  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemPriceSection = styled.div`
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    border-left: 1px solid lightgray;
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
    width: 140px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemPriceLabel = styled.div`
  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemPrice = styled.div`
  color: black;
  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const DisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ColRowSectionSecond = styled.div`
  display: flex;
  @media only screen and (max-width: 360px) {
    flex-direction: column;
    width: 50px;
  }
  @media only screen and (min-width: 360px) {
    flex-direction: column;
    width: 90px;
    align-items: center;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    width: 140px;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 200px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const StatusLabel = styled.div`
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Status = styled.div`
  color: #000;
  font-weight: bold;
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const ColRowSectionThird = styled.div`
  display: flex;

  @media only screen and (max-width: 360px) {
    flex-direction: column;
    width: 110px;
  }
  @media only screen and (min-width: 360px) {
    flex-direction: column;
    width: 150px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    flex-direction: column;
    width: 220px;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 300px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Addition = styled.div`
  margin: 10px;
`;
const Deliverycompany = styled.div`
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const TrackingNumber = styled.div`
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const TrackingNumberButton = styled(Button)`
  @media only screen and (max-width: 360px) {
    font-size: 10px;
    width: 70px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 10px;
    width: 70px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    width: 120px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 16px;
    width: 140px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const CompleteButton = styled(Button)`
  width: 70px;
  height: 65px;
`;
const DefRow = styled(Row)`
  /* border: 1px solid red; */
  margin: 3px;
`;

const Comment = styled.div`
  display: flex;
  @media only screen and (max-width: 360px) {
    width: 160px;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 360px) {
    width: 230px;
    align-items: center;
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    width: 350px;
    align-items: center;
    justify-content: center;
    margin: 5px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
