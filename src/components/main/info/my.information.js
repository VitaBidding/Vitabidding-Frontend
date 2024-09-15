import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  selectreal_name,
  selectNickName,
  selectlogin_type,
  selectphone,
  selectFuAddress,
} from "../../../redux/features/user/user.slice";
import NicknameModal from "./nickname.modal";
import PhoneModal from "./phone.modal";
import AddressModal from "./address.modal";
import { Button } from "react-bootstrap";

function MyInformation(props) {
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

  const real_name = useSelector(selectreal_name);
  const nickname = useSelector(selectNickName);
  const login_type = useSelector(selectlogin_type);
  const phone = useSelector(selectphone);
  const address = useSelector(selectFuAddress);

  const [NicknameShow, setNicknameShow] = useState(false);
  const handleNicknameClose = () => setNicknameShow(false);
  const handleNicknameShow = () => setNicknameShow(true);

  const [PhoneShow, setPhoneShow] = useState(false);
  const handlePhoneClose = () => setPhoneShow(false);
  const handlePhoneShow = () => setPhoneShow(true);

  const [AddressShow, setAddressShow] = useState(false);
  const handleAddressClose = () => setAddressShow(false);
  const handleAddressShow = () => setAddressShow(true);

  return (
    <MyInfoSection>
      <NicknameModal show={NicknameShow} handleClose={handleNicknameClose} />
      <PhoneModal show={PhoneShow} handleClose={handlePhoneClose} />
      <AddressModal show={AddressShow} handleClose={handleAddressClose} />

      <Table width={windowWidth * 0.95}>
        <tbody>
          <tr>
            <td className="column">이름</td>
            <td className="info">
              <InfoValue>{real_name}</InfoValue>
            </td>
          </tr>
          <tr>
            <td className="column">이메일</td>
            <td className="info">
              <InfoValue>{login_type}</InfoValue>
            </td>
          </tr>
          <tr>
            <td className="column">닉네임</td>
            <td className="info">
              <InfoValue>{nickname}</InfoValue>
              <Button1 onClick={handleNicknameShow}>닉네임 변경</Button1>
            </td>
          </tr>
          <tr>
            <td className="column">핸드폰 번호</td>
            <td className="info">
              <InfoValue>{phone}</InfoValue>
              <Button1 onClick={handlePhoneShow}>핸드폰 번호 설정</Button1>
            </td>
          </tr>
          <tr>
            <td className="column">주소</td>
            <td className="info">
              <InfoValue>{address}</InfoValue>
              <Button1 onClick={handleAddressShow}>주소 변경</Button1>
            </td>
          </tr>
          <tr>
            <td className="column">탈퇴신청</td>
            <td className="info">
              <WithdrawlButton href="/withdrawal">탈퇴</WithdrawlButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </MyInfoSection>
  );
}

export default MyInformation;

const MyInfoSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 360px) {
    margin: 0;
  }
  @media only screen and (min-width: 360px) {
    margin: 0;
  }
  @media only screen and (min-width: 420px) {
    margin: 0;
  }
  @media only screen and (min-width: 600px) {
    margin: 0;
  }
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
  @media only screen and (min-width: 992px) {
    margin: 10px;
  }
  @media only screen and (min-width: 1200px) {
    width: 900px;
    margin: 50px 0 0 0;
  }
`;

const Table = styled.table`
  font-family: "NotoSansKR-Regular";
  border-bottom: 1px solid #c0c0c0;
  @media only screen and (max-width: 280px) {
    font-size: 10px;
    width: ${(props) => props.width}px;
  }
  @media only screen and (min-width: 280px) {
    font-size: 10px;

    width: ${(props) => props.width}px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    font-size: 12px;
    margin: 12px;
    width: 450px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    margin: 16px;
    width: 650px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 16px;
    margin: 16px;
    width: 650px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 16px;
    margin: 16px;
    width: 850px;
  }
  td {
    border-top: 1px solid #c0c0c0;

    @media only screen and (max-width: 280px) {
      padding: 8px;
    }
    @media only screen and (min-width: 280px) {
      padding: 8px;
    }
    @media only screen and (min-width: 360px) {
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 600px) {
      padding: 15px;
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
  tr {
    @media only screen and (max-width: 280px) {
      display: flex;
      flex-direction: column;
    }
    @media only screen and (min-width: 280px) {
      display: flex;
      flex-direction: column;
    }
    @media only screen and (min-width: 360px) {
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 600px) {
      flex-direction: row;
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
  .column {
    color: #000;
    background-color: #eee;
    font-weight: bold;
    @media only screen and (max-width: 280px) {
    }
    @media only screen and (min-width: 280px) {
    }
    @media only screen and (min-width: 360px) {
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 600px) {
      width: 100px;
    }
    @media only screen and (min-width: 768px) {
      width: 150px;
    }
    @media only screen and (min-width: 992px) {
      width: 150px;
    }
    @media only screen and (min-width: 1200px) {
      width: 150px;
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 360px) {
    }
    @media only screen and (min-width: 360px) {
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 600px) {
      width: 450px;
    }
    @media only screen and (min-width: 768px) {
      width: 500px;
    }
    @media only screen and (min-width: 992px) {
      width: 500px;
    }
    @media only screen and (min-width: 1200px) {
      width: 750px;
    }
  }
`;

const InfoValue = styled.div`
  margin: 0 10px;
`;
const Button1 = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
  margin: 0 10px;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 13px;
  }
`;
const WithdrawlButton = styled.a`
  font-family: "NotoSansKR-Regular";
  background-color: white;
  color: gray;
  display: flex;
  border-radius: 5px;
  border: 1px solid #c0c0c0;
  margin: 0 10px;
  text-decoration: none;
  @media only screen and (max-width: 600px) {
    font-size: 9px;
    padding: 2px 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 9px;
    padding: 2px 10px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 10px;
    padding: 2px 12px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 14px;
    padding: 2px 15px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 14px;
    padding: 2px 15px;
  }
`;
