import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title; //4번라인 title로 받은값으로 변환
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
//initialTitle은 Loading...으로 값 변경
const App = () => {
  const titleUpdator = useTitle("Loading ..."); //title Updator는 setTitle과 동일함
  setTimeout(() => titleUpdator("home"), 5000);
  return (
    <div className="App">
      <h1>하이</h1>
    </div>
  );
};

export default App;
