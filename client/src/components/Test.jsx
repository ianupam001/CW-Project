import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";

const baseUrl =
  import.meta.env.VITE_BASE_URL_DEV || import.meta.env.VITE_BASE_URL_PROD;

const Test = () => {
  const [questionsAndOptions, setQuestionsAndOptions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [optionCounts, setOptionCounts] = useState(Array(5).fill(0));
  const [loading, setLoading] = useState(true); // For loader
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const url = `${baseUrl}/api/questions/get-questions`;

      try {
        const response = await axios.get(url);
        setQuestionsAndOptions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionChange = (questionId, optionIndex) => {
    const newOptionCounts = [...optionCounts];
    newOptionCounts[optionIndex]++;
    setOptionCounts(newOptionCounts);

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionIndex,
    }));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = async () => {
    setLoading(true); // Show loader
    // Simulate API call or any asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false); // Hide loader
    navigateTo("/result");
  };

  const currentQuestion = questionsAndOptions[currentQuestionIndex];

  // Check if an option has been selected for the current question
  const isOptionSelected = answers.hasOwnProperty(currentQuestionIndex);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner color="blue" size="xl" />
      </div>
    );
  }

  return (
 

    <div
      className="h-screen m-2 flex justify-center items-center rounded-b-lg rounded-l-lg rounded-r-lg "
      style={{
        background:
          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
      }}
    >
      <div className="bg-white w-full shadow-md pt-20 pb-20 pl-20 rounded-md max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">
          Q{currentQuestionIndex + 1}: {currentQuestion.text}
        </h1>
        {currentQuestion.options.map((option, optionIndex) => (
          <div key={optionIndex} className="mb-2">
            <input
              type="radio"
              name={`question_${currentQuestionIndex}`}
              required
              id={`option_${optionIndex}`}
              onChange={() =>
                handleOptionChange(currentQuestionIndex, optionIndex)
              }
              checked={answers[currentQuestionIndex] === optionIndex}
              className="mr-2"
            />
            <label
              htmlFor={`option_${optionIndex}`}
              className="cursor-pointer text-gray-800"
            >
              {option}
            </label>
          </div>
        ))}
        <div className="mt-4">
          <button
            className="mb-3 inline-block w-50 mr-2 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="button"
            style={{
              background:
                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
            }}
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className={`mb-3 inline-block w-50 mr-2 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] ${
              !isOptionSelected && "opacity-50 cursor-not-allowed"
            }`}
            style={{
              background:
                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
            }}
            onClick={
              currentQuestionIndex === questionsAndOptions.length - 1
                ? handleSubmit
                : handleNext
            }
            disabled={!isOptionSelected}
          >
            {currentQuestionIndex === questionsAndOptions.length - 1
              ? "Submit"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
