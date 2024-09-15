import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { EditNickname } from "../../../lib/request";
import { useDispatch } from "react-redux";
import { nick_name } from "../../../redux/features/user/user.slice";
function NicknameModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const [userNickname, setUserNickname] = useState("");
  const [userNicknameError, setUserNicknameError] = useState(true);

  const onChangeUserNickname = (e) => {
    const userNicknameRegex =
      /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣|~!@#$%^&*()_+-=]{2,12}$/;
    if (userNicknameRegex.test(e.target.value)) setUserNicknameError(false);
    else setUserNicknameError(true);
    setUserNickname(e.target.value);
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
          <Form.Control
            type="text"
            placeholder="변경할 닉네임 입력"
            value={userNickname}
            onChange={onChangeUserNickname}
          />
          {userNicknameError && (
            <Form.Text className="text-muted">
              한글,영어,특수문자를 사용하여 2~12글자로 입력해주세요.
            </Form.Text>
          )}
          {!userNicknameError && (
            <Form.Text className="text-muted">&nbsp;</Form.Text>
          )}
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
