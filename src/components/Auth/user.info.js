import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { requestUserProfile } from "../../lib/request";
import { EnterPhoneNumber, Certification } from "../../lib/request";
function Userinfo(props) {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [userPhoneError, setUserPhoneError] = useState(true);
  const [CertificationNumber, setCertificationNumber] = useState("");
  const [CertificationNumberError, setCertificationNumberError] =
    useState(true);
  const [timer, settimer] = useState(false);
  const [CertificationDisabled, setCertificationDisabled] = useState(true);
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const [CertificationSuccess, setCertificationSuccess] = useState(false);
  const [Zonecode, setZonecode] = useState("");
  const [FuAddress, setFuAddress] = useState("");
  const [ExAddress, setExAddress] = useState("");
  const [DeAddress, setDeAddress] = useState("");
  const [AddressError, setAddressError] = useState(false);

  const onChangeDeAddres = (e) => {
    setDeAddress(e.target.value);
  };
  const onChangeUserName = (e) => {
    const userNameRegex = /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}$/;
    if (!e.target.value || userNameRegex.test(e.target.value))
      setUserNameError(false);
    else setUserNameError(true);
    setUserName(e.target.value);
  };

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
  const PhoneNumberRequestButton = () => {
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

  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setFuAddress(fullAddress); // e.g. '서울 성동구 왕십리로2길 20'
    setExAddress(extraAddress); //(성수동1가)
    setZonecode(data.zonecode); //04779
    setAddressError(true);
  };
  const handleClick = () => {
    open({
      onComplete: handleComplete,
      popupTitle: "우편번호 검색",
    });
  };

  return (
    <Section>
      <Form className="form">
        <Form.Label className="Label">추가정보입력</Form.Label>
        <div>&nbsp;</div>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="이름"
            value={userName}
            onChange={onChangeUserName}
          />
          {userNameError && (
            <Form.Text className="text-muted">
              한글이나 영어만 사용하여 2~16글자로 입력해주세요.
            </Form.Text>
          )}
          {!userNameError && (
            <Form.Text className="text-muted">&nbsp;</Form.Text>
          )}
        </Form.Group>
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
              onClick={() => PhoneNumberRequestButton()}
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
        <Form.Group>
          <Row>
            <Col md="4">
              <Form.Control
                className="address"
                type="text"
                placeholder="우편번호"
                value={Zonecode}
                disabled={true}
              />
            </Col>
            <Col>
              <Button
                className="address-button"
                variant="outline-secondary"
                onClick={handleClick}
              >
                주소찾기
              </Button>
            </Col>
          </Row>
          <Form.Control
            className="address"
            type="text"
            placeholder="주소"
            value={FuAddress}
            disabled={true}
          />
          <Row>
            <Col>
              <Form.Control
                className="address"
                type="text"
                placeholder="상세주소"
                value={DeAddress}
                onChange={onChangeDeAddres}
              />
            </Col>
            <Col md="4">
              <Form.Control
                className="address"
                type="text"
                placeholder="참고항목"
                value={ExAddress}
                disabled={true}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Label className="Label">
          <Form.Text className="text-muted">&nbsp;</Form.Text>
        </Form.Label>
      </Form>
      <Nextbutton
        className="next"
        onClick={() =>
          requestUserProfile(
            userName,
            userPhone,
            Zonecode,
            FuAddress,
            ExAddress,
            DeAddress
          )
        }
        state={!userNameError && CertificationSuccess && AddressError}
        disabled={!(!userNameError && CertificationSuccess && AddressError)}
      >
        회원 가입
      </Nextbutton>
    </Section>
  );
}

export default Userinfo;
const Timer = styled.div`
  float: right;
`;
const Section = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  .form {
    width: 600px;
  }
  .Label {
    width: 600px;
    border-bottom: 2px solid lightgray;
    font-family: "NotoSansKR-Bold";
    color: gray;
    font-weight: bold;
    font-size: 20px;
  }
  .timer {
  }
  .SMSLabel {
    margin: 0 0 20px;
    width: 600px;
    border-bottom: 2px solid lightgray;
    font-family: "NotoSansKR-Bold";
    color: black;
    font-size: 20px;
  }
  .address {
    margin: 3px;
  }

  .address-button {
    margin: 3px;
  }
`;

const Nextbutton = styled.button`
  /* border: 2px solid black; */
  width: 400px;
  height: 50px;
  margin: 35px 0 0;
  color: ${(props) => (props.state ? "white" : "gray")};
  background: ${(props) => (props.state ? "#fd9800" : "lightgrey")};
  border-radius: 24px;
  font-family: "NotoSansKR-Bold";
  font-size: 25px;
`;
