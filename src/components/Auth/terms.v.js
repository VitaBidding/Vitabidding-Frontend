import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { requestLoginGoogle,requestLoginNaver } from "../../lib/request";
import { GrGoogle } from "react-icons/gr";
import { SiNaver } from "react-icons/si";
function TermsV(props) {
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
  const [checkItems, setCheckItems] = useState([]);
  const [buttonColor, setButtonColor] = useState(false);

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

  const handleSubmit = () => {
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}/join`;

  };
  return (
    <>
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
                  checked={checkItems.includes(data.column) ? true : false}
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
    
      <NextButton onClick={()=>handleSubmit() }        state={buttonColor}
        disabled={!buttonColor}>
          다음
        </NextButton>
      <Separator>
        <p>OR</p>
      </Separator>

      <GoogleButton onClick={() => requestLoginGoogle()}        state={buttonColor}
        disabled={!buttonColor}>
        {" "}
        <GrGoogle className="icon" size={35} />
        Sign in with Google
      </GoogleButton>
      <NaverButton onClick={() => requestLoginNaver()}        state={buttonColor}
        disabled={!buttonColor}>
        {" "}
        <SiNaver className="icon" size={30} />
        Sign in with Naver
      </NaverButton>
    </>
  );
}

export default TermsV;

const StyledTable = styled.table`
  /* border: 1px solid red; */
  text-align: left;
  display: flex;
  flex-direction: column;

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
        @media only screen and (max-width: 600px) {
          font-size: 13px;
        }
        @media only screen and (min-width: 600px) {
          font-size: 15px;
        }
        @media only screen and (min-width: 768px) {
          font-size: 17px;
        }
        @media only screen and (min-width: 992px) {
          font-size: 17px;
        }
        @media only screen and (min-width: 1200px) {
          font-size: 17px;
        }
      }
    }
  }
  tbody {
    padding: 10px 0 10px;

    @media only screen and (max-width: 600px) {
      font-size: 12px;
    }
    @media only screen and (min-width: 600px) {
      font-size: 15px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 17px;
    }
    @media only screen and (min-width: 992px) {
      font-size: 17px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 17px;
    }
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
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
  @media only screen and (min-width: 600px) {
    width: 90vw;
  }
  @media only screen and (min-width: 768px) {
    width: 600px;
  }
  @media only screen and (min-width: 992px) {
    width: 600px;
  }
  @media only screen and (min-width: 1200px) {
    width: 600px;
  }
`;

const NextButton = styled.button`
  color: ${(props) => (props.state ? "white" : "gray")};
  background: ${(props) => (props.state ? "#fd9800" : "lightgrey")};
  display: block;
  width: 100%;
  max-width: 680px;
  height: 50px;
  border-radius: 8px;
  margin: 20px auto;
  border: none;
  font-weight: bold;
  font-size: 14px;
  box-shadow: ${(props) => (props.state ? "0 15px 20px rgba(253, 152, 0, 0.15)" : "0px")};
 transition: background-color 0.3s ease;
  &:hover {
    background: ${(props) => (props.state ? "#e68a00" : "lightgrey")};
  }
`;

const Separator = styled.div`
  text-align: center;
  height: 40px;
  position: relative;
  color: rgba(15, 19, 42, 0.4);
  font-size: 13px;
  width: 100%;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 8px;
    background: rgba(15, 19, 42, 0.2);
    height: 1px;
    width: 45%;
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
`;

const GoogleButton = styled.button`
  color: ${(props) => (props.state ? "white" : "gray")};
  background: ${(props) => (props.state ? "#3f85f4" : "lightgrey")};

  display: block;
  width: 100%;
  max-width: 680px;
  height: 50px;
  margin: 20px auto;
  border-radius: 8px;
  border: none;
  font-size: 14px;

  box-shadow:  ${(props) => (props.state ? " 0 15px 20px rgba(91, 144, 240, 0.25)" : "0px")};
  transition: background-color 0.3s ease;
  .icon {
    margin-right: 8px;
    /* border-right: 1px solid #0f66f1; */
    padding-right: 8px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      /* border-right: 1px solid #6fa4f7; */
    }
  }

  &:hover {
    background: ${(props) => (props.state ? "#2776f3" : "lightgrey")};
  }
`;

const NaverButton = styled.button`

  color: ${(props) => (props.state ? "white" : "gray")};
  background: ${(props) => (props.state ? "#2ebd59" : "lightgrey")};
  display: block;
  width: 100%;
  max-width: 680px;
  height: 50px;
  margin: 20px auto;
  border-radius: 8px;
  border: none;

  font-size: 14px;
  
  box-shadow: ${(props) => (props.state ? " 0 15px 20px rgba(41, 168, 79, 0.25)" : "0px")};
  .icon {
    margin-right: 8px;
    /* border-right: 1px solid #249446; */
    padding-right: 8px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 1px solid #4bd374;
    }
  }

  &:hover {
    background: ${(props) => (props.state ? "#29a84f" : "lightgrey")};
  }
`;
