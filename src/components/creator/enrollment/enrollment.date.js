import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TimeCheck } from "../../../lib/request";
import DatePicker from "react-datepicker";
function EnrollmentDate({
  setItem,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) {
  const [currentTime, setcurrentTime] = useState(new Date());
  useEffect(() => {
    TimeCheck()
      .then((res) => {
        if (res) {
          setcurrentTime(res.data.currentTime);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // 날짜 관련 함수
  const yesterday = new Date(currentTime); // 현재 날짜를 복사하여 새로운 Date 객체 생성
  yesterday.setDate(currentTime.getDate() - 1); // 하루를 빼줌

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

  const getMaxDate = () => {
    const today = new Date(`${currentTime}`);
    today.setFullYear(today.getFullYear() + 1); // 1년 이후의 날짜를 얻습니다.
    return today;
  };
  return (
    <TimeSection>
      <Timelabel htmlFor="start_time">경매 시작 시간</Timelabel>
      <Timecontents>
        <StyledDatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yy년 MM월 dd일"
          minDate={currentTime}
          placeholderText="날짜를 선택하세요"
          maxDate={getMaxDate()}
          autoComplete="off" // 자동 완성 기능 비활성화 (숫자 입력 방지)
          onKeyDown={(e) => e.preventDefault()} // 키 입력 막기
          popperPlacement="auto"
          showPopperArrow={false} /* 화살표 숨기기 (필요한 경우) */
        />

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
      </Timecontents>
    </TimeSection>
  );
}

export default EnrollmentDate;

//경매시작시간
const TimeSection = styled.div`
  width: 100%;
  height: 100%;
  font-family: "KBO-Dia-Gothic_medium";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Timelabel = styled.label`
  /* border: 1px solid blue; */
  color: black;
  text-shadow: 1px 1px lightgray;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 280px) {
    font-size: 7pt;
    padding: 0;
  }
  @media only screen and (min-width: 280px) {
    font-size: 7pt;
    padding: 0;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 3px 10px;
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
  width: 100%;
  display: flex;
  justify-content: start;

  @media only screen and (max-width: 280px) {
    padding: 0;
  }
  @media only screen and (min-width: 280px) {
    padding: 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 0 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const StyledDatePicker = styled(DatePicker)`
  text-align: center;

  color: #000;
  border: none;
  border-radius: 10px;

  font-weight: bold;
  border: 2px solid lightgray;
  &:hover {
    border: 2px solid #fd9800;
    cursor: pointer;
  }
  @media only screen and (max-width: 280px) {
    padding: 5px 0;
    font-size: 7pt;
  }
  @media only screen and (min-width: 280px) {
    padding: 5px 0;
    font-size: 7pt;
  }
  @media only screen and (min-width: 360px) {
    padding: 5px 0;
    font-size: 10pt;
  }
  @media only screen and (min-width: 420px) {
    padding: 10px 0;
    font-size: 11pt;
  }
  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
    padding: 10px 0;
    font-size: 12pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const StyledDatePicker2 = styled(DatePicker)`
  text-align: center;
  font-size: 12pt;
  color: #000;
  border: none;
  border-radius: 10px;
  margin: 0 0 0 10px;

  font-weight: bold;
  border: 2px solid lightgray;
  &:hover {
    border: 2px solid #fd9800;
    cursor: pointer;
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
  @media only screen and (max-width: 280px) {
    margin: 0 0 0 3px;
    padding: 5px 0;
    font-size: 7pt;
  }
  @media only screen and (min-width: 280px) {
    margin: 0 0 0 3px;
    padding: 5px 0;
    font-size: 7pt;
  }
  @media only screen and (min-width: 360px) {
    margin: 0 0 0 5px;
    padding: 5px 0;
    font-size: 10pt;
  }
  @media only screen and (min-width: 420px) {
    margin: 0 0 0 10px;
    padding: 10px 0;
    font-size: 11pt;
  }
  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
    margin: 0 0 0 10px;
    padding: 10px 0;
    font-size: 12pt;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
