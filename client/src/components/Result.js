import React from "react";
import "../styles/Result.css";

export default function Result() {
 

  return (
    <div className="container">
      <h1 className="title text-light">QuikQuiz</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Daily Tuition</span>
        </div>
      </div>
    </div>
  );
}
