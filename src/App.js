import React, { useState, useEffect, useRef } from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; //크롬에만 있는 기능 스펠링틀리는거 조심.
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>하이</h1>
      <button onClick={enablePrevent}>보호</button>
      <button onClick={disablePrevent}>안보호</button>
    </div>
  );
};

export default App;
