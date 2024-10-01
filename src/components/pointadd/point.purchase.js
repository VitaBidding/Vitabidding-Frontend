import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #2c3e50;
  border-bottom: 2px solid #fd9800;
  padding-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #fd9800;
  margin-top: 20px;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  background-color: #ecf0f1;
  border-radius: 5px;
  padding: 15px;
`;

const InfoItem = styled.li`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Form = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #fd9800;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #af3f18;
  }
`;

const ConfirmationMessage = styled.div`
  background-color: #e8f6f3;
  border: 1px solid #1abc9c;
  border-radius: 4px;
  padding: 15px;
  margin-top: 20px;
`;

const CautionList = styled.ul`
  background-color: #fdedec;
  border-left: 4px solid #e74c3c;
  padding: 15px 15px 15px 30px;
`;

const PointPurchasePage = () => {
  const [formData, setFormData] = useState({
    depositorName: "",
    depositAmount: "",
    depositDateTime: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 현재 날짜와 시간으로 초기화
    const now = new Date();
    const currentDateTime = now.toISOString().slice(0, 16);
    setFormData((prevState) => ({
      ...prevState,
      depositDateTime: currentDateTime,
    }));
  }, []);

  return (
    <Container>
      <Title>포인트 구매 안내</Title>

      <Section>
        <p>
          안녕하세요! 계좌이체로 포인트를 구매하시는 방법에 대해 안내드립니다.
        </p>
      </Section>

      <Section>
        <SectionTitle>계좌이체 정보</SectionTitle>
        <InfoList>
          <InfoItem>은행명: 카카오뱅크</InfoItem>
          <InfoItem>계좌번호: 333-26-1666350</InfoItem>
          <InfoItem>예금주: 이동규(비타비딩)</InfoItem>
        </InfoList>
      </Section>

      <Section>
        <SectionTitle>이체 후 확인 절차</SectionTitle>

        <ConfirmationMessage>
          <h3>포인트 충전 완료</h3>
          <p>
            이체 확인 후, 10분 내로 포인트가 충전됩니다. 확인이 지연될 경우
            고객센터로 문의해 주세요.
          </p>
        </ConfirmationMessage>
      </Section>

      <Section>
        <SectionTitle>주의사항</SectionTitle>
        <CautionList>
          <li>반드시 입금자명을 정확히 기재해 주세요.</li>
          <li>계좌이체는 영업시간(10:00~24:00) 내에만 처리가 가능합니다.</li>
          <li>
            입금 오류 또는 기타 문제가 발생하면 고객센터로 즉시 연락해 주세요.
          </li>
        </CautionList>
      </Section>
    </Container>
  );
};

export default PointPurchasePage;
