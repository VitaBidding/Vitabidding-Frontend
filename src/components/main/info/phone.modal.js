import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { EditPhoneNumber } from "../../../lib/request";
import { useDispatch } from "react-redux";
import { phone } from "../../../redux/features/user/user.slice";
import { EnterPhoneNumber, Certification } from "../../../lib/request";
function PhoneModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const [userPhone, setUserPhone] = useState("");
  const [userPhoneError, setUserPhoneError] = useState(true);
  // console.log("🚀 ~ file: PhoneModal.js:13 ~ PhoneModal ~ userPhoneError", userPhoneError)
  const [CertificationNumber, setCertificationNumber] = useState("");
  const [CertificationNumberError, setCertificationNumberError] =
    useState(true);
  // console.log("🚀 ~ file: PhoneModal.js:16 ~ PhoneModal ~ CertificationNumberError", CertificationNumberError)
  const [timer, settimer] = useState(false);
  const [CertificationDisabled, setCertificationDisabled] = useState(true);
  // console.log("🚀 ~ file: PhoneModal.js:19 ~ PhoneModal ~ CertificationDisabled", CertificationDisabled)
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const [CertificationSuccess, setCertificationSuccess] = useState(false);
  // console.log("🚀 ~ file: PhoneModal.js:23 ~ PhoneModal ~ CertificationSuccess", CertificationSuccess)

  const onChangeUserPhone = (e) => {
    const userPhoneRegex = /^[0-9]{11}$/;
    if (userPhoneRegex.test(e.target.value)) setUserPhoneError(false);
    else setUserPhoneError(true);
    setUserPhone(e.target.value);
  };

  const onChangeCertification = (e) => {
    const userCertificationRegex = /^[0-9]{6}$/;
    if (userCertificationRegex.test(e.target.value))
      setCertificationNumberError(false);
    else setCertificationNumberError(true);
    setCertificationNumber(e.target.value);
  };

  const VALIDTIME = 179;

  const time = useRef(VALIDTIME);
  const timerId = useRef(null);
  const reset = () => {
    EnterPhoneNumber(userPhone);
    settimer(true);
    setCertificationDisabled(false);
    setTimeout(() => setCertificationDisabled(true), 179000);
    clearInterval(timerId);
    time.current = VALIDTIME;
    setMin(Math.floor(VALIDTIME / 60));
    setSec(VALIDTIME % 60);
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  });

  useEffect(() => {
    // 만약 타임 아웃이 발생했을 경우
    if (time.current <= -1) {
      clearInterval(timerId.current);
      // dispatch event
    }
  }, [sec]);

  function CertificationBotton() {
    const data = Certification(userPhone, CertificationNumber);
    setCertificationSuccess(data);
  }

  const onclickChange = () => {
    EditPhoneNumber(userPhone);
    dispatch(phone(userPhone));
    handleClose();
  };
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>핸드폰 번호 설정</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="연락처"
                value={userPhone}
                onChange={onChangeUserPhone}
                disabled={CertificationSuccess}
              />
              <Button
                className="button"
                variant="outline-primary"
                disabled={userPhoneError || CertificationSuccess}
                onClick={() => reset()}
              >
                인증 요청
              </Button>
            </InputGroup>
            {userPhoneError && (
              <Form.Text className="text-muted">
                총 11자리의 숫자를 입력해주세요.
              </Form.Text>
            )}
            {!userPhoneError && (
              <Form.Text className="text-muted">&nbsp;</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="인증번호 입력"
                value={CertificationNumber}
                onChange={onChangeCertification}
                disabled={CertificationSuccess}
              />
              <Button
                variant="outline-info"
                disabled={
                  userPhoneError ||
                  CertificationNumberError ||
                  CertificationDisabled ||
                  CertificationSuccess
                }
                onClick={() => CertificationBotton()}
              >
                인증 확인
              </Button>
            </InputGroup>
            {CertificationNumberError && (
              <Form.Text className="text-muted">
                인증번호 6자리의 숫자를 입력해주세요.
              </Form.Text>
            )}
            {!CertificationNumberError && (
              <Form.Text className="text-muted">&nbsp;</Form.Text>
            )}
            {timer && !CertificationSuccess && (
              <Timer className="timer">
                {min} 분 {sec} 초
              </Timer>
            )}
          </Form.Group>
          <Form.Label className="SMSLabel">
            {CertificationSuccess && (
              <Form.Text className="text-muted">
                SMS 인증 완료 되었습니다.
              </Form.Text>
            )}
            {!CertificationSuccess && (
              <Form.Text className="text-muted">&nbsp;</Form.Text>
            )}
          </Form.Label>
        </Form>
        <ButtonSection>
          <Button
            className="button"
            variant="primary"
            disabled={!CertificationSuccess}
            onClick={() => onclickChange()}
          >
            변경하기
          </Button>
        </ButtonSection>
      </Modal.Body>
    </Modal>
  );
}

export default PhoneModal;

const Timer = styled.div`
  float: right;
`;
const ButtonSection = styled.div`
  margin: 5px 0;
  text-align: right;
`;
