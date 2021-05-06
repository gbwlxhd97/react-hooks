import React, { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return; //onBefore이 함수가 아니면 다 죽임.(함수종료)
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle); //컴포넌트가 mount 되었을 때,
    return () => document.removeEventListener("mouseleave", handle); //Unmount 되었을 때
  }, []); //단 한번만 실행하기 위해서 deps를 빈 배열로 선언
};

const App = () => {
  const begForLife = () => console.log("pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>하이</h1>
    </div>
  );
};

export default App;
