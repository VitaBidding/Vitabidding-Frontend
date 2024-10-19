import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import { requestLogout } from "../../lib/request";

export default function LoginVIcon() {
  function LogOut() {
    requestLogout();
    window.location.href = `${process.env.REACT_APP_MAIN_CLIENT_URL}`;
  }

  return (
    <Section>
      <Dropdown>
        <CustomDropdownToggle
          style={{ border: "none", backgroundColor: "transparent", padding: 0 }}
        >
          <UserIcon size={30} />
        </CustomDropdownToggle>

        <Dropdown.Menu>
          <Dropdown.Item as="a" href="/point">
            포인트
          </Dropdown.Item>
          <Dropdown.Item as="a" href="/bidlist">
            낙찰물품
          </Dropdown.Item>
          <Dropdown.Item as="a" href="/infomation">
            내 정보
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as="a" href="/creator">
            판매자 페이지
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => LogOut()}>로그아웃</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Section>
  );
}

const Section = styled.div`
  @media only screen and (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const CustomDropdownToggle = styled(Dropdown.Toggle)`
  &::after {
    display: none !important; // 화살표 아이콘을 숨김
  }
`;

const UserIcon = styled(FaRegUserCircle)`
  transition: color 0.3s ease; /* 색상 변화 시 부드럽게 전환 */
  background-color: #efb73e;
  color: white; /* 마우스를 올렸을 때 색상 변경 */
  border-radius: 50%; /* 아이콘을 동그랗게 만듭니다 */
  &:hover {
    color: #efb73e;
    background-color: white;
  }
`;
