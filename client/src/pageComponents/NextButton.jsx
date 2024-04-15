import React from "react";

const NextButton = ({ questions, currentQuestion,prevQuestion,setCurrentQuestion}) => {
  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };
  return (
    <div>
      <button
        onClick={handleNextQuestion}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >Next</button>
    </div>
  );
};

export default NextButton;
