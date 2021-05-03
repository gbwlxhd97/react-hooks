import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState(1);
  const IncrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>{item}</h1>
      <button onClick={IncrementItem}>Increse</button>
      <button onClick={decrementItem}>Decrese</button>
    </div>
  );
};
// class 형 컴포넌트로 똑같은 기능을 구현할떄 state 관리.
// eslint-disable-next-line
class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>{item}</h1>
        <button onClick={this.IncrementItem}>Increse</button>
        <button onClick={this.decrementItem}>Decrese</button>
      </div>
    );
  }
  IncrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

export default App;
