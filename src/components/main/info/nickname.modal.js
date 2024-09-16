import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { requestNicknameCheck, EditNickname } from "../../../lib/request";
import { useDispatch } from "react-redux";
import { nick_name } from "../../../redux/features/user/user.slice";

function NicknameModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const [userNickname, setUserNickname] = useState("");
  const [userNicknameError, setUserNicknameError] = useState(true);
  const [nickNameError, setnickNameError] = useState("");
  const onChangeUserNickname = (e) => {
    const userNicknameRegex =
      /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣|~!@#$%^&*()_+-=]{2,12}$/;
    if (userNicknameRegex.test(e.target.value)) setUserNicknameError(false);
    else setUserNicknameError(true);
    setUserNickname(e.target.value);
  };

  const handleCheck = async () => {
    const message = await requestNicknameCheck(userNickname);
    setnickNameError(message);
  };

  const onclickChange = () => {
    EditNickname(userNickname);
    dispatch(nick_name(userNickname));
    handleClose();
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>닉네임 변경</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="변경할 닉네임 입력"
                value={userNickname}
                onChange={onChangeUserNickname}
              />
              <Button
                variant="outline-primary"
                className="button"
                onClick={() => handleCheck()}
                disabled={userNicknameError}
              >
                중복확인
              </Button>
            </InputGroup>
            <Seciton props={nickNameError}>{nickNameError}</Seciton>
            {userNicknameError && (
              <Seciton className="text-muted">
                한글,영어,특수문자를 사용하여 2~12글자로 입력해주세요.
              </Seciton>
            )}
            {!userNicknameError && (
              <Seciton className="text-muted">&nbsp;</Seciton>
            )}
          </Form.Group>
        </Form>
        &nbsp;
        <ButtonSection>
          <Button
            className="button"
            variant="primary"
            disabled={userNicknameError}
            onClick={() => onclickChange()}
          >
            변경하기
          </Button>
        </ButtonSection>
      </Modal.Body>
    </Modal>
  );
}

export default NicknameModal;

const ButtonSection = styled.div`
  margin: 5px 0;
  text-align: right;
`;
const Seciton = styled(Form.Text)`
  display: flex;
  font-size: 10pt;
  color: ${(props) =>
    props.props === "이미 존재하는 닉네임입니다. 다른 닉네임을 입력해주세요."
      ? "red"
      : "green"};
`;
