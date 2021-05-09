import React, { useState, useEffect, useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true); // APP 에서는 ture of false만 보내니까 callback 에서는 true만 보내서 full스크린 해줌
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false); // APP 에서는 ture of false만 보내니까 callback 에서는 false만 보내서 full스크린을 해제 해줌
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFulls = (isFull) => {
    //콜백 함수생성
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  console.log(element);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://picsum.photos/200/" alt="random" />
        <button onClick={triggerFull}>Image full</button>
        <button onClick={exitFull}>Image not full</button>
      </div>
    </div>
  );
};

export default App;
