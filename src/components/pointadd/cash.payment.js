import React from "react";
import styled from "styled-components";

function CashPayment({ cashPayment, depositorName, view_fk_phone }) {
  const paymentUrl = `${process.env.REACT_APP_MAIN_CLIENT_URL}/pointadd/acconttransfer`;

  const formattedValue =
    cashPayment !== null && cashPayment !== undefined
      ? cashPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "";

  const isDisabled = !cashPayment || !depositorName || !view_fk_phone;

  return (
    <Wrapper>
      <CashPaymentSection>
        <Label>최종 결제 금액</Label>
        <Contents>{formattedValue} 원</Contents>
      </CashPaymentSection>
      <CommetSection>*결제 금액에는 세금이 포함되어 있습니다.</CommetSection>
      <ButtonSection>
        <PaymentLink
          href={isDisabled ? "#" : paymentUrl}
          disabled={isDisabled}
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault();
            }
          }}
        >
          구매하기
        </PaymentLink>
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

const PaymentLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background-color: ${(props) => (props.disabled ? "#6c757d" : "#fd9800")};
  border-color: ${(props) => (props.disabled ? "#6c757d" : "#fd9800")};
  font-weight: 400;
  user-select: none;
  border: 1px solid transparent;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-decoration: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#6c757d" : "#c6471b")};
    border-color: ${(props) => (props.disabled ? "#6c757d" : "#ba431a")};
    text-decoration: none;
    color: #fff;
  }

  &:focus {
    outline: 0;
  }
`;
