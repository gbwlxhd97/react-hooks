import React, { useState, useEffect, useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    //존재하지않거나 function이 아닐때,
    return; //조건이 일치하면 함수 종료.
  }
  if (onCancel || typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      //브라우저에 메세지를 가지고 있으면 콜백함수 실행
      onConfirm();
    } else {
      onCancel(); // 거절함수
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("삭제되어가고있음.");
  const abort = () => console.log("Abort");
  const confirmDelete = useConfirm("삭제할거니?", deleteWorld, abort); //3번째 라인 정의한 콜백함수로 deleteworld(onConfirm),abort(onCancel)콜백.
  return (
    <div className="App">
      <h1>하이</h1>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
};

export default App;
