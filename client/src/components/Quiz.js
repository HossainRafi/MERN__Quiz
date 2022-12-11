import React from "react";
import "../../src/styles/Quiz.css";


function onNext() {
  console.log("on next click");
}
function onPrev() {
  console.log("on prev click")
}

const Quiz = () => {
  return (
    <div className="container">
      <h1 className="title text-light">QuikQuiz</h1>

      {/* display questions */}
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
