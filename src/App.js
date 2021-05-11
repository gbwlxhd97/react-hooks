import React, { useState, useEffect, useRef } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      //허용의값임
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return; //허용상태가아니라면 함수호출 x
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
const App = () => {
  const triggerNotif = useNotification("하잉");
  return (
    <div className="App">
      <h1>hi</h1>
      <button onClick={triggerNotif}></button>
    </div>
  );
};

export default App;
