import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

function CashPayment({ cashPayment, depositorName, view_fk_phone }) {
  function onclickPaymentButton() {
    setTimeout(() => {
      window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/pointadd/acconttransfer`;
    }, 2000);
  }
  const formattedValue =
    cashPayment !== null && cashPayment !== undefined //0일경우 생략
      ? cashPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // 세 자리마다 쉼표 추가
      : "";
  return (
    <Wrapper>
      <CashPaymentSection>
        <Label>최종 결제 금액</Label>
        <Contents>{formattedValue} 원</Contents>
      </CashPaymentSection>
      <CommetSection>*결제 금액에는 세금이 포함되어 있습니다.</CommetSection>
      <ButtonSection>
        <PaymentButton
          disabled={!cashPayment || !depositorName || !view_fk_phone}
          onClick={() => onclickPaymentButton()}
        >
          구매하기
        </PaymentButton>
      </ButtonSection>
    </Wrapper>
  );
}

export default CashPayment;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "GmarketSansMedium";
  font-weight: bold;
  font-size: 13pt;
  padding: 20px;
`;

const CashPaymentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #000;
`;
const Label = styled.div``;
const Contents = styled.div``;

const CommetSection = styled.div`
  margin: 8px 0 0 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 9pt;
  font-weight: 100;
  color: #868e96;
`;

const ButtonSection = styled.div`
  margin: 20px 0 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PaymentButton = styled(Button)`
  width: 100%;
  height: 50px;
`;
