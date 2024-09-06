import React from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';

export default function NonLogin() {
  return (
    <Section>
         <Dropdown>
      <Dropdown.Toggle  style={{ border: 'none', backgroundColor: 'transparent', padding: 0 }}>
      <UserIcon size={40}/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/oauth">로그인</Dropdown.Item>
        <Dropdown.Item href="/oauth">회원가입</Dropdown.Item>
        <li><hr class="dropdown-divider"/></li>
        <Dropdown.Item href="/oauth">판매자 페이지</Dropdown.Item>
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

const UserIcon = styled(FaRegUserCircle)`
  color: #e95420;
  transition: color 0.3s ease; /* 색상 변화 시 부드럽게 전환 */

  &:hover {
    background-color: #e95420;
    color: white; /* 마우스를 올렸을 때 색상 변경 */
    border-radius: 50%; /* 아이콘을 동그랗게 만듭니다 */
  }
`;