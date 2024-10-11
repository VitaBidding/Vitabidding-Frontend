import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import WidgetModal from "./widget.modal";
import { Loadwidget } from "../../../lib/request";
function WidgetComponet(props) {
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
  const [widgeturl, setwidgeturl] = useState(
    "https://example.com/thirdparty/blind/abcdfadhguiahguiahjibvliah"
  );
  const [auctionurl, setauctionurl] = useState(
    "https://vitabiding.shop/abcdef"
  );
  const [channelurl, setchannelurl] = useState(
    "ex) https://www.youtube.com/watch?v=vitabiding"
  );
  const [effect, seteffect] = useState(0);
  useEffect(() => {
    Loadwidget()
      .then((res) => {
        if (res) {
          setwidgeturl(res.data.result.obs_url);
          setauctionurl(res.data.result.auction_url);
          setchannelurl(res.data.result.video_live_url);
        }
      })
      .catch();
  }, [effect]);

  const handleButtonClick = (e) => {
    // 복사할 데이터
    const copiedData = e;
    // 클립보드에 데이터 복사
    navigator.clipboard.writeText(copiedData);
  };

  const [blurOn, setBlurOn] = useState(true);

  const handleBlurToggle = () => {
    setBlurOn(!blurOn);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Wrapper>
      <WidgetModal
        show={show}
        handleClose={handleClose}
        effect={effect}
        seteffect={seteffect}
      ></WidgetModal>
      <ContentSection width={windowWidth - 30}>
        <Contenthead>
          <ContentName>경매 위젯</ContentName>
          <ContentAnnotation>
            <Annotation1>
              *방송 프로그램(OBS,Xsplit)에 적용하는 URL입니다. 유출에 주의하시기
              바랍니다.
            </Annotation1>
            <Annotation2>
              방송 프로그램(OBS,Xsplit)에서 브라우저 소스를 선택하신 뒤 아래
              URL을 적용하시기 바랍니다.
            </Annotation2>
          </ContentAnnotation>
        </Contenthead>
        <ContentURLSection>
          <ContentURL blurOn={blurOn} width={windowWidth - 140}>
            {widgeturl}
          </ContentURL>
          <ButtonSection>
            <BlindButton variant="light" onClick={handleBlurToggle}>
              {blurOn && <AiFillEye></AiFillEye>}{" "}
              {!blurOn && <AiFillEyeInvisible></AiFillEyeInvisible>}
            </BlindButton>
            <CopyButton1 onClick={() => handleButtonClick(widgeturl)}>
              <HiOutlineDocumentDuplicate></HiOutlineDocumentDuplicate>
            </CopyButton1>
          </ButtonSection>
        </ContentURLSection>
      </ContentSection>
      <ContentSection>
        <Contenthead>
          <ContentName>경매장 주소</ContentName>
          <ContentAnnotation>
            <Annotation3>시청자에게 제공하는 경매장 주소입니다.</Annotation3>
          </ContentAnnotation>
        </Contenthead>
        <ContentURLSection>
          <ContentURL width={windowWidth - 140}>{auctionurl}</ContentURL>
          <CopyButton2 onClick={() => handleButtonClick(auctionurl)}>
            <HiOutlineDocumentDuplicate></HiOutlineDocumentDuplicate>
          </CopyButton2>
        </ContentURLSection>
      </ContentSection>
      <ContentSection>
        <Contenthead>
          <ContentName>LIVE URL</ContentName>
          <ContentAnnotation>
            <Annotation4>생방송 플랫폼 주소입니다.</Annotation4>
          </ContentAnnotation>
        </Contenthead>
        <ContentURLSection>
          <ContentURL width={windowWidth - 140}>{channelurl}</ContentURL>
          <CopyButton3 onClick={() => handleShow()}>등록하기</CopyButton3>
        </ContentURLSection>
      </ContentSection>
    </Wrapper>
  );
}

export default WidgetComponet;

const Wrapper = styled.div`
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: column;
`;

const Contenthead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ContentSection = styled.div`
  /* border: 1px solid red; */

  @media only screen and (max-width: 360px) {
    width: ${(props) => props.width}px;
    margin: 10px 0;
  }
  @media only screen and (min-width: 360px) {
    width: ${(props) => props.width}px;
    margin: 10px 0;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 700px;
  }
  @media only screen and (min-width: 992px) {
    width: 750px;
  }
  @media only screen and (min-width: 1200px) {
    width: 800px;
  }
  @media only screen and (min-width: 1480px) {
    width: 900px;
  }
`;
const ContentName = styled.div`
  /* border: 1px solid blue; */
  color: #000;
  font-weight: bolder;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 2px -1px 1px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 360px) {
    width: 70px;
    font-size: 9px;
  }
  @media only screen and (min-width: 360px) {
    width: 80px;
    font-size: 9px;
  }
  @media only screen and (min-width: 420px) {
    width: 100px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    width: 110px;
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    width: 150px;
    font-size: 16px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const ContentAnnotation = styled.div`
  /* border: 1px solid green; */
  text-align: right;

  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
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
const Annotation1 = styled.div`
  /* border: 1px solid black; */
  color: red;
  @media only screen and (max-width: 360px) {
    font-size: 5px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 5px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 7px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Annotation2 = styled.div`
  @media only screen and (max-width: 360px) {
    font-size: 5px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 5px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 6px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const ContentURLSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e9ecef;

  border-radius: 5px;
  /* border: 1px solid #000; 보더 스타일 설정 */
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* 그림자 스타일 설정 */

  @media only screen and (max-width: 280px) {
  }
  @media only screen and (min-width: 280px) {
    padding: 3px;
    height: 50px;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
    padding: 5px;
    height: 50px;
  }
  @media only screen and (min-width: 768px) {
    padding: 10px;
    height: 80px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const ContentURL = styled.div`
  word-wrap: break-word;
  margin-left: 10px;
  color: black;
  font-weight: 600;
  filter: ${({ blurOn }) => (blurOn ? "blur(5px)" : "none")};
  @media only screen and (max-width: 360px) {
    width: ${(props) => props.width}px;
    font-size: 9px;
  }
  @media only screen and (min-width: 360px) {
    width: ${(props) => props.width}px;
    font-size: 9px;
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    width: 550px;
    font-size: 16px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const ButtonSection = styled.div``;
const BlindButton = styled(Button)`
  @media only screen and (max-width: 360px) {
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
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
const CopyButton1 = styled(Button)``;
const Annotation3 = styled.div`
  @media only screen and (max-width: 360px) {
    font-size: 5px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 6px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 8px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const CopyButton2 = styled(Button)``;
const Annotation4 = styled.div`
  @media only screen and (max-width: 360px) {
    font-size: 5px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 6px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 8px;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;

const CopyButton3 = styled(Button)`
  @media only screen and (max-width: 360px) {
    font-size: 9px;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9px;
  }
  @media only screen and (min-width: 420px) {
    font-size: 9px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
