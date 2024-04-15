import React from "react";
import { infos } from "../data";

const PsychometricTestInfo = () => {
  return (
    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
        <h4 className="mb-12 mt-0 pb-1 text-xl font-semibold">
          Psychometric Test & Career Counselling
        </h4>
      {infos.map((info) => {
        const { id, icon, details } = info;
        return (
          <div key={id}>
            <ul>
              <li>
                {details.map((detail) => {
                  return (
                    <div className="flex items-center" key={detail}>
                      <img
                        src={icon}
                        className="h-6 w-6 mr-3 text-green-500"
                        alt="icon-checked"
                      />
                      <p className="text-sm">{detail}</p>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PsychometricTestInfo;
