import React from "react";
import "../../src/styles/Quiz.css";
import Questions from "./Questions";

const Quiz = () => {
  
  function onNext() {
    console.log("on next click");
  }
  function onPrev() {
    console.log("on prev click");
  }


  return (
    <div className="container">
      <h1 className="title text-light">QuikQuiz</h1>

      {/* display questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
