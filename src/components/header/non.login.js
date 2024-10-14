import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

export default function NonLogin() {
  return (
    <Section>
      <Dropdown>
        <CustomDropdownToggle
          style={{ border: "none", backgroundColor: "transparent", padding: 0 }}
        >
          <UserIcon size={30} />
        </CustomDropdownToggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/oauth">로그인</Dropdown.Item>
          <Dropdown.Item href="/oauth">회원가입</Dropdown.Item>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <Dropdown.Item href="/oauth">판매자 페이지</Dropdown.Item>
          <li>
            <hr class="dropdown-divider" />
          </li>

          <Dropdown.Item href="/additionalinformation">
            추가정보입력
          </Dropdown.Item>
          <Dropdown.Item href="/terms/creator">
            크리에이터 약관동의
          </Dropdown.Item>
          <Dropdown.Item href="/withdrawal">회원탈퇴</Dropdown.Item>
          <Dropdown.Item href="/infomation">개인정보확인페이지</Dropdown.Item>
          <Dropdown.Item href="/point">포인트확인페이지</Dropdown.Item>
          <Dropdown.Item href="/pointadd">포인트추가페이지</Dropdown.Item>
          <Dropdown.Item href="/bidlist">낙찰물건확인페이지</Dropdown.Item>
          <Dropdown.Item href="/creator">판매자페이지</Dropdown.Item>
          <Dropdown.Item href="/creator/widget">판매자위젯+영상</Dropdown.Item>
          <Dropdown.Item href="/creator/enrollment">물건등록</Dropdown.Item>
          <Dropdown.Item href="/creator/list">
            물건상태조회 및 수정
          </Dropdown.Item>
          <Dropdown.Item href="/creator/controller">컨트롤러</Dropdown.Item>
          <Dropdown.Item href="/creator/point">포인트내역</Dropdown.Item>
          <Dropdown.Item href="/creator/controller">컨트롤러</Dropdown.Item>
          <Dropdown.Item href="/thirdparty">서드파티</Dropdown.Item>
          <Dropdown.Item href="/admin/info">
            계좌 및 크리에이터정보
          </Dropdown.Item>
          <Dropdown.Item href="/admin/login">어드민로그인페이지</Dropdown.Item>
          <Dropdown.Item href="/admin">어드민페이지</Dropdown.Item>
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
  color: #efb73e;
  transition: color 0.3s ease; /* 색상 변화 시 부드럽게 전환 */

  &:hover {
    background-color: #efb73e;
    color: white; /* 마우스를 올렸을 때 색상 변경 */
    border-radius: 50%; /* 아이콘을 동그랗게 만듭니다 */
  }
`;
