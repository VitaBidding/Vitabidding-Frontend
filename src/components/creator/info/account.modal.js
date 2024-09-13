import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Accountregistration } from "../../../lib/request";

function AccountModal({ show, handleClose }) {
  const [userAccountNumber, setuserAccountnumber] = useState("");
  const [userAccountNumberError, setuserAccountNumberError] = useState(true);
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedBankError, setSelectedBankError] = useState(true);
  const banks = [
    "KB국민은행",
    "신한은행",
    "우리은행",
    "하나은행",
    "SC제일은행",
    "한국씨티은행",
    "DGB대구은행",
    "BNK부산은행",
    "광주은행",
    "제주은행",
    "전북은행",
    "BNK경남은행",
    "케이뱅크",
    "카카오뱅크",
    "토스뱅크",
  ];

  const handleInputChange = (event) => {
    setuserAccountNumberError(false);
    // 입력값에서 허용된 문자(숫자 및 하이픈)만 남깁니다.
    const newValue = event.target.value;

    // 필터링된 값
    const filteredValue = newValue.replace(/[^0-9]/g, "");

    // 상태를 업데이트합니다.
    setuserAccountnumber(filteredValue);
  };
  const handleSelectChange = (event) => {
    setSelectedBankError(false);
    setSelectedBank(event.target.value); // 선택된 값을 상태로 설정합니다.
  };
  const onclick = () => {
    Accountregistration({ selectedBank, userAccountNumber });
    handleClose();
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>계좌 등록</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>은행선택</Form.Label>
          <Form.Select
            aria-label="은행선택"
            onChange={handleSelectChange}
            value={selectedBank}
          >
            <option value="" disabled selected style={{ display: "none" }}>
              은행을 선택해주세요
            </option>
            {banks.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </Form.Select>
          <br />
          <Form.Label>계좌 번호 입력</Form.Label>
          <Form.Control
            type="text"
            placeholder="숫자만 입력해주세요"
            value={userAccountNumber}
            onChange={handleInputChange}
          />
        </Form>
        <br />
        <ButtonSection>
          <Button
            className="button"
            variant="primary"
            disabled={userAccountNumberError && selectedBankError}
            onClick={() => onclick()}
          >
            등록하기
          </Button>
        </ButtonSection>
      </Modal.Body>
    </Modal>
  );
}

export default AccountModal;

const ButtonSection = styled.div`
  margin: 5px 0;
  text-align: right;
`;
