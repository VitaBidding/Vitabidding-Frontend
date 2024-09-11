import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
function TrackingModal({ show, handleClose }) {
  const transportcompany = [
    "CJ대한통운",
    "한진택배",
    "롯데택배",
    "우체국택배",
    "로젠택배",
    "일양로지스",
    "한덱스",
    "대신택배",
    "경동택배",
    "합동택배",
    "CU 편의점택배",
    "GS Postbox 택배",
    "한의사랑택배",
    "천일택배",
    "건영택배",
    "굿투럭",
    "애니트랙",
    "SLX택배",
    "우리택배(구호남택배)",
    "우리한방택배",
    "농협택배",
    "홈픽택배",
    "IK물류",
    "성훈물류",
    "용마로지스",
    "원더스퀵",
    "로지스밸리택배",
    "컬리넥스트마일",
    "풀앳홈",
    "삼성전자물류",
    "큐런택배",
    "두발히어로",
    "위니아딤채",
    "지니고 당일배송",
    "오늘의픽업",
    "로지스밸리",
    "한샘서비스원 택배",
    "NDEX KOREA",
    "도도플렉스(dodoflex)",
    "LG전자(판토스)",
    "부릉",
    "1004홈",
    "썬더히어로",
    "(주)팀프레시",
    "롯데칠성",
    "핑퐁",
    "발렉스 특수물류",
    "엔티엘피스",
    "GTS로지스",
    "로지스팟",
    "홈픽 오늘도착",
    "로지스파트너",
    "딜리래빗",
    "지오피",
    "에이치케이홀딩스",
    "HTNS",
    "케이제이티",
    "더바오",
    "라스트마일",
    "오늘회 러쉬",
    "탱고앤고",
    "투데이",
    "현대글로비스",
    "ARGO",
    "자이언트",
    "유피로지스",
    "우진인터로지스",
    "삼다수 가정배송",
    "와이드테크",
    "위니온로지스",
    "딜리박스",
    "이스트라",
  ];
  const [item, setItem] = useState({
    transportcompany: "",
    trackingNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handlepriceChange = (event) => {
    const rawValue = event.target.value;
    const numericValue = rawValue.replace(/\D/g, ""); // 숫자 이외의 문자 제거
    const formattedValue = onlyNumber(numericValue);
    setItem((prevItem) => ({ ...prevItem, trackingNumber: formattedValue }));
  };
  const onlyNumber = (value) => {
    const parts = value.split(".");
    return parts;
  };
  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header style={{ height: "30px" }} closeButton>
        운송장 번호 입력
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-around">
        <Display>
          <TrackingSection>
            <TrackingComponylabel htmlFor="transportcompany">
              택배사 선택
            </TrackingComponylabel>
            <TrackingComponycontents>
              <select
                id="transportcompany"
                name="transportcompany"
                value={item.transportcompany}
                onChange={handleInputChange}
                style={{
                  width: "200px",
                  height: "30px",
                  borderRadius: "10px",
                  padding: "0 5px",
                  color: item.transportcompany === "" ? "gray" : "inherit",
                }}
              >
                <option value="" disabled hidden>
                  택배사를 선택하세요
                </option>
                {transportcompany.map((transportcompany) => (
                  <option
                    key={transportcompany}
                    value={transportcompany}
                    style={{ color: "black" }}
                  >
                    {transportcompany}
                  </option>
                ))}
              </select>
            </TrackingComponycontents>
            <TrackingNumberlabel>운송장 번호 입력</TrackingNumberlabel>
            <TrackingNumbercontens>
              <Priceinput
                type="text"
                id="price"
                name="price"
                value={item.trackingNumber}
                onChange={handlepriceChange}
                placeholder="번호를 입력해주세요"
                style={{
                  width: "200px",
                  height: "30px",
                  borderRadius: "10px",
                  borderWidth: "1px",
                  padding: "10px",
                }}
              />
            </TrackingNumbercontens>
          </TrackingSection>
          <SubmitButton variant="info">입력</SubmitButton>
        </Display>
      </Modal.Body>
    </Modal>
  );
}

export default TrackingModal;

const Display = styled.div`
  display: flex;
  flex-direction: column;
`;
const TrackingSection = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  font-size: 12pt;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  /* align-items: flex-start; */
`;
const TrackingComponylabel = styled.label`
  /* margin: 10px; */
`;
const TrackingNumberlabel = styled.label`
  /* margin: 10px; */
`;
const TrackingComponycontents = styled.div`
  margin: 10px;
`;
const TrackingNumbercontens = styled.div`
  margin: 10px;
`;
const Priceinput = styled.input``;
const SubmitButton = styled(Button)`
  margin: 10px 10px 10px 150px;
  width: 58px;
`;
