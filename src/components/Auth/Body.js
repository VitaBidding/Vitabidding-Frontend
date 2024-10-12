import React, { useState } from "react";
import styled from "styled-components";
import { GrGoogle } from "react-icons/gr";
import { SiNaver } from "react-icons/si";
import {
  requestLoginGoogle,
  requestLoginNaver,
  requestLogin,
} from "../../lib/request";

const AuthForm = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 방지

    requestLogin({ email, password });
  };

  return (
    <Container>
      <Form>
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
    background: rgba(15, 19, 42, 0.1);
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
