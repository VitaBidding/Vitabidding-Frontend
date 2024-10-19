import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import io from "socket.io-client";
import Statusboard from "../../components/thirdparty/statusboard";
import Bidbox from "../../components/thirdparty/bidbox";
import BidSound from "./sound/bidsound.mp3"; // 입찰 효과음 파일
import EndBox from "../../components/thirdparty/endbox";
import EndSound from "./sound/endsound.mp3";
function ThirdpartyContainer({ roomName }) {
  // 타이머와 오디오 관련 ref 설정
  const timerRef = useRef(null);
  const audioRef = useRef(new Audio(BidSound));
  const audioTimeoutRef = useRef(null);
  const audioRef1 = useRef(new Audio(EndSound));
  const audioTimeoutRef1 = useRef(null);
  // 상태 관리
  const [showStatusboard, setShowStatusboard] = useState(false);
  const [showBid, setShowBid] = useState(true);
  const [showEndComponent, setShowEndComponent] = useState(false);
  const [EndComment, setEndComment] = useState(false);
  const [socket, setSocket] = useState(null);

  // 타이머 관련 상태
  const initialTime = 20;
  const [time, setTime] = useState(initialTime * 100);
  const [running, setRunning] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  // 입찰 관련 상태
  const [selectdate, setselectdate] = useState({});
  const [biduser, setbiduser] = useState("비타비딩");
  const [bidpoint, setbidpoint] = useState("23000000");
  const [blinkKey, setBlinkKey] = useState(0);

  // 입찰 효과음 재생 함수
  const playBidSound = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play().catch((error) => console.error("오디오 재생 실패:", error));

    // 기존 오디오 타임아웃 제거
    if (audioTimeoutRef.current) {
      clearTimeout(audioTimeoutRef.current);
    }

    // 1초 후 오디오 정지를 위한 새 타임아웃 설정
    audioTimeoutRef.current = setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 1000);
  };

  const playEndSound = () => {
    const audio1 = audioRef1.current;
    audio1.currentTime = 0;
    audio1
      .play()
      .catch((error) => console.error("엔드 오디오 재생 실패:", error));

    // 기존 오디오 타임아웃 제거
    if (audioTimeoutRef1.current) {
      clearTimeout(audioTimeoutRef1.current);
    }

    // 2.5초 후 오디오 정지를 위한 새 타임아웃 설정
    audioTimeoutRef1.current = setTimeout(() => {
      audio1.pause();
      audio1.currentTime = 0;
    }, 2500);
  };

  // 컴포넌트 언마운트 시 정리 작업
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (audioTimeoutRef.current) {
        clearTimeout(audioTimeoutRef.current);
      }
      if (audioTimeoutRef1.current) {
        clearTimeout(audioTimeoutRef1.current);
      }
    };
  }, []);

  // 오디오 초기 설정
  useEffect(() => {
    const audio = audioRef.current;
    audio.preload = "auto"; // 오디오 미리 로드
    const audio1 = audioRef1.current;
    audio1.preload = "auto"; // 오디오 미리 로드
    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio1.pause();
      audio1.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (timerFinished) {
      setShowStatusboard(false);
      setShowEndComponent(true);
      playEndSound();
      // 여기에 최종 낙찰자와 낙찰가를 설정하는 로직을 추가할 수 있습니다.
      setEndComment(true);
      timerRef.current = setTimeout(() => {
        setShowEndComponent(false);
        setShowStatusboard(true);
      }, 10000);
    }
  }, [timerFinished]);

  // 소켓 연결 설정
  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "https" : "http";
    const SERVER_URL = `${protocol}://localhost:8080`;

    const newSocket = io(`${SERVER_URL}/vita`, {
      withCredentials: true,
    });
    setSocket(newSocket);

    newSocket.emit("joinRoom", roomName);

    // 선택 데이터 수신 시 처리
    newSocket.on("select", (data) => {
      setselectdate(data);
      setShowStatusboard(true);
    });

    // 입찰 데이터 수신 시 처리
    newSocket.on("bid", (data) => {
      setbiduser(data);
      setbidpoint(data);
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      newSocket.disconnect();
    };
  }, []);
  // 컴포넌트 표시 및 입찰 처리 함수,물건 선택 함수
  const handlebid = () => {
    // 기존 타이머와 오디오 타임아웃 제거
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (audioTimeoutRef.current) {
      clearTimeout(audioTimeoutRef.current);
    }

    // 상태 초기화 및 설정
    setRunning(false);
    setTime(initialTime * 100);
    setBlinkKey((prevKey) => prevKey + 1);
    setbiduser("data");
    setbidpoint("100000");
    playBidSound();
    setShowStatusboard(false);
    setShowBid(true);
    setRunning(true);

    // 10초 후 입찰 박스 숨기기
    timerRef.current = setTimeout(() => {
      setShowBid(false);
      setShowStatusboard(true);
    }, 10000);
  };

  const handleselcet = () => {
    // 타이머 및 오디오 관련 정리
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (audioTimeoutRef.current) {
      clearTimeout(audioTimeoutRef.current);
    }
    if (audioTimeoutRef1.current) {
      clearTimeout(audioTimeoutRef1.current);
    }

    // 오디오 초기화
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;

    const audio1 = audioRef1.current;
    audio1.pause();
    audio1.currentTime = 0;
    // 상태 초기화
    setShowStatusboard(true);
    setShowBid(false);
    setShowEndComponent(false);
    setEndComment(false);
    setTime(initialTime * 100);
    setRunning(false);
    setTimerFinished(false);

    // 입찰 관련 상태 초기화
    setbiduser("");
    setbidpoint("");
    setBlinkKey(0);
  };
  return (
    <Container>
      {showStatusboard && (
        <Statusboard
          selectdate={selectdate}
          biduser={biduser}
          bidpoint={bidpoint}
          time={time}
          running={running}
          setTime={setTime}
          setTimerFinished={setTimerFinished}
          EndComment={EndComment}
        />
      )}

      {showBid && (
        <BlinkDiv key={blinkKey}>
          <Bidbox biduser={biduser} bidpoint={bidpoint} />
        </BlinkDiv>
      )}
      {showEndComponent && <EndBox biduser={biduser} bidpoint={bidpoint} />}
      {/* <button onClick={handlebid}>입찰 데이터 수신</button>
      <button onClick={handleselcet}>물건 선택 데이터 수신</button> */}
    </Container>
  );
}

export default ThirdpartyContainer;

// 스타일드 컴포넌트
const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: calc(100vw * 0.75); /* 800:600 비율 적용 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 깜빡임 애니메이션 정의
const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

// 깜빡이는 효과를 가진 div
const BlinkDiv = styled.div`
  animation: ${blink} 0.5s ease-in-out;
`;
