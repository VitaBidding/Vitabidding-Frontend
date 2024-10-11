import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Channelurl } from "../../../lib/request";
function WidgetModal({ show, handleClose, effect, seteffect }) {
  const [item, setItem] = useState({
    video_live_url: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const ChannelurlButton = () => {
    Channelurl(item)
      .then((res) => {
        seteffect(effect + 1);
        handleClose();
      })
      .catch((error) => {
        seteffect(effect + 1);
        handleClose();
      });
  };
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header style={{ height: "30px" }} closeButton>
        LIVE URL 입력
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-around">
        <Display>
          <VideoliveurlSection>
            <InputGroup>
              <Videoliveurlinput
                type="text"
                id="videoliveurl"
                name="video_live_url"
                value={item.video_live_url}
                onChange={handleInputChange}
                placeholder="https://www.youtube.com/watch?v=vitabidding"
              />
              <SubmitButton onClick={ChannelurlButton}>등록</SubmitButton>
            </InputGroup>
          </VideoliveurlSection>
        </Display>
      </Modal.Body>
    </Modal>
  );
}

export default WidgetModal;

const Display = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const VideoliveurlSection = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  font-size: 12pt;
  font-family: "KBO-Dia-Gothicmedium";
  color: black;
  width: 100%;
  /* align-items: flex-start; */
`;

const Videoliveurlinput = styled(Form.Control)`
  border-radius: 20px;
  border-width: 1px;
  padding: 5px 10px;
`;
const SubmitButton = styled(Button)`
  border-radius: 20px;
`;
