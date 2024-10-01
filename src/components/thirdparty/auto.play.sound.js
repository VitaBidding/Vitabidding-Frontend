import React, { forwardRef, useImperativeHandle } from "react";

const AutoPlaySound = forwardRef((props, ref) => {
  const audioRef = React.useRef(null);

  // 외부에서 호출 가능한 메서드 정의
  useImperativeHandle(ref, () => ({
    playSound() {
      if (audioRef.current) {
        audioRef.current.play();
      }
    },
  }));

  return (
    <audio ref={audioRef}>
      <source src={props.src} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
});

export default AutoPlaySound;
