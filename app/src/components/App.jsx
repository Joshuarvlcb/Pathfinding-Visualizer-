import React from "react";
import Header from "../layout/Header";
import Legend from "../layout/Legend";
import Board from "../layout/Board";

export const App = () => {
  return (
    <div className = "app">
      <Header />
      <Legend />
      <Board />
    </div>
  );
};

export default App;
