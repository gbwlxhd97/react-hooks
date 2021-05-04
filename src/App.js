import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I`m the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I`m the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return; //allTabs가 false 일때, 배열이 아닐 때 리턴 == 에러핸들링같음
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((currentItem, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {currentItem.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
