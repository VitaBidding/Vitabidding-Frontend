import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { BsCamera } from "react-icons/bs";
import ValidationModal from "./validation.modal";
import SuccessModal from "./success.modal";
import "./react-datepicker.css";
const EnrollmentPageComponent = () => {
  //반응형 넓이설정
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const categories = [
    "디지털기기",
    "가구/인테리어",
    "도서",
    "의류",
    "뷰티/미용",
    "스포츠/레저",
    "티켓/교환권",
    "식품",
    "취미/게임/음반",
    "식물",
  ];

  const CurrentTime = new Date();
  // axios에 실어줄 데이터
  const [item, setItem] = useState({
    category: "",
    item_name: "",
    detailed_description: "",
    starting_price: "",
    thumbnail: null,
    start_day: null,
    start_time: null, // 현재 시간 기준으로 설정
  });

  // 유효성검사
  const [show, setShow] = useState(false);
  const [message, setmesseage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function validation() {
    if (item.start_day === null) {
      setmesseage("경매 날짜를 선택해 주세요");
      handleShow();
    } else if (item.start_time === null) {
      setmesseage("경매 시간를 선택해 주세요");
      handleShow();
    } else if (item.category === "") {
      setmesseage("카테고리를 선택해 주세요");
      handleShow();
    } else if (item.item_name === "") {
      setmesseage("제품명을 입력해 주세요");
      handleShow();
    } else if (item.starting_price === "") {
      setmesseage("경매 시작 금액를 입력해 주세요");
      handleShow();
    } else if (item.detailed_description === "") {
      setmesseage("상세설명을 입력해 주세요");
      handleShow();
    } else if (item.thumbnail === null) {
      setmesseage("썸네일을 올려 주세요");
      handleShow();
    } else {
      handleSubmit();
    }
  }

  // aixos
  const [Thumbnail, setThumbnail] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [enrollmentSuccess, setenrollmentSuccess] = useState(false);
  const SuccessClose = () => {
    setenrollmentSuccess(false);
    setItem({
      category: "",
      item_name: "",
      detailed_description: "",
      starting_price: "",
      thumbnail: null,
      start_day: null,
      start_time: null,
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };
  const SuccessShow = () => setenrollmentSuccess(true);
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("thumbnail", selectedFile);
    formData.append("item", JSON.stringify(item));
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/creator/products/new`,
        formData,
        { withCredentials: true }
      )
      .then((response) => {
        setmesseage(response.data.message);
        SuccessShow();
      })
      .catch((error) => {
        setmesseage(error.data.message);
        handleShow();
      });
  };
  // console.log("🚀 ~ file: enrollmentpagecomponent.js:38 ~ EnrollmentPageComponent ~ item:", item);

  // 데이터 변경함수
  const [koreanCurrency, setkoreanCurrency] = useState("포인트");
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setItem((prevItem) => ({ ...prevItem, [name]: value }));
    if (name === "starting_price") {
    }
  };
  // 날짜 관련 함수
  const yesterday = new Date(CurrentTime); // 현재 날짜를 복사하여 새로운 Date 객체 생성
  yesterday.setDate(CurrentTime.getDate() - 1); // 하루를 빼줌
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    if (date) {
      if (date < yesterday) {
        return;
      } else {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        setItem((prevItem) => ({ ...prevItem, start_day: formattedDate }));
        setSelectedDate(date);
      }
    }
  };
  const handleTimeChange = (time) => {
    if (time) {
      const hours = time.getHours().toString().padStart(2, "0");
      const minutes = time.getMinutes().toString().padStart(2, "0");
      const formattedTime = `${hours}:${minutes}`;
      setSelectedTime(time);
      setItem((prevItem) => ({ ...prevItem, start_time: formattedTime }));
    }
  };
  const [currentTime, setcurrentTime] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/auth/timechk`, {
        withCredentials: true,
      })
      .then((res) => {
        setcurrentTime(res.data.currentTime);
      })
      .catch((err) => {});
  }, []);

  const getMaxDate = () => {
    const today = new Date(`${currentTime}`);
    today.setFullYear(today.getFullYear() + 1); // 1년 이후의 날짜를 얻습니다.
    return today;
  };

  // 숫자를 한글로 변환하는 함수
  function numberToKorean(num) {
    if (num === "") return "";
    num = parseInt((num + "").replace(/[^0-9]/g, ""), 10) + ""; // 숫자/문자/돈 을 숫자만 있는 문자열로 변환
    if (num === "0") return "영";
    const number = ["영", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
    const unit = ["", "만", "억", "조"];
    const smallUnit = ["천", "백", "십", ""];
    const result = []; //변환된 값을 저장할 배열
    const unitCnt = Math.ceil(num.length / 4); //단위 갯수. 숫자 10000은 일단위와 만단위 2개이다.
    num = num.padStart(unitCnt * 4, "0"); //4자리 값이 되도록 0을 채운다
    const regexp = /[\w\W]{4}/g; //4자리 단위로 숫자 분리
    const array = num.match(regexp);
    //낮은 자릿수에서 높은 자릿수 순으로 값을 만든다(그래야 자릿수 계산이 편하다)
    for (let i = array.length - 1, unitCnt = 0; i >= 0; i--, unitCnt++) {
      const hanValue = _makeHan(array[i]); //한글로 변환된 숫자
      if (hanValue === "")
        //값이 없을땐 해당 단위의 값이 모두 0이란 뜻.
        continue;
      result.unshift(hanValue + unit[unitCnt]); //unshift는 항상 배열의 앞에 넣는다.
    }
    //여기로 들어오는 값은 무조건 네자리이다. 1234 -> 일천이백삼십사
    function _makeHan(text) {
      let str = "";
      for (let i = 0; i < text.length; i++) {
        const num = text[i];
        if (num === "0")
          //0은 읽지 않는다
          continue;
        str += number[num] + smallUnit[i];
      }
      return str;
    }
    return result.join("");
  }

  const handlepriceChange = (event) => {
    const rawValue = event.target.value;
    const numericValue = rawValue.replace(/\D/g, ""); // 숫자 이외의 문자 제거
    const formattedValue = addCommas(numericValue);
    setItem((prevItem) => ({ ...prevItem, starting_price: formattedValue }));
    setkoreanCurrency(numberToKorean(rawValue) + "포인트");
  };

  const addCommas = (value) => {
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  // 썸네일 관련 함수

  // console.log("🚀 ~ file: EnrollmentPageComponent.js:173 ~ EnrollmentPageComponent ~ selectedFile:", selectedFile);
  const handleThumbnailChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const formData = new FormData();
    formData.append("thumbnail", selectedFile);
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnail(reader.result);
    };

    setItem((prevItem) => ({ ...prevItem, thumbnail: formData }));
    reader.readAsDataURL(imageFile);
  };

  return (
    <Wrapper width={windowWidth * 0.95}>
      <SuccessModal
        show={enrollmentSuccess}
        handleClose={SuccessClose}
        message={message}
      />
      <ValidationModal
        show={show}
        handleClose={handleClose}
        message={message}
      />
      <Title>경매 물품 등록</Title>
      <Form onSubmit={handleSubmit}>
        <ThumbnailSection>
          <Thumbnaillabel htmlFor="thumbnail">썸네일 사진</Thumbnaillabel>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            accept="image/jpeg,image/png"
            onChange={handleThumbnailChange}
            style={{ display: "none" }}
          />
          {!item.thumbnail && (
            <Thumbnaillabelno htmlFor="thumbnail">
              <BsCamera style={{ width: "50px", height: "50px" }} />
              No Image
            </Thumbnaillabelno>
          )}
          {item.thumbnail && (
            <Thumbnaillabelfor htmlFor="thumbnail">
              <ThumbnailWrapper>
                <Thumbnailimg src={Thumbnail} alt="" />
              </ThumbnailWrapper>
            </Thumbnaillabelfor>
          )}
        </ThumbnailSection>
        <TimeSection>
          <Timelabel htmlFor="start_time">경매 시작 시간</Timelabel>
          <Timecontents>
            <div>
              <StyledDatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yy년 MM월 dd일"
                minDate={CurrentTime}
                placeholderText="날짜를 선택하세요"
                maxDate={getMaxDate()}
                autoComplete="off" // 자동 완성 기능 비활성화 (숫자 입력 방지)
                onKeyDown={(e) => e.preventDefault()} // 키 입력 막기
                popperPlacement="auto"
                showPopperArrow={false} /* 화살표 숨기기 (필요한 경우) */
              />
            </div>
            <div>
              <StyledDatePicker2
                selected={selectedTime}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="시간를 선택하세요"
                autoComplete="off" // 자동 완성 기능 비활성화 (숫자 입력 방지)
                onKeyDown={(e) => e.preventDefault()} // 키 입력 막기
                popperPlacement="auto"
                showPopperArrow={false} /* 화살표 숨기기 (필요한 경우) */
              />
            </div>
          </Timecontents>
        </TimeSection>
        <CategorySection>
          <Categorylabel htmlFor="category">카테고리</Categorylabel>
          <Categorycontents>
            <select
              id="category"
              name="category"
              value={item.category}
              onChange={handleInputChange}
              style={{
                height: "30px",
                borderRadius: "10px",
                padding: "0 5px",
                color: item.category === "" ? "gray" : "inherit",
              }}
            >
              <option value="" disabled hidden>
                카테고리를 선택하세요
              </option>
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  style={{ color: "black" }}
                >
                  {category}
                </option>
              ))}
            </select>
          </Categorycontents>
        </CategorySection>
        <PriceSection>
          <Pricelabel htmlFor="starting_price">경매 시작 금액</Pricelabel>
          <PriceContents>
            <div>
              <Priceinput
                type="text"
                id="starting_price"
                name="starting_price"
                value={item.starting_price}
                onChange={handlepriceChange}
                placeholder="숫자만 입력하세요"
              />
              포인트
            </div>
            {item.starting_price && (
              <KoreanCurrency>{koreanCurrency}</KoreanCurrency>
            )}
          </PriceContents>
        </PriceSection>
        <NameSection>
          <Namelabel htmlFor="item_name">제품이름</Namelabel>
          <NameInput
            type="text"
            id="item_name"
            name="item_name"
            value={item.item_name}
            onChange={handleInputChange}
            placeholder="제품명을 입력하세요"
          />
        </NameSection>
        <DescriptionSection>
          <Descriptionlabel htmlFor="detailed_description">
            상세설명
          </Descriptionlabel>
          <Descriptiontextarea
            id="detailed_description"
            name="detailed_description"
            value={item.detailed_description}
            placeholder={
              "내용을 입력해주세요\nex)\nSS급, 진품 여부, 직접 제작\n물품에 대한 설명을 해주세요!"
            }
            onChange={handleInputChange}
          />
        </DescriptionSection>
        <SubmitButton onClick={() => validation()}>등록</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default EnrollmentPageComponent;

const Wrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  font-weight: bold;

  @media only screen and (max-width: 280px) {
    width: ${(props) => props.width}px;
  }
  @media only screen and (min-width: 280px) {
    width: ${(props) => props.width}px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 95%;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Form = styled.form`
  border: 1px solid red;
  /* width: 650px; */

  @media only screen and (max-width: 280px) {
    width: 100%;
  }
  @media only screen and (min-width: 280px) {
    width: 100%;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
//타이틀
const Title = styled.div`
  font-family: "KBO-Dia-Gothic_bold";
  font-size: 20pt;
  font-weight: bolder;
  color: darkslateblue;
  height: 50px;

  @media only screen and (max-width: 280px) {
    margin: 0 0 10px 0;
  }
  @media only screen and (min-width: 280px) {
    margin: 0 0 10px 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    margin: 20px;
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
//경매시작시간
const TimeSection = styled.div`
  /* border: 1px solid black; */
  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  margin: 0 0 10px 0;
  @media only screen and (max-width: 280px) {
    font-size: 11pt;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  @media only screen and (min-width: 280px) {
    font-size: 11pt;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 12pt;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Timelabel = styled.label`
  /* border: 1px solid blue; */

  @media only screen and (max-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 360px) {
  }

  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
    padding: 0px;
    margin: 0 0 0 50px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Timecontents = styled.div`
  /* border: 1px solid blue; */
  display: flex;
`;

const StyledDatePicker = styled(DatePicker)`
  text-align: center;
  border-radius: 10px;
  /* DatePicker 화살표 숨기기 */

  @media only screen and (max-width: 280px) {
    width: 125px;
  }
  @media only screen and (min-width: 280px) {
    width: 135px;
  }
  @media only screen and (min-width: 360px) {
    width: 175px;
  }
  @media only screen and (min-width: 420px) {
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
const StyledDatePicker2 = styled(DatePicker)`
  margin: 0 5px;
  text-align: center;
  border-radius: 10px;

  @media only screen and (max-width: 280px) {
    width: 130px;
  }
  @media only screen and (min-width: 280px) {
    width: 140px;
  }
  @media only screen and (min-width: 360px) {
    width: 180px;
  }
  @media only screen and (min-width: 420px) {
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
  .react-datepicker__time-list {
    list-style: none;
    margin: 0;
    height: calc(195px + 1.7rem / 2);
    overflow-y: scroll;
    padding-right: 0;
    padding-left: 0;
    width: 100%;
    box-sizing: content-box;
    &:hover {
      background: #fd9800;
    }
  }
`;
//카테고리
const CategorySection = styled.div`
  /* border: 1px solid black; */

  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  margin: 0 0 10px 0;
  @media only screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 11pt;
  }
  @media only screen and (min-width: 280px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 11pt;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Categorylabel = styled.label`
  /* border: 1px solid blue; */

  @media only screen and (max-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 360px) {
  }

  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
    padding: 0px;
    margin: 0 0 0 50px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Categorycontents = styled.div`
  select {
    min-width: 200px;
    width: 50%;
  }
`;

//제품이름
const NameSection = styled.div`
  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  margin: 0 0 10px 0;
  @media only screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 11pt;
  }
  @media only screen and (min-width: 280px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 11pt;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Namelabel = styled.label`
  /* border: 1px solid blue; */

  @media only screen and (max-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 360px) {
  }

  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
    padding: 0px;
    margin: 0 0 0 50px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const NameInput = styled.input`
  height: 30px;
  border-radius: 10px;
  border-width: 1.8px;
  padding: 10px;

  @media only screen and (max-width: 280px) {
    width: 100%;
  }

  @media only screen and (min-width: 280px) {
    width: 100%;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 450px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
//시작가격
const PriceSection = styled.div`
  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  margin: 0 0 10px 0;
  @media only screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 11pt;
  }
  @media only screen and (min-width: 280px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 11pt;
  }
  @media only screen and (min-width: 360px) {
  }

  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Pricelabel = styled.label`
  /* border: 1px solid blue; */

  @media only screen and (max-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
    padding: 0px;
    margin: 0 0 0 50px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const PriceContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Priceinput = styled.input`
  height: 30px;
  border-radius: 10px;
  border-width: 1.8px;
  padding: 10px;
  min-width: 200px;
  width: 50%;
  @media only screen and (max-width: 280px) {
    min-width: 200px;
    width: 50%;
    font-size: 11pt;
  }
  @media only screen and (min-width: 280px) {
    min-width: 200px;
    width: 50%;
    font-size: 11pt;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const KoreanCurrency = styled.div`
  font-family: "Roboto-Regular";
`;

// 상세설명
const DescriptionSection = styled.div`
  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  margin: 0 0 10px 0;
  @media only screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 11pt;
  }
  @media only screen and (min-width: 280px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 11pt;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 12pt;
  }
  @media only screen and (min-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: start;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 120px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Descriptionlabel = styled.label`
  /* border: 1px solid blue; */

  @media only screen and (max-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }

  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
    padding: 0px;
    margin: 0 0 0 50px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Descriptiontextarea = styled.textarea`
  font-family: "KBO-Dia-Gothic_light";
  padding: 2px 5px;

  border-radius: 10px;
  resize: none;
  @media only screen and (max-width: 280px) {
    width: 100%;
    height: 100px;
    font-size: 10pt;
  }
  @media only screen and (min-width: 280px) {
    width: 100%;
    height: 100px;
    font-size: 10pt;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 450px;
    height: 130px;
    font-size: 12pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

//썸네일
const ThumbnailSection = styled.div`
  font-family: "KBO-Dia-Gothic_medium";
  color: black;

  @media only screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    font-size: 11pt;
  }
  @media only screen and (min-width: 280px) {
    display: flex;
    flex-direction: column;
    font-size: 11pt;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Thumbnaillabel = styled.label`
  /* border: 1px solid blue; */

  @media only screen and (max-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 280px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 420px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 600px) {
    width: 150px;
    margin: 5px 0 0 0;
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
    padding: 0px;
    margin: 0 50px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Thumbnaillabelno = styled.label`
  :hover {
    cursor: pointer;
  }
  padding: 36px 40px;
  border: 1px lightgray;
  border-radius: 10px;
  background-color: lightgray;
  font-size: 11pt;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Thumbnaillabelfor = styled.label`
  :hover {
    cursor: pointer;
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
`;

const Thumbnailimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
`;
//등록 버튼

const SubmitButton = styled(Button)`
  float: right;
`;
