import React from "react";

const PreviousButton = ({currentQuestion,setCurrentQuestion,prevQuestion}) => {
  const handlePrevQuestion = () => {
  setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };
  return (
    <div>
      <button
        onClick={handlePrevQuestion}
        disabled={currentQuestion === 0}
        className="px-4 py-2 mr-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
      >
        Previous
      </button>
    </div>
  );
};

export default PreviousButton;
