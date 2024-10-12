import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { requestUserProfile } from "../../lib/request";
import {
  EnterPhoneNumber,
  Certification,
  requestNicknameCheck,
} from "../../lib/request";
function Userinfo(props) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [nickname, setnickname] = useState("");
  const [nickNameError, setnickNameError] = useState(true);
  const [nickNameMessage, setnickNameMessage] = useState(
    "한글,영어,특수문자를 사용하여 2~12글자로 입력해주세요."
  );
  const [userNicknameError, setUserNicknameError] = useState(true);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordError, setPasswordError] = useState(true);
  const [passwordMatchError, setPasswordMatchError] = useState(true);
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

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const handleEmailVerification = () => {
    // 여기에 실제 이메일 인증 요청 로직을 구현합니다.
    // 예시로 콘솔에 로그를 출력합니다.
    console.log("이메일 인증 요청:", email);
    setShowEmailVerification(true);
  };

  const verifyEmailCode = () => {
    // 여기에 실제 인증 코드 확인 로직을 구현합니다.
    // 예시로 단순히 6자리 숫자인지 확인합니다.
    if (/^\d{6}$/.test(emailVerificationCode)) {
      setIsEmailVerified(true);
    } else {
      alert("올바른 인증 코드를 입력해주세요.");
    }
  };
  const onChangeUserNickname = (e) => {
    const userNicknameRegex =
      /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣|~!@#$%^&*()_+-=]{2,12}$/;
    if (userNicknameRegex.test(e.target.value)) setUserNicknameError(false);
    else setUserNicknameError(true);
    setnickname(e.target.value);
  };
  const handleCheck = async () => {
    const message = await requestNicknameCheck(nickname);
    setnickNameMessage(message);
    if (message === "사용가능한 닉네임입니다") {
      setnickNameError(false);
    }
  };

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
  const onChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(!validatePassword(newPassword));
    setPasswordMatchError(newPassword !== repeatPassword);
  };

  const onChangeRepeatPassword = (e) => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);
    setPasswordMatchError(password !== newRepeatPassword);
  };

  const validatePassword = (password) => {
    // 비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야 함
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
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
        <Form.Group className="mb-3">
          <InputGroup>
            <Form.Control
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
            />
            <Button
              variant="outline-primary"
              onClick={handleEmailVerification}
              disabled={!isEmailValid}
            >
              메일 인증
            </Button>
          </InputGroup>
          {!isEmailValid && email && (
            <TextSection className="text-muted">
              올바른 이메일 형식이 아닙니다.
            </TextSection>
          )}
        </Form.Group>
        {showEmailVerification && (
          <Form.Group className="mb-3">
            <InputGroup className="mt-2">
              <Form.Control
                type="text"
                placeholder="인증번호 6자리 입력"
                value={emailVerificationCode}
                onChange={(e) => setEmailVerificationCode(e.target.value)}
              />
              <Button variant="outline-success" onClick={verifyEmailCode}>
                인증 확인
              </Button>
            </InputGroup>

            {isEmailVerified && (
              <TextSection className="text-success">
                이메일 인증이 완료되었습니다.
              </TextSection>
            )}
            {!isEmailVerified && (
              <TextSection className="text-muted">&nbsp;</TextSection>
            )}
          </Form.Group>
        )}
        <Form.Group className="mb-3">
          <InputGroup>
            <Form.Control
              type="nickname"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => onChangeUserNickname(e)}
            />
            <Button
              variant="warning"
              onClick={() => handleCheck()}
              disabled={userNicknameError}
            >
              중복 확인
            </Button>
          </InputGroup>
          <TextSection>{nickNameMessage}</TextSection>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          {passwordError && (
            <TextSection>
              비밀번호는 8자 이상이며, 영문, 숫자, 특수문자를 포함해야 합니다.
            </TextSection>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="비밀번호 확인"
            value={repeatPassword}
            onChange={onChangeRepeatPassword}
          />
          {passwordMatchError && repeatPassword && (
            <TextSection className="text-danger">
              비밀번호가 일치하지 않습니다.
            </TextSection>
          )}
        </Form.Group>

        <Form.Label className="Label" />

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="이름"
            value={userName}
            onChange={onChangeUserName}
          />
          {userNameError && (
            <TextSection className="text-muted">
              한글이나 영어만 사용하여 2~16글자로 입력해주세요.
            </TextSection>
          )}
          {!userNameError && (
            <TextSection className="text-muted">&nbsp;</TextSection>
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
            <TextSection className="text-muted">
              총 11자리의 숫자를 입력해주세요.
            </TextSection>
          )}
          {!userPhoneError && (
            <TextSection className="text-muted">&nbsp;</TextSection>
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
            <TextSection className="text-muted">
              인증번호 6자리의 숫자를 입력해주세요.
            </TextSection>
          )}
          {timer && !CertificationSuccess && (
            <Timer className="timer">
              {min} 분 {sec} 초
            </Timer>
          )}
        </Form.Group>
        {CertificationSuccess && (
          <TextSection className="text-success">
            SMS 인증 완료 되었습니다.
          </TextSection>
        )}
        <Form.Label className="Label" />
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
          <TextSection className="text-muted">&nbsp;</TextSection>
        </Form.Label>
        <SigninButton
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
          state={
            !nickNameError &&
            !userNameError &&
            CertificationSuccess &&
            AddressError &&
            !passwordError &&
            !passwordMatchError
          }
          disabled={
            nickNameError ||
            userNameError ||
            !CertificationSuccess ||
            !AddressError ||
            passwordError ||
            passwordMatchError
          }
        >
          회원 가입
        </SigninButton>
      </Form>
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
    @media only screen and (max-width: 280px) {
      width: 250px;
    }
    @media only screen and (min-width: 280px) {
      width: 250px;
    }
    @media only screen and (min-width: 360px) {
      width: 330px;
    }
    @media only screen and (min-width: 420px) {
      width: 390px;
    }
    @media only screen and (min-width: 600px) {
      width: 570px;
    }
    @media only screen and (min-width: 768px) {
    }
    @media only screen and (min-width: 992px) {
    }
    @media only screen and (min-width: 1200px) {
    }
    @media only screen and (min-width: 1480px) {
    }
  }
  .Label {
    border-bottom: 2px solid lightgray;
    font-family: "NotoSansKR-Bold";
    color: gray;
    font-weight: bold;

    @media only screen and (max-width: 280px) {
      width: 250px;
      font-size: 11pt;
    }
    @media only screen and (min-width: 280px) {
      width: 250px;
      font-size: 11pt;
    }
    @media only screen and (min-width: 360px) {
      width: 330px;
    }
    @media only screen and (min-width: 420px) {
      width: 390px;
    }
    @media only screen and (min-width: 600px) {
      font-size: 20px;
      width: 570px;
    }
    @media only screen and (min-width: 768px) {
    }
    @media only screen and (min-width: 992px) {
    }
    @media only screen and (min-width: 1200px) {
    }
    @media only screen and (min-width: 1480px) {
    }
  }
  .timer {
  }
  .address {
    margin: 3px;
  }

  .address-button {
    margin: 3px;
  }
`;

const TextSection = styled.div`
  font-size: 9pt;
`;
const SigninButton = styled.button`
  color: ${(props) => (props.state ? "white" : "gray")};
  background: ${(props) => (props.state ? "#fd9800" : "lightgrey")};
  display: block;
  width: 100%;
  max-width: 680px;
  height: 50px;
  border-radius: 8px;
  margin: 20px auto;
  border: none;
  font-weight: bold;
  font-size: 14px;
  box-shadow: ${(props) =>
    props.state ? "0 15px 20px rgba(253, 152, 0, 0.15)" : "0px"};
  transition: background-color 0.3s ease;
  &:hover {
    background: ${(props) => (props.state ? "#e68a00" : "lightgrey")};
  }
`;
