import React from "react";
import { testInstructions } from "../data";
const TestInstructions = () => {
  return (
    <div className="mb-12 pb-1 pt-1">
      {testInstructions.map((instructions) => {
        const { id, title, points } = instructions;
        return (
          <div key={id}>
            <h4 className="mb-6 text-xl font-semibold">{title}</h4>
            {points.map((point, index) => (
              <ul key={index} >
                <li className="mb-2 font-semibold text-blue-500">
                  <p className="mb-1 text-sm font-semibold">
                    {point}
                  </p>
                </li>
              </ul>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default TestInstructions;
