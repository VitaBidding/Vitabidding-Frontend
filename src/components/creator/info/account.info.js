import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AccountModal from "./account.modal";
import { Button } from "react-bootstrap";
function AccountInfo(AccountInfo) {
  const info = AccountInfo.AccountInfo;
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
  const [modalShow, setmodalShow] = useState(false);
  const handlemodalClose = () => setmodalShow(false);
  const handlemodalShow = () => setmodalShow(true);
  function formatAccountNumber(accountNumber) {
    // 계좌번호의 길이가 7자 이상이라고 가정
    if (accountNumber.length <= 7) {
      return accountNumber;
    }

    const start = accountNumber.slice(0, 4);
    const end = accountNumber.slice(-3);
    const masked = "*".repeat(accountNumber.length - 7);

    return `${start}${masked}${end}`;
  }
  const formattedInfo = formatAccountNumber("12345678910");
  return (
    <MyAccountSection>
      <AccountModal show={modalShow} handleClose={handlemodalClose} />

      <Table width={windowWidth * 0.95}>
        <tbody>
          <tr>
            <td className="column">은행</td>
            <td className="info">
              <InfoValue>{info}</InfoValue>
            </td>
          </tr>
          <tr>
            <td className="column">계좌번호</td>
            <td className="info">
              <InfoValue>{formattedInfo}</InfoValue>
            </td>
          </tr>
          <tr>
            <td className="column1"></td>
            <td className="info">
              <Button1 onClick={handlemodalShow}>계좌 변경</Button1>
            </td>
          </tr>
        </tbody>
      </Table>
    </MyAccountSection>
  );
}

export default AccountInfo;

const MyAccountSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* align-items: center; */
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
  .column1 {
    color: #000;
    background-color: #fff;
    font-weight: bold;
    @media only screen and (max-width: 280px) {
      display: none;
    }
    @media only screen and (min-width: 280px) {
      display: none;
    }
    @media only screen and (min-width: 360px) {
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 420px) {
    }
    @media only screen and (min-width: 600px) {
      display: flex;
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
  font-weight: bold;

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
