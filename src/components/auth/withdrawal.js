import React, { useState } from "react";
import styled from "styled-components";
import doucument from "../../assets/img/doucument.png";
import logo from "../../assets/img/vitaBiddingLogoBlack.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { requestWithdrawal } from "../../lib/request";

function Withdrawal(props) {
  const [check, setcheck] = useState(false);
  const handleCheck = (checked) => {
    if (checked) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Section>
      <div>
        <img src={logo} alt="" />
        <img src={doucument} alt="" />
        <div>비타비딩 회원탈퇴</div>
        <br></br>
        <div> 탈퇴를 신청하기 전 탈퇴 절차를 꼭 확인해주세요. </div>
      </div>
      <div>
        <div>
          잔여 POINT가 있을 경우 탈퇴신청이 불가하오니 POINT 환불을 진행해
          주세요.
        </div>
        <div>
          경매배송취소 시 사용된 포인트 경우 환원되므로 반드시 경매배송완료된 후
          포인트 환불을 진행해 주세요.
        </div>
        <CheckButton> 포인트 환불/정산하기 </CheckButton>
      </div>
      <div>
        <div>
          <div>
            회원탈퇴 완료 시 해당 계정의 모든 정보가 삭제되어 복구가
            불가능합니다.
          </div>
          <div>- 해당 계정의 모든 정보가 삭제되며 복구가 불가능합니다.</div>
          <div>
            - 회원탈퇴 신청 즉시 모든 서비스가 정지되며 회원 전용 서비스의
            이용이 불가능합니다.
          </div>
        </div>
        <div>
          <div>회원탈퇴 신청 취소는 15일 이내에 가능합니다.</div>
          <div>
            - 회원탈퇴 신청 후 15일 동안은 회원탈퇴 신청 취소가 가능합니다.
          </div>
          <div>
            - 본인 계정을 타인이 도용하여 신청했을 시 15일 이내에 이의 신청을
            해주셔야 합니다.
          </div>
        </div>
      </div>

      <div>
        <div>
          위의 회원 탈퇴 전 진행 사항과 탈퇴시 주의사항을 모두 확인하였습니다.
          &nbsp;
          <input
            type="checkbox"
            onChange={(e) => handleCheck(e.target.checked)}
          />
        </div>
      </div>
      <div>
        <Button variant="danger" disabled={!check} onClick={requestWithdrawal}>
          회원탈퇴신청
        </Button>
        &nbsp;
        <Button variant="outline-primary" onClick={goBack}>
          이전페이지로
        </Button>
      </div>
    </Section>
  );
}

export default Withdrawal;
const Section = styled.div`
  /* border: 1px solid black; */

  @media only screen and (max-width: 280px) {
    font-size: 10pt;
    margin: 5px;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10pt;
    margin: 5px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 12pt;
    margin: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }

  img {
    @media only screen and (max-width: 280px) {
      width: 200px;
    }
    @media only screen and (min-width: 280px) {
      width: 200px;
    }
    @media only screen and (min-width: 360px) {
    }
    @media only screen and (min-width: 420px) {
      width: 300px;
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 600px) {
      width: 400px;
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
  input {
    width: 20px;
    height: 16px;
  }
`;
const CheckButton = styled.button`
  display: flex;
  align-items: center;
  color: #ffffff;

  padding: 0 5px;
  background-color: #212121;
  border-radius: 5px;

  @media only screen and (max-width: 280px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 280px) {
    font-size: 11pt;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 12pt;
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
