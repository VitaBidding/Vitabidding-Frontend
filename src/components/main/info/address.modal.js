import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { EditAddress } from "../../../lib/request";
import { useDispatch } from "react-redux";
import {
  reduxExAddress,
  reduxFuAddress,
  reduxDeAddress,
  reduxZonecode,
} from "../../../redux/features/user/user.slice";
function AddressModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const [Zonecode, setZonecode] = useState("");
  const [FuAddress, setFuAddress] = useState("");
  const [ExAddress, setExAddress] = useState("");
  const [DeAddress, setDeAddress] = useState("");
  const [AddressError, setAddressError] = useState(false);

  const onChangeDeAddres = (e) => {
    setDeAddress(e.target.value);
  };

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

  const onclickChange = () => {
    EditAddress(Zonecode, FuAddress, ExAddress, DeAddress);
    dispatch(reduxExAddress(ExAddress));
    dispatch(reduxFuAddress(FuAddress));
    dispatch(reduxDeAddress(DeAddress));
    dispatch(reduxZonecode(Zonecode));
    handleClose();
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>주소 변경</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddressSection>
          <Form>
            <Form.Group>
              <Row>
                <Col md="5">
                  <Form.Control
                    className="address"
                    type="text"
                    placeholder="우편번호"
                    value={Zonecode}
                    disabled={true}
                  />
                </Col>
                <Col></Col>
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
          </Form>
        </AddressSection>
        <ButtonSection>
          <Button
            className="address-button"
            variant="outline-dark"
            onClick={handleClick}
          >
            주소찾기
          </Button>
          <Button
            className="button"
            variant="primary"
            disabled={!AddressError}
            onClick={() => onclickChange()}
          >
            변경하기
          </Button>
        </ButtonSection>
      </Modal.Body>
    </Modal>
  );
}

export default AddressModal;

const AddressSection = styled.div`
  .address {
    margin: 2px;
  }
`;
const ButtonSection = styled.div`
  margin: 5px 0;
  text-align: right;
  .address-button {
    margin: 0 10px;
  }
`;
