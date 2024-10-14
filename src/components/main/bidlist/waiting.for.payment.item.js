import React, { useState } from "react";
import styled from "styled-components";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useSelector } from "react-redux";
import {
  selectFuAddress,
  selectExAddress,
  selectDeAddress,
  selectZonecode,
  selectphone,
  selectreal_name,
} from "../../../redux/features/user/user.slice";
import { itempayment } from "../../../lib/request";
function WaitingForpaymentItem(el) {
  const { item } = el;
  const real_name = useSelector(selectreal_name);
  const phone = useSelector(selectphone);
  const Fu = useSelector(selectFuAddress);
  const Ex = useSelector(selectExAddress);
  const De = useSelector(selectDeAddress);
  const Zone = useSelector(selectZonecode);

  const [Recipient, setRecipient] = useState(real_name);
  const [userNameError, setUserNameError] = useState(false);
  // console.log("🚀 ~ file: WaitingForpaymentItem.js:26 ~ WaitingForpaymentItem ~ userNameError:", userNameError);

  const [contact, setcontact] = useState(phone);
  const [userPhoneError, setUserPhoneError] = useState(false);
  // console.log("🚀 ~ file: WaitingForpaymentItem.js:31 ~ WaitingForpaymentItem ~ userPhoneError:", userPhoneError);
  const [Zonecode, setZonecode] = useState(Zone);
  const [FuAddress, setFuAddress] = useState(Fu);
  const [ExAddress, setExAddress] = useState(Ex);
  const [DeAddress, setDeAddress] = useState(De);
  const [AddressError, setAddressError] = useState(false);
  // console.log("🚀 ~ file: WaitingForpaymentItem.js:36 ~ WaitingForpaymentItem ~ AddressError:", AddressError);
  const [selectedOption, setSelectedOption] = useState("default");

  const [itempaymentpoint, setitempaymentpoint] = useState(item.price * 0.9);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "default") {
      setAddressError(false);
      setUserNameError(false);
      setUserPhoneError(false);
      setFuAddress(Fu);
      setExAddress(Ex);
      setDeAddress(De);
      setZonecode(Zone);
      setRecipient(real_name);
      setcontact(phone);
    } else if (e.target.value === "recent") {
      setAddressError(false);
      setUserNameError(false);
      setUserPhoneError(false);
    } else if (e.target.value === "new") {
      setAddressError(true);
      setUserNameError(true);
      setUserPhoneError(true);
      setFuAddress("");
      setExAddress("");
      setDeAddress("");
      setZonecode("");
      setRecipient("");
      setcontact("");
    }
  };
  const onChangeUserName = (e) => {
    const userNameRegex = /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}$/;
    if (!e.target.value || userNameRegex.test(e.target.value))
      setUserNameError(false);
    else setUserNameError(true);
    setRecipient(e.target.value);
  };

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
    setAddressError(false);
  };
  const handleClick = () => {
    open({
      onComplete: handleComplete,
      popupTitle: "우편번호 검색",
    });
  };
  const onChangeUserPhone = (e) => {
    const userPhoneRegex = /^[0-9]{11}$/;
    if (userPhoneRegex.test(e.target.value)) setUserPhoneError(false);
    else setUserPhoneError(true);
    setcontact(e.target.value);
  };

  function formatNumberWithComma(value) {
    if (value === null || value === undefined) {
      return "";
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Item>
      <Colfirst>
        <ItemThumbnailSection>
          <ItemThumbnail src={item.Thumbnail} alt="Thumbnail" />
        </ItemThumbnailSection>
        <ColRowSectionFirst>
          <ItemNameSection>
            <ItemTite>{item.title}</ItemTite>
            <Itemcategory>{item.category}</Itemcategory>
          </ItemNameSection>
          <ItemCreatorSection>
            <ItemCreator>{item.creator}</ItemCreator>
          </ItemCreatorSection>
          <ItemPriceSection>
            <ItemPriceLabel>낙찰포인트</ItemPriceLabel>
            <ItemPrice>{formatNumberWithComma(item.price)}</ItemPrice>
          </ItemPriceSection>
        </ColRowSectionFirst>
      </Colfirst>
      <Colsecond>
        <ContainerPadding>
          <Form>
            <CheckSection>
              <FormCheck
                type="radio"
                name="addressOption"
                label="기본 배송지"
                value="default"
                checked={selectedOption === "default"}
                onChange={handleOptionChange}
              />
              <FormCheck
                type="radio"
                name="addressOption"
                label="최근 배송지"
                value="recent"
                checked={selectedOption === "recent"}
                onChange={handleOptionChange}
              />
              <FormCheck
                type="radio"
                name="addressOption"
                label="신규 배송지"
                value="new"
                checked={selectedOption === "new"}
                onChange={handleOptionChange}
              />
            </CheckSection>
            {selectedOption === "default" && (
              <div>
                <p>기본 배송지 정보:</p>
                <DefRow>
                  <Col>{Recipient}</Col>
                </DefRow>
                <DefRow>
                  <Col>{contact}</Col>
                </DefRow>
                <DefRow>
                  <Col>
                    ({Zonecode}) {FuAddress}
                  </Col>
                </DefRow>
                <DefRow>
                  <Col>{DeAddress}</Col>
                  <Col>{ExAddress}</Col>
                </DefRow>
              </div>
            )}
            {selectedOption === "recent" && (
              <div>
                <p>최근 배송지 정보:</p>
              </div>
            )}
            {selectedOption === "new" && (
              <NewSection>
                <p>신규 배송지 정보:</p>
                <Form.Group>
                  <NewRow>
                    <Col>
                      <FormControl
                        type="name"
                        placeholder="이름"
                        value={Recipient}
                        onChange={onChangeUserName}
                      />
                      {userNameError && (
                        <Form.Text className="text-muted">
                          한글이나 영어만 사용하여 2~16글자로 입력해주세요.
                        </Form.Text>
                      )}
                    </Col>
                  </NewRow>
                  <NewRow>
                    <Col>
                      <FormControl
                        type="text"
                        placeholder="연락처"
                        value={contact}
                        onChange={onChangeUserPhone}
                      />
                      {userPhoneError && (
                        <Form.Text className="text-muted">
                          총 11자리의 숫자를 입력해주세요.
                        </Form.Text>
                      )}
                    </Col>
                  </NewRow>
                  <NewRow>
                    <Col>
                      <FormControl
                        className="address"
                        type="text"
                        placeholder="우편번호"
                        value={Zonecode}
                        disabled={true}
                      />
                    </Col>
                    <Col>
                      <AddressButton
                        className="address-button"
                        variant="outline-dark"
                        onClick={handleClick}
                      >
                        주소찾기
                      </AddressButton>
                    </Col>
                  </NewRow>
                  <NewRow>
                    <Col>
                      <FormControl
                        className="address"
                        type="text"
                        placeholder="주소"
                        value={FuAddress}
                        disabled={true}
                      />
                    </Col>
                  </NewRow>
                  <NewRow>
                    <Col>
                      <FormControl
                        className="address"
                        type="text"
                        placeholder="상세주소"
                        value={DeAddress}
                        onChange={onChangeDeAddres}
                      />
                    </Col>
                    <Col>
                      <FormControl
                        className="address"
                        type="text"
                        placeholder="참고항목"
                        value={ExAddress}
                        disabled={true}
                      />
                    </Col>
                  </NewRow>
                </Form.Group>
              </NewSection>
            )}
          </Form>
        </ContainerPadding>
      </Colsecond>
      <Colthird>
        <FormulaSection>
          <FirstSection>
            <FormulaPriceLabel>낙찰포인트</FormulaPriceLabel>
            <FormulaPrice>{formatNumberWithComma(item.price)}</FormulaPrice>
          </FirstSection>
          <Minus>-</Minus>
          <SecondSection>
            <FormuaBidAmountLabel>입찰금</FormuaBidAmountLabel>
            <FormuaBidAmount>
              {formatNumberWithComma(Number(item.price) * 0.1)}
            </FormuaBidAmount>
          </SecondSection>
        </FormulaSection>

        <TotalPointSection>
          <TotalPointName>결제포인트</TotalPointName>
          <TotalPointamount>
            {formatNumberWithComma(Number(item.price) * 0.9)} p
          </TotalPointamount>
        </TotalPointSection>
        <PaymentButton
          disabled={AddressError || userNameError || userPhoneError}
          onClick={() =>
            itempayment({
              Recipient,
              contact,
              Zonecode,
              FuAddress,
              ExAddress,
              DeAddress,
              itempaymentpoint,
            })
          }
        >
          결제하기
        </PaymentButton>
      </Colthird>
    </Item>
  );
}

