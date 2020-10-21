import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [prev, setprev] = useState(false);
  const handleClick = () => {
    setprev(!prev);
  };
  let ans =
    "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click here
      </button>
      {prev ? <p id="para">{ans}</p> : null}
    </div>
  );
}

export default App;
