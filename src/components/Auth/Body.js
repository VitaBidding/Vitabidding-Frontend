import React, { useState } from "react";
import styled from "styled-components";
import { GrGoogle } from "react-icons/gr";
import { SiNaver } from "react-icons/si";
import {
  requestLoginGoogle,
  requestLoginNaver,
  requestLogin,
  requestSignup,
} from "../../lib/request";
import { Button } from "react-bootstrap";
import { requestNicknameCheck } from "../../lib/request";
const AuthForm = () => {
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [nickname, setnickname] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [nickNameError, setnickNameError] = useState(
    "한글,영어,특수문자를 사용하여 2~12글자로 입력해주세요."
  );
  const [userNicknameError, setUserNicknameError] = useState(true);
  const isSignup = mode === "signup";
  const onChangeUserNickname = (e) => {
    const userNicknameRegex =
      /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣|~!@#$%^&*()_+-=]{2,12}$/;
    if (userNicknameRegex.test(e.target.value)) setUserNicknameError(false);
    else setUserNicknameError(true);
    setnickname(e.target.value);
  };
  const handleModeChange = (newMode) => {
    setMode(newMode);
  };
  const handleReset = () => {
    setMode("signin"); // Reset 클릭 시 mode를 signin으로 설정
    setEmail(""); // email 필드 초기화
    setnickname("");
    setnickNameError("");
    setPassword(""); // password 필드 초기화
    setRepeatPassword(""); // repeat password 필드 초기화 // 모든 입력 필드 초기화
  };

  const handleCheck = async () => {
    const message = await requestNicknameCheck(nickname);
    setnickNameError(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 방지

    if (mode === "signin") {
      // 로그인 로직
      requestLogin({ email, password });
    } else if (mode === "signup") {
      // 회원가입 로직
      requestSignup({ email, nickname, password, repeatPassword });
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
        <InputBlock className={isSignup ? "signup" : ""}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBlock>
        {isSignup && (
          <Col>
            <InputBlockFlex>
              <input
                type="nickname"
                placeholder="Nickname"
                value={nickname}
                onChange={(e) => onChangeUserNickname(e)}
              />
              <DuplicateButton
                variant="outline-primary"
                onClick={() => handleCheck()}
                disabled={userNicknameError}
              >
                중복확인
              </DuplicateButton>
            </InputBlockFlex>
            <ErrorSection props={nickNameError}>{nickNameError}</ErrorSection>
          </Col>
        )}
        <InputBlock>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBlock>
        {isSignup && (
          <InputBlock>
            <input
              type="password"
              placeholder="Repeat password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </InputBlock>
        )}
        <SigninButton onClick={handleSubmit}>
          {isSignup ? "회원가입" : "로그인"}
        </SigninButton>
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
`;

const InputBlockFlex = styled.div`
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
    props.props === "이미 존재하는 닉네임입니다. 다른 닉네임을 입력해주세요."
      ? "red"
      : "green"};
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
