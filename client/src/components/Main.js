import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const inputRef = useRef(null);

  return (
    <div className="container">
      <h1 className="title text-light">QuikQuiz</h1>
      <ol>
        <li>You will be asked 10 questions</li>
        <li>Every question have ONE point</li>
        <li>Each question have three options</li>
        <li>You can choose only one option</li>
        <li>You can review and change answers before finish</li>
      </ol>

      <form id="form">
        <input ref={inputRef} type="text" placeholder="Enter Your Name" />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Main;
