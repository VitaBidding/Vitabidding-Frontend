import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { BsCamera } from "react-icons/bs";
import ValidationModal from "./validation.modal";
import EditModal from "./edit.modal";
import DeleteModal from "./delete.modal";
import { EditItem, DeleteItem } from "../../../lib/request";
import "../../../assets/bootstrap/react-datepicker.fd9800.css";

const Updatepage = ({ upproduct, UphandleClose }) => {
  const categories = [
    "전자기기",
    "공구용품",
    "가구/인테리어",
    "도서",
    "의류",
    "뷰티/미용",
    "티켓/교환권",
    "게임",
    "음반",
    "식물",
  ];

  const CurrentTime = new Date();
  const [item, setItem] = useState({
    item_id: upproduct.id,
    category: upproduct.category,
    item_name: upproduct.item_name,
    detailed_description: upproduct.detailed_description,
    starting_price: upproduct.starting_price,
    thumbnail: upproduct.Item_thumbnail.thumbnail,
    // detailed_images: [],
    start_day: upproduct.start_day,
    start_time: upproduct.start_time, // 현재 시간 기준으로 설정
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
  const [editSuccess, setEditSuccess] = useState(false);
  const SuccessClose = () => {
    setEditSuccess(false);
    UphandleClose();
  };
  const EditShow = () => setEditSuccess(true);
  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("item", JSON.stringify(item));
    // console.log(formData);

    EditItem(formData)
      .then((response) => {
        if (response) {
          setmesseage(response.data.message);
          EditShow();
        } else {
          setmesseage("등록 실패");
          handleShow();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 데이터 변경함수
  const [koreanCurrency, setkoreanCurrency] = useState("포인트");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
    if (name === "starting_price") {
    }
  };
  // 날짜 관련 함수
  const result = convertToDateTime(upproduct.start_day, upproduct.start_time);

  const yesterday = new Date(CurrentTime); // 현재 날짜를 복사하여 새로운 Date 객체 생성
  yesterday.setDate(CurrentTime.getDate() - 1); // 하루를 빼줌
  const [selectedDate, setSelectedDate] = useState(result);

  const [selectedTime, setSelectedTime] = useState(result);

  function convertToDateTime(strDate, strTime) {
    // Date 정보 파싱
    const [year, month, day] = strDate.split("-").map(Number);

    // Time 정보 파싱
    const [hour, minute] = strTime.split(":").map(Number);

    // Date 객체 생성
    const dateObj = new Date(year, month - 1, day, hour, minute);

    return dateObj;
  }

  const handleDateChange = (date) => {
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
  };
  const handleTimeChange = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    setSelectedTime(time);
    setItem((prevItem) => ({ ...prevItem, start_time: formattedTime }));
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
  const [Thumbnail, setThumbnail] = useState(
    upproduct.Item_thumbnail.thumbnail
  );

  const handleThumbnailChange = (event) => {
    const imageFile = event.target.files[0];

    if (imageFile) {
      // FileReader로 이미지 읽기
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // 이미지 크기 조정 (예: 600px 고정 너비)
          const maxWidth = 600;
          const scale = maxWidth / img.width;
          canvas.width = maxWidth;
          canvas.height = img.height * scale;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // canvas에서 PNG로 변환
          canvas.toBlob(
            (blob) => {
              // PNG 형식의 blob 생성
              const pngFile = new File(
                [blob],
                imageFile.name.replace(/\.\w+$/, ".png"),
                {
                  type: "image/png",
                }
              );

              // PNG 파일을 FormData에 추가
              const formData = new FormData();
              formData.append("thumbnail", pngFile);

              // 미리보기 업데이트
              const readerForPreview = new FileReader();
              readerForPreview.onloadend = () => {
                setThumbnail(readerForPreview.result);
              };
              readerForPreview.readAsDataURL(pngFile);

              // setItem 호출 (업데이트된 PNG 파일 전송)
              setItem((prevItem) => ({ ...prevItem, thumbnail: formData }));
            },
            "image/png" // 파일 형식을 PNG로 지정
          );
        };
      };

      reader.readAsDataURL(imageFile);
    }
  };

  //삭제 관련함수
  const [delSuccess, setDelSuccess] = useState(false);
  const DelClose = () => {
    setDelSuccess(false);
    UphandleClose();
  };
  const DelShow = () => setDelSuccess(true);
  function DeleteitemBT() {
    DeleteItem(upproduct.id)
      .then((response) => {
        if (response) {
          setmesseage(response.data.message);
          DelShow();
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <Wrapper>
      <DeleteModal show={delSuccess} handleClose={DelClose} message={message} />
      <EditModal
        show={editSuccess}
        handleClose={SuccessClose}
        message={message}
      />
      <ValidationModal
        show={show}
        handleClose={handleClose}
        message={message}
      />
      <Title>경매 물품 수정</Title>
      <Form onSubmit={handleSubmit}>
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
                width: "200px",
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
        <NameSection>
          <Namelabel htmlFor="item_name">제품이름</Namelabel>
          <input
            type="text"
            id="item_name"
            name="item_name"
            value={item.item_name}
            onChange={handleInputChange}
            placeholder="제품명을 입력하세요"
            style={{
              width: "280px",
              height: "40px",
              borderRadius: "10px",
              borderWidth: "1px",
              padding: "10px",
            }}
          />
        </NameSection>
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
                placeholder=" 숫자만 입력하세요"
                style={{
                  width: "160px",
                  height: "30px",
                  borderRadius: "10px",
                  borderWidth: "1px",
                  padding: "10px",
                }}
              />
              포인트
            </div>
            {item.starting_price && (
              <KoreanCurrency>{koreanCurrency}</KoreanCurrency>
            )}
          </PriceContents>
        </PriceSection>
        <DescriptionSection>
          <Descriptionlabel htmlFor="detailed_description">
            상세설명
          </Descriptionlabel>
          <Descriptiontextarea
            id="detailed_description"
            name="detailed_description"
            value={item.detailed_description}
            placeholder={
              "내용을 입력해주세요\nex)\n상태: S급\n정품 인증여부: O\n물품에 대한 설명을 해주세요!"
            }
            onChange={handleInputChange}
          />
        </DescriptionSection>
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

        <DeleteButton variant="dark" onClick={() => DeleteitemBT()}>
          삭제
        </DeleteButton>
        <SubmitButton variant="secondary" onClick={() => validation()}>
          수정
        </SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default Updatepage;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 420px) {
    width: 90vw;
  }
  @media only screen and (min-width: 420px) {
    width: 90vw;
  }
  @media only screen and (min-width: 600px) {
    width: 90vw;
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

const Form = styled.form`
  @media only screen and (max-width: 420px) {
    width: 280px;
  }
  @media only screen and (min-width: 420px) {
    width: 380px;
  }
  @media only screen and (min-width: 600px) {
    width: 400px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 630px;
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
  color: darkslateblue;
  height: 50px;

  @media only screen and (max-width: 420px) {
    margin: 0 0 5px 0;
  }
  @media only screen and (min-width: 420px) {
    margin: 5px;
  }
  @media only screen and (min-width: 600px) {
    margin: 5px;
  }
  @media only screen and (min-width: 768px) {
    margin: 5px;
  }
  @media only screen and (min-width: 992px) {
    margin: 20px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
//경매시작시간
const TimeSection = styled.div`
  font-size: 12pt;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;

  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: start;
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
    align-items: start;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Timelabel = styled.label`
  @media only screen and (max-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 600px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 100px;
    padding: 0px;
    margin: 0 50px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Timecontents = styled.div`
  display: flex;
`;

const StyledDatePicker = styled(DatePicker)`
  text-align: center;
  border-radius: 10px;

  width: 140px;
`;
const StyledDatePicker2 = styled(DatePicker)`
  margin: 0 5px;
  text-align: center;
  border-radius: 10px;
  width: 140px;
`;
//카테고리
const CategorySection = styled.div`
  /* border: 1px solid black; */
  font-size: 12pt;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;

  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: start;
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
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Categorylabel = styled.label`
  @media only screen and (max-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 600px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 100px;
    padding: 0px;
    margin: 0 50px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Categorycontents = styled.div`
  /* border: 1px solid blue; */
`;

//제품이름
const NameSection = styled.div`
  font-size: 12pt;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;

  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: start;
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
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Namelabel = styled.label`
  @media only screen and (max-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 600px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 100px;
    padding: 0px;
    margin: 0 50px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

//시작가격
const PriceSection = styled.div`
  font-size: 12pt;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;

  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: start;
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
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Pricelabel = styled.label`
  @media only screen and (max-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 600px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 100px;
    padding: 0px;
    margin: 0 50px;
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
`;

const Priceinput = styled.input``;

const KoreanCurrency = styled.div`
  font-family: "Roboto-Regular";
`;

// 상세설명
const DescriptionSection = styled.div`
  font-size: 12pt;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;

  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: start;
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
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 120px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Descriptionlabel = styled.label`
  @media only screen and (max-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 600px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 100px;
    padding: 0px;
    margin: 0 50px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Descriptiontextarea = styled.textarea`
  font-family: "KBO-Dia-Gothic_light";
  padding: 2px 5px;
  font-size: 11pt;
  border-radius: 10px;
  resize: none;
  @media only screen and (max-width: 420px) {
    width: 280px;
    height: 70px;
  }
  @media only screen and (min-width: 420px) {
    width: 300px;
    height: 100px;
  }
  @media only screen and (min-width: 600px) {
    width: 300px;
    height: 100px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 400px;
    height: 120px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

//썸네일
const ThumbnailSection = styled.div`
  font-size: 12pt;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;

  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: start;
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
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 240px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Thumbnaillabel = styled.label`
  @media only screen and (max-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 600px) {
    width: 100px;
    margin: 5px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    width: 100px;
    padding: 0px;
    margin: 0 50px;
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
  font-size: 10pt;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Thumbnaillabelfor = styled.label`
  :hover {
    cursor: pointer;
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  @media only screen and (max-width: 420px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (min-width: 600px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (min-width: 992px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Thumbnailimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
`;
//상세 사진
// const DetailedImagesSection = styled.div`
//   display: flex;
//   font-size: 12pt;
//   font-family: "KBO-Dia-Gothic_medium";
//   color: black;
//   align-items: center;
//   height: 170px;
// `;

// const DetailedImageslabel = styled.label`
//   /* border: 1px solid blue; */
//   margin: 0 50px;
//   width: 15%;
// `;

// const DetailedImageslabelno = styled.label`
//   :hover {
//     cursor: pointer;
//   }
//   padding: 36px 40px;
//   border: 1px lightgray;
//   border-radius: 10px;
//   background-color: lightgray;
//   font-size: 10pt;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const DetailedImageslabelfor = styled.label`
//   :hover {
//     cursor: pointer;
//   }
//   padding: 34px 20px;
//   border: 1px lightgray;
//   border-radius: 10px;
//   background-color: lightgray;
//   font-size: 10pt;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const DetailedImagesContents = styled.div`
//   display: flex;
//   flex-direction: row;
//   /* flex-wrap: wrap; */
// `;

//등록 버튼

const SubmitButton = styled(Button)`
  float: right;
  @media only screen and (max-width: 420px) {
    margin: 10px 0px 10px 10px;
  }
  @media only screen and (min-width: 420px) {
    margin: 10px 0px 10px 10px;
  }
  @media only screen and (min-width: 600px) {
    margin: 10px 0px 10px 10px;
  }
  @media only screen and (min-width: 768px) {
    margin: 10px 0px 10px 10px;
  }
  @media only screen and (min-width: 992px) {
    margin: 10px 25px 10px 10px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const DeleteButton = styled(Button)`
  float: left;
  @media only screen and (max-width: 420px) {
    margin: 10px 0px 10px 0px;
  }
  @media only screen and (min-width: 420px) {
    margin: 10px 0px 10px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 10px 0px 10px 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    margin: 10px 25px 10px 10px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
