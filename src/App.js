import React, { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  //해당 element 안에 나타나기 위해서 useEffect 사용
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }
    if (element.current) {
      const { current } = element;
      current.style.opacity = 1;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    }
  }, [duration, delay]);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(4, 4);
  return (
    <div className="App">
      <h1 {...fadeInH1}>하이</h1>
      <p {...fadeInP}>lorem itsum 벽력일섬</p>
    </div>
  );
};

export default App;
