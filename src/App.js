import React, { useState, useEffect, useRef } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    //handle효과
    setState({ y: window.scrollY, x: window.scrollX }); //setState로 state값 변경을 적용해줌.
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); //event를 추가했으면 반드시 같은 event,함수명 동일하게 지워줘야함.
  }, []);

  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>hi</h1>
    </div>
  );
};

export default App;
