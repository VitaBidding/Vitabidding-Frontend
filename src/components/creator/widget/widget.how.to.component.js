import React, { useState, useEffect } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

function WidgetHowToComponent() {
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
  return (
    <Wrapper width={windowWidth - 30}>
      <Title>위젯 등록 방법</Title>

      <VideoWrapper>
        <YouTube
          videoId={`${process.env.REACT_APP_YOUTUBE}`}
          opts={{
            playerVars: {
              autoplay: 0, // 자동재생 끔
              rel: 0, //관련 동영상 표시하지 않음
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </VideoWrapper>
    </Wrapper>
  );
}

export default WidgetHowToComponent;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  @media only screen and (max-width: 360px) {
    width: ${(props) => props.width}px;
    margin: 15px 0;
  }
  @media only screen and (min-width: 360px) {
    width: ${(props) => props.width}px;
    margin: 15px 0;
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

const Title = styled.div`
  /* border: 1px solid blue; */
  color: #010b13;
  font-weight: bolder;
  background-color: #f1f2f3;
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

// Responsive Video Wrapper
const VideoWrapper = styled.div`
  position: relative;
  width: 100%; /* 부모의 너비에 맞추어 100% */
  padding-bottom: 56.25%; /* 16:9 비율 유지 (높이를 비율에 맞추어 설정) */
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
