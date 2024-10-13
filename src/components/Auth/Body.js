import React, { useState } from "react";
import styled from "styled-components";
import { GrGoogle } from "react-icons/gr";
import { SiNaver } from "react-icons/si";
import {
  requestLoginGoogle,
  requestLoginNaver,
  requestLogin,
  requestSignup,
  requestEmailVerification,
  verifyEmailCode,
  requestNicknameCheck,
} from "../../lib/request";
import { Button } from "react-bootstrap";

const AuthForm = () => {
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [codeError, setCodeError] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(true);
  const [isVerificationComplete, setIsVerificationComplete] = useState(false);

  const [nickname, setNickname] = useState("");
  const [nickNameError, setNickNameError] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const isSignup = mode === "signup";

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleReset = () => {
    setMode("signin");
    setEmail("");
    setIsEmailValid(false);
    setEmailError("");
    setShowVerificationInput(false);
    setCodeError("");
    setVerificationCode("");
    setIsVerified(false);
    setIsEmailEditable(true);
    setIsVerificationComplete(false);
    setNickname("");
    setNickNameError("");
    setIsNicknameValid(false);
    setPassword("");
    setRepeatPassword("");
    setPasswordError("");
    setRepeatPasswordError("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const handleEmailVerification = async () => {
    try {
      const response = await requestEmailVerification(email);
      if (response.success) {
        setEmailError("인증 메일이 발송되었습니다.");
        setShowVerificationInput(true);
      } else {
        setEmailError("메일 발송에 실패했습니다.");
      }
    } catch (error) {
      setEmailError("오류가 발생했습니다.");
    }
  };

  const handleVerificationCodeChange = (e) => {
    const code = e.target.value.replace(/\D/g, ""); // 숫자가 아닌 문자는 제거
    setVerificationCode(code);

    // 코드가 6자리 숫자인지 확인
    const isValidCode = /^\d{6}$/.test(code);
    setIsVerified(isValidCode);
  };

  const handleVerificationCodeSubmit = async () => {
    try {
      const response = await verifyEmailCode(email, verificationCode);
      if (response.success) {
        setSuccessMessage("이메일 인증이 완료되었습니다.");
        setCodeError("");
        setIsVerificationComplete(true);
        setIsEmailEditable(false);
      } else {
        setCodeError("인증 코드가 잘못되었습니다.");
        setSuccessMessage("");
      }
    } catch (error) {
      setCodeError("오류가 발생했습니다.");
      setSuccessMessage("");
    }
  };

  const validateNickname = (nickname) => {
    const nicknameRegex = /^[a-zA-Z0-9가-힣]{1,12}$/;
    return nicknameRegex.test(nickname);
  };

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    setIsNicknameValid(false);
    if (!validateNickname(newNickname)) {
      setNickNameError("닉네임은 1~12자의 영문, 숫자, 한글만 사용 가능합니다.");
    } else {
      setNickNameError("");
    }
  };

  const handleNicknameCheck = async () => {
    if (!validateNickname(nickname)) {
      setNickNameError("닉네임 형식이 올바르지 않습니다.");
      return;
    }

    try {
      const message = await requestNicknameCheck(nickname);
      if (message === "사용 가능한 닉네임입니다.") {
        setIsNicknameValid(true);
      } else {
        setIsNicknameValid(false);
      }
      setNickNameError(message);
    } catch (error) {
      setNickNameError("중복 확인 중 오류가 발생했습니다.");
      setIsNicknameValid(false);
    }
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!validatePassword(newPassword)) {
      setPasswordError(
        "비밀번호는 8자 이상이며, 영문, 숫자, 특수문자를 포함해야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleRepeatPasswordChange = (e) => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);
    if (newRepeatPassword !== password) {
      setRepeatPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setRepeatPasswordError("");
    }
  };

  const isSignupFormValid = () => {
    return (
      isEmailValid &&
      isVerificationComplete &&
      isNicknameValid &&
      validatePassword(password) &&
      password === repeatPassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "signin") {
      requestLogin({ email, password });
    } else if (mode === "signup") {
      if (isSignupFormValid()) {
        requestSignup({ email, nickname, password, repeatPassword });
      } else {
        // 에러 메시지 표시 또는 다른 처리
        console.log("회원가입 폼이 유효하지 않습니다.");
      }
    }
  };

  return (
    <Container>
      <Links mode={mode}>
        <div>
          <li
            onClick={() => handleModeChange("signin")}
            style={{
              color: mode === "signin" ? "#0f132a" : "rgba(15, 19, 42, 0.6)",
            }}
          >
            로그인
          </li>
          &emsp;
          <li
            onClick={() => handleModeChange("signup")}
            style={{
              color: mode === "signup" ? "#0f132a" : "rgba(15, 19, 42, 0.6)",
            }}
          >
            회원가입
          </li>
        </div>
        <li onClick={handleReset}>RESET</li>
      </Links>
      <Form>
        {!isSignup && (
          <>
            <InputBlock>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputBlock>
            <InputBlock>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputBlock>
            <SigninButton onClick={handleSubmit}>로그인</SigninButton>
          </>
        )}
        {isSignup && (
          <>
            <Col>
              <InputBlockFlex1>
                <input
                  type="email"
                  placeholder="이메일"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={!isEmailEditable}
                />
                <DuplicateButton
                  variant="outline-primary"
                  onClick={handleEmailVerification}
                  disabled={!isEmailValid || !isEmailEditable}
                >
                  메일 인증
                </DuplicateButton>
              </InputBlockFlex1>
              {email && !isEmailValid && (
                <ErrorSection isError>
                  올바른 이메일 형식이 아닙니다.
                </ErrorSection>
              )}
              <ErrorSection
                isError={emailError !== "인증 메일이 발송되었습니다."}
                isSuccess={emailError === "인증 메일이 발송되었습니다."}
              >
                {emailError}
              </ErrorSection>
            </Col>
            {showVerificationInput && (
              <Col>
                <InputBlockFlex1>
                  <input
                    type="text"
                    placeholder="인증 코드"
                    value={verificationCode}
                    onChange={handleVerificationCodeChange}
                    disabled={isVerificationComplete}
                  />
                  <DuplicateButton
                    variant="outline-success"
                    onClick={handleVerificationCodeSubmit}
                    disabled={!isVerified || isVerificationComplete}
                  >
                    인증 확인
                  </DuplicateButton>
                </InputBlockFlex1>
                {!isVerified && (
                  <ErrorSection isError>
                    6자리 숫자를 입력해주세요.
                  </ErrorSection>
                )}
                <ErrorSection
                  isError={codeError !== "이메일 인증이 완료되었습니다."}
                  isSuccess={codeError === "이메일 인증이 완료되었습니다."}
                >
                  {codeError}
                </ErrorSection>
                <ErrorSection isSuccess>{successMessage}</ErrorSection>
              </Col>
            )}
            <Col>
              <InputBlockFlex1>
                <input
                  type="text"
                  placeholder="닉네임"
                  value={nickname}
                  onChange={handleNicknameChange}
                />
                <DuplicateButton
                  variant="outline-warning"
                  onClick={handleNicknameCheck}
                  disabled={!validateNickname(nickname)}
                >
                  중복 확인
                </DuplicateButton>
              </InputBlockFlex1>
              <ErrorSection isError={!!nickNameError}>
                {nickNameError ||
                  (nickname &&
                    !validateNickname(nickname) &&
                    "닉네임은 1~12자의 영문, 숫자, 한글만 사용 가능합니다.")}
              </ErrorSection>
            </Col>
            <Col>
              <InputBlockFlex2>
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </InputBlockFlex2>
              <ErrorSection isError={!!passwordError}>
                {passwordError}
              </ErrorSection>
            </Col>
            <Col>
              <InputBlockFlex2>
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  value={repeatPassword}
                  onChange={handleRepeatPasswordChange}
                />
              </InputBlockFlex2>
              <ErrorSection isError={!!repeatPasswordError}>
                {repeatPasswordError}
              </ErrorSection>
            </Col>
            <SignupButton
              onClick={handleSubmit}
              disabled={!isSignupFormValid()}
            >
              회원가입
            </SignupButton>
          </>
        )}
      </Form>

      <Separator>
        <p>OR</p>
      </Separator>

      <GoogleButton onClick={() => requestLoginGoogle()}>
        {" "}
        <GrGoogle className="icon" size={35} />
        Sign in with Google
      </GoogleButton>
      <NaverButton onClick={() => requestLoginNaver()}>
        {" "}
        <SiNaver className="icon" size={30} />
        Sign in with Naver
      </NaverButton>
    </Container>
  );
};

export default AuthForm;
const Container = styled.div`
  /* border: 1px solid red; */
  max-width: 680px;
  width: 100%;
`;

const Links = styled.ul`
  list-style-type: none;
  width: 90%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  font-weight: bold;
  div {
    display: flex;
  }
  li {
    cursor: pointer;
    transition: 0.2s linear;
    color: ${({ active }) => (active ? "#0f132a" : "rgba(15, 19, 42, 0.6)")};
    &:hover {
      opacity: 1;
    }
    &:first-child {
      opacity: ${({ mode }) => (mode === "signin" ? "1" : "0.6")};
    }
    &:nth-child(2) {
      opacity: ${({ mode }) => (mode === "signup" ? "1" : "0.6")};
    }
    /* &:nth-child(3) {
      opacity: 0.6;
    } */
  }
`;
const Form = styled.form`
  width: 100%;
  max-width: 680px;
  margin: 40px auto 10px;
`;

const InputBlock = styled.div`
  margin: 20px auto;
  display: block;
  position: relative;
  input {
    display: block;
    width: 90%;
    max-width: 680px;
    height: 50px;
    margin: 0 auto;
    border-radius: 8px;
    border: none;
    background: #f8f9fa;
    color: rgba(15, 19, 42, 1);
    padding-left: 15px;
    font-size: 14px;
    &:focus,
    &:active {
      outline: none;
      color: rgba(15, 19, 42, 1);
    }
  }
  &.signup {
    input.repeat__password {
      opacity: 1;
      display: block;
    }
  }
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 10px 0;
`;

const InputBlockFlex1 = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  width: 90%;
  input {
    /* display: block; */
    flex-grow: 1; /* input이 남은 공간을 차지하게 함 */
    height: 50px;
    margin: 0;
    border-radius: 8px 0 0 8px;
    border: none;
    background: #f8f9fa;
    color: rgba(15, 19, 42, 1);
    padding-left: 15px;
    font-size: 14px;
    &:focus,
    &:active {
      outline: none;
      color: rgba(15, 19, 42, 1);
    }
  }
`;

const InputBlockFlex2 = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  width: 90%;
  input {
    /* display: block; */
    flex-grow: 1; /* input이 남은 공간을 차지하게 함 */
    height: 50px;
    margin: 0;
    border-radius: 8px;
    border: none;
    background: #f8f9fa;
    color: rgba(15, 19, 42, 1);
    padding-left: 15px;
    font-size: 14px;
    &:focus,
    &:active {
      outline: none;
      color: rgba(15, 19, 42, 1);
    }
  }
  &.signup {
    input.repeat__password {
      opacity: 1;
      display: block;
    }
  }
`;
const DuplicateButton = styled(Button)`
  /* 버튼의 고정된 너비 설정 */
  font-weight: bold;
  border-radius: 0 8px 8px 0;
  height: 50px;
  @media only screen and (max-width: 280px) {
    font-size: 9pt;
    padding: 4px 8px;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
    padding: 2px 8px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    width: 90px;
    font-size: 14px;
    padding: 6px 12px;
  }
  @media only screen and (min-width: 600px) {
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
const ErrorSection = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  font-size: 9pt;
  color: ${(props) =>
    props.isSuccess ? "green" : props.isError ? "red" : "gray"};
`;

const SigninButton = styled.button`
  background: #fd9800;
  color: white;
  display: block;
  width: 90%;
  max-width: 680px;
  height: 50px;
  border-radius: 8px;
  margin: 0 auto;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 15px 20px rgba(253, 152, 0, 0.15);
  transition: background-color 0.3s ease;
  &:hover {
    background: #e68a00;
  }
`;

const SignupButton = styled.button`
  background: ${(props) => (props.disabled ? "#dee2e6" : "#fd9800")};
  color: white;
  display: block;
  width: 90%;
  max-width: 680px;
  height: 50px;
  border-radius: 8px;
  margin: 0 auto;
  border: none;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
  font-size: 14px;
  box-shadow: ${(props) =>
    props.disabled ? "none" : "0 15px 20px rgba(253, 152, 0, 0.15)"};
  transition: background-color 0.3s ease;
  &:hover {
    background: ${(props) => (props.disabled ? "#dee2e6" : "#e68a00")};
  }
`;

const Separator = styled.div`
  margin: 30px auto 10px;
  text-align: center;
  height: 40px;
  position: relative;
  color: rgba(15, 19, 42, 0.4);
  font-size: 13px;
  width: 90%;
  max-width: 680px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 8px;
    background: rgba(15, 19, 42, 0.2);
    height: 1px;
    width: 45%;
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
`;

const GoogleButton = styled.button`
  background-color: #3f85f4;
  color: white;
  display: block;
  width: 90%;
  max-width: 680px;
  height: 50px;
  margin: 20px auto;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 15px 20px rgba(91, 144, 240, 0.25);
  transition: background-color 0.3s ease;
  .icon {
    margin-right: 8px;
    /* border-right: 1px solid #0f66f1; */
    padding-right: 8px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      /* border-right: 1px solid #6fa4f7; */
    }
  }
  &:hover {
    background-color: #2776f3;
  }
`;

const NaverButton = styled.button`
  background-color: #2ebd59;
  color: white;
  display: block;
  width: 90%;
  max-width: 680px;
  height: 50px;
  margin: 20px auto;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 15px 20px rgba(41, 168, 79, 0.25);
  .icon {
    margin-right: 8px;
    /* border-right: 1px solid #249446; */
    padding-right: 8px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 1px solid #4bd374;
    }
  }
  &:hover {
    background-color: #29a84f;
  }
`;
