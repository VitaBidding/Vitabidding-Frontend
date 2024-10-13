import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
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

  const [checkItems, setCheckItems] = useState([]);
  const [buttonColor, setButtonColor] = useState(false);

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

  function onclickURLTermsV1() {
    window.open(
      `${process.env.REACT_APP_MAIN_CLIENT_URL}/terms/detail/viewer/usegepolicy`
    );
  }

  function onclickURLTermsV2() {
    window.open(
      `${process.env.REACT_APP_MAIN_CLIENT_URL}/terms/detail/viewer/personalInformation`
    );
  }

  const data = [
    {
      id: 0,
      column: "usage_policy",
      click: onclickURLTermsV1,
      title: "이용약관 동의 (필수)",
    },
    {
      id: 1,
      column: "personal_information",
      click: onclickURLTermsV2,
      title: "개인정보 수집 및 이용 동의 (필수)",
    },
    // {id: 2, title: '개인정보 제3자 제공 동의(필수)',body:''},
    // {id: 3, title: '개인정보 개인정보 처리 위탁 동의(필수)',body:''},
    // {id: 4, title: '개인정보 수집 및 이용 동의(선택)',body:''},
  ];

  const handleSingleCheck = (checked, column) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, column]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== column));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const columnArray = [];
      data.forEach((el) => columnArray.push(el.column));
      setCheckItems(columnArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  useEffect(() => {
    if (
      checkItems.includes("usage_policy") &&
      checkItems.includes("personal_information")
      //  && checkItems.includes(2)
      //  && checkItems.includes(3)
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [checkItems]);
  return (
    <Section>
      <Form className="form">
        <Form.Label className="Label">추가정보입력</Form.Label>

        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="이름"
            value={userName}
            onChange={onChangeUserName}
          />
          {userNameError && (
            <TextSection>
              한글이나 영어만 사용하여 2~16글자로 입력해주세요.
            </TextSection>
          )}
          {!userNameError && <TextSection>&nbsp;</TextSection>}
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPhone">
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
            <TextSection>총 11자리의 숫자를 입력해주세요.</TextSection>
          )}
          {!userPhoneError && <TextSection>&nbsp;</TextSection>}
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPhone">
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
            <TextSection>인증번호 6자리의 숫자를 입력해주세요.</TextSection>
          )}
          {!CertificationNumberError && <TextSection>&nbsp;</TextSection>}
          {timer && !CertificationSuccess && (
            <Timer className="timer">
              {min} 분 {sec} 초
            </Timer>
          )}
        </Form.Group>
        <Form.Label className="SMSLabel">
          {CertificationSuccess && (
            <TextSection>SMS 인증 완료 되었습니다.</TextSection>
          )}
          {!CertificationSuccess && <TextSection>&nbsp;</TextSection>}
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
          <TextSection>&nbsp;</TextSection>
        </Form.Label>
        <Form.Group>
          <Row>
            <StyledTable>
              <thead>
                <tr>
                  <th className="second-row">
                    <input
                      type="checkbox"
                      className="select"
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                      checked={checkItems.length === data.length ? true : false}
                    />
                    이용약관 전체동의
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((data, key) => (
                  <tr key={key}>
                    <td>
                      <input
                        type="checkbox"
                        className={`select`}
                        onChange={(e) =>
                          handleSingleCheck(e.target.checked, data.column)
                        }
                        // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                        checked={
                          checkItems.includes(data.column) ? true : false
                        }
                      />
                      {data.title}
                      <button onClick={data.click}>
                        약관보기
                        <BiChevronRight />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </Row>
        </Form.Group>
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
        state={
          !userNameError && CertificationSuccess && AddressError && buttonColor
        }
        disabled={
          !(
            !userNameError &&
            CertificationSuccess &&
            AddressError &&
            !buttonColor
          )
        }
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
  .SMSLabel {
    margin: 0 0 20px;

    border-bottom: 2px solid lightgray;
    font-family: "NotoSansKR-Bold";
    color: black;

    @media only screen and (max-width: 280px) {
      font-size: 11pt;
      width: 250px;
    }
    @media only screen and (min-width: 280px) {
      font-size: 11pt;
      width: 250px;
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

const StyledTable = styled.table`
  /* border: 1px solid red; */
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  input[type="checkbox"] {
    transform: scale(1.5);
  }
  thead {
    tr {
      /* border: 2px solid red; */
      padding: 10px 0 10px;

      th {
        padding: 10px 15px;
        background-color: #888;
        color: #ffffff;
        width: 600px;
      }
    }
  }
  tbody {
    padding: 10px 0 10px;

    tr {
      /* border: 1px solid red; */
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      td {
        width: 600px;
        /* border: 1px solid red; */
        padding: 7px 15px;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .select {
    margin: 0 15px 0 0;
  }
  .second-row {
  }
  .third-row {
  }
  button {
    float: right;
    background-color: white;
    margin: 0;
    border: 0px solid black;
    color: gray;
  }
`;

const Nextbutton = styled.button`
  /* border: 2px solid black; */

  color: ${(props) => (props.state ? "white" : "gray")};
  background: ${(props) => (props.state ? "#fd9800" : "lightgrey")};
  display: block;
  width: 100%;
  max-width: 680px;
  height: 50px;
  border-radius: 8px;
  margin: 0 auto;
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
