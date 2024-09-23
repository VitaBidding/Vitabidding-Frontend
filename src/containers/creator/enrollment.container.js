import React, { useState } from "react";
import styled from "styled-components";
import SuccessModal from "../../components/creator/enrollment/success.modal";
import ValidationModal from "../../components/creator/enrollment/validation.modal";
import { EnrollmentItem } from "../../lib/request";
import EnrollmentTitle from "../../components/creator/enrollment/enrollment.title";
import EnrollmentThumbnail from "../../components/creator/enrollment/enrollment.thumbnail";
import EnrollmentDate from "../../components/creator/enrollment/enrollment.date";
import EnrollmentCategory from "../../components/creator/enrollment/enrollment.category";
import EnrollmentStartPrice from "../../components/creator/enrollment/enrollment.start.price";
import EnrollmentName from "../../components/creator/enrollment/enrollment.name";
import EnrollmentDescription from "../../components/creator/enrollment/enrollment.description";
import { Button } from "react-bootstrap";
function EnrollmentContainer(props) {
  const [item, setItem] = useState({
    category: "",
    item_name: "",
    detailed_description: "",
    starting_price: "",
    thumbnail: null,
    start_day: null,
    start_time: null, // 현재 시간 기준으로 설정
  });
  console.log("🚀 ~ EnrollmentContainer ~ item:", item);

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
    formData.append("item", JSON.stringify(item));
    EnrollmentItem(formData)
      .then((response) => {
        if (response) {
          setmesseage(response.data.message);
          SuccessShow();
        } else {
          setmesseage("등록 실패");
          handleShow();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setItem((prevItem) => ({ ...prevItem, [name]: value }));
    if (name === "starting_price") {
    }
  };

  return (
    <Wrapper>
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
      <Section1>
        <EnrollmentTitle />
      </Section1>
      <Section2>
        <EnrollmentThumbnail item={item} setItem={setItem} />
      </Section2>
      <Section3>
        <EnrollmentDate
          setItem={setItem}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      </Section3>
      <Section4>
        <EnrollmentCategory item={item} handleInputChange={handleInputChange} />
      </Section4>
      <Section5>
        <EnrollmentStartPrice item={item} setItem={setItem} />
      </Section5>
      <Section6>
        <EnrollmentName item={item} handleInputChange={handleInputChange} />
      </Section6>
      <Section7>
        <EnrollmentDescription
          item={item}
          handleInputChange={handleInputChange}
        />
      </Section7>
      <Section8>
        <SubmitButton onClick={() => validation()}>등록하기</SubmitButton>
      </Section8>
    </Wrapper>
  );
}

export default EnrollmentContainer;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: grid;
  height: calc(100vh - 50px);
  @media only screen and (max-width: 280px) {
    grid-template-rows: repeat(20, 1fr);
    width: calc(100vw - 10px);
    gap: 2px;
  }
  @media only screen and (min-width: 280px) {
    grid-template-rows: repeat(20, 1fr);
    width: calc(100vw - 10px);
    gap: 2px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
  @media only screen and (min-width: 992px) {
    width: calc(100vw - 220px);
  }
  @media only screen and (min-width: 1200px) {
    width: calc(100vw - 300px);
    gap: 3px;
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Section1 = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-row: 1 / 2;
  }
  @media only screen and (min-width: 280px) {
    grid-row: 1 / 2;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const Section2 = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-row: 2 / 7;
  }
  @media only screen and (min-width: 280px) {
    grid-row: 2 / 7;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1 / 6;
    grid-row: 2 / 5;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Section3 = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-row: 7 / 9;
  }
  @media only screen and (min-width: 280px) {
    grid-row: 7 / 9;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 5 / 6;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Section4 = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-row: 9 / 11;
  }
  @media only screen and (min-width: 280px) {
    grid-row: 9 / 11;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    grid-column: 4 / 6;
    grid-row: 5 / 6;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Section5 = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-row: 11 / 14;
  }
  @media only screen and (min-width: 280px) {
    grid-row: 11 / 14;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1 / 6;
    grid-row: 6 / 7;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Section6 = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-row: 14 / 16;
  }
  @media only screen and (min-width: 280px) {
    grid-row: 14 / 16;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1 / 6;
    grid-row: 7 / 8;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Section7 = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-row: 16 / 20;
  }
  @media only screen and (min-width: 280px) {
    grid-row: 16 / 20;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1 / 6;
    grid-row: 8 / 10;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Section8 = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  @media only screen and (max-width: 280px) {
    grid-row: 20 / 21;
  }
  @media only screen and (min-width: 280px) {
    grid-row: 20 / 21;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    grid-column: 1 / 6;
    grid-row: 10 / 11;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const SubmitButton = styled(Button)`
  font-weight: bold;
  float: right;
  @media only screen and (max-width: 280px) {
    font-size: 9pt;
    padding: 6px 10px;
    margin: 0;
  }
  @media only screen and (min-width: 280px) {
    font-size: 9pt;
    padding: 6px 10px;
    margin: 0;
  }
  @media only screen and (min-width: 360px) {
    padding: 8px 12px;
    font-size: 11pt;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin: 10px;
    font-size: 14pt;
    padding: 10px 20px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