export default WaitingForpaymentItem;

const Item = styled.div`
  /* background-color: #f1f1f1; */
  margin-bottom: 20px;
  border-radius: 10px;
  /* 그림자 스타일 설정 */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  @media only screen and (max-width: 360px) {
    width: 260px;
    padding: 2px;
    font-size: 10px;
  }
  @media only screen and (min-width: 360px) {
    width: 340px;
    padding: 2px;
    font-size: 10px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    width: 500px;
    padding: 5px;
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    width: 700px;
    padding: 10px;
    font-size: 14px;
  }
  @media only screen and (min-width: 992px) {
    width: 900px;
    padding: 10px;
    font-size: 16px;
  }
  @media only screen and (min-width: 1200px) {
    width: 900px;
    padding: 10px;
  }
`;
const Colfirst = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Colsecond = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: 1px solid black;

  @media only screen and (max-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Colthird = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* border-bottom: 1px solid black; */
  @media only screen and (max-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 360px) {
    padding: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemThumbnailSection = styled.div`
  width: 130px;
  margin: 10px;
`;
const ItemThumbnail = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;
const ColRowSectionFirst = styled.div`
  display: flex;
  @media only screen and (max-width: 360px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 360px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemNameSection = styled.div`
  @media only screen and (max-width: 360px) {
    width: 240px;
  }
  @media only screen and (min-width: 360px) {
    width: 320px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    width: 300px;
  }
  @media only screen and (min-width: 768px) {
    width: 300px;
    border-right: 1px solid lightgray;
  }
  @media only screen and (min-width: 992px) {
    width: 400px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemTite = styled.div`
  color: black;

  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Itemcategory = styled.div`
  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemCreatorSection = styled.div`
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
    width: 140px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemCreator = styled.div`
  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemPriceSection = styled.div`
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    border-left: 1px solid lightgray;
    width: 100px;
  }
  @media only screen and (min-width: 992px) {
    width: 140px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemPriceLabel = styled.div`
  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ItemPrice = styled.div`
  color: black;
  @media only screen and (max-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const ContainerPadding = styled(Container)`
  @media only screen and (max-width: 360px) {
    padding: 0 5px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 0 12px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const CheckSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
`;

const FormCheck = styled(Form.Check)`
  @media only screen and (max-width: 360px) {
    margin: 5px 5px 5px 0;
  }
  @media only screen and (min-width: 360px) {
    margin: 5px 5px 5px 0;
  }
  @media only screen and (min-width: 420px) {
    margin: 10px 10px 10px 0;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const FormControl = styled(Form.Control)`
  @media only screen and (max-width: 360px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const AddressButton = styled(Button)`
  @media only screen and (max-width: 360px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const FormulaSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid lightgray;
  height: 60px;

  @media only screen and (max-width: 360px) {
    width: 140px;
    margin: 0 0 10px 0;
  }
  @media only screen and (min-width: 360px) {
    width: 140px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 250px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const FirstSection = styled.div`
  @media only screen and (max-width: 360px) {
    margin: 0px 10px 0px 10px;
  }
  @media only screen and (min-width: 360px) {
    margin: 0px 10px 0px 10px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px 20px 10px 20px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const FormulaPriceLabel = styled.div``;
const FormulaPrice = styled.div``;
const Minus = styled.div`
  font-size: 20px;
`;
const SecondSection = styled.div`
  @media only screen and (max-width: 360px) {
    margin: 0px 10px 0px 10px;
  }
  @media only screen and (min-width: 360px) {
    margin: 0px 10px 0px 10px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px 20px 10px 20px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const FormuaBidAmountLabel = styled.div``;
const FormuaBidAmount = styled.div``;
const TotalPointSection = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  height: 60px;

  /* border-left: 1px solid gray; */
  @media only screen and (max-width: 360px) {
    flex-direction: column;
    width: 80px;
    margin: 0 0 10px 10px;
  }
  @media only screen and (min-width: 360px) {
    flex-direction: column;
    width: 80px;
    margin: 0 0 0 10px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    width: 170px;
    margin: 0;
    padding: 0;
  }
  @media only screen and (min-width: 768px) {
    width: 180px;
  }
  @media only screen and (min-width: 992px) {
    width: 220px;
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const TotalPointName = styled.div`
  color: black;
  @media only screen and (max-width: 360px) {
    margin: 0;
  }
  @media only screen and (min-width: 360px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    margin: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const TotalPointamount = styled.div`
  @media only screen and (max-width: 360px) {
    margin: 0;
  }
  @media only screen and (min-width: 360px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    margin: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  color: black;
  font-weight: bolder;
`;

const PaymentButton = styled(Button)`
  height: 65px;
`;

const NewSection = styled.div``;

const NewRow = styled(Row)`
  /* border: 1px solid red; */
  margin: 3px;
`;

const DefRow = styled(Row)`
  /* border: 1px solid red; */
  margin: 3px;
  color: black;
`;
