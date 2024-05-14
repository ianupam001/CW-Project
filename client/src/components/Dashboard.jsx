import React from "react";
import { useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import Logo from "../assets/logo.png";
import { testInstructions, infos } from "../data";
import TestInstructions from "../pageComponents/TestInstructions";
import ProceedToTest from "../pageComponents/ProceedToTest";
import PsychometricTestInfo from "../pageComponents/PsychometricTestInfo";
import Logout from "../pageComponents/Logout";

const Dashboard = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-indigo-500 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full bg-white shadow-md rounded-md p-6">
        <div className="text-center mb-6">
          <img src={Logo} alt="Logo" className="mx-auto mb-4" style={{ width: '100px' }} />
          <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
        </div>
        <div className="flex flex-row justify-center">
        <TestInstructions />
        </div>
      
        <ProceedToTest />
      </div>
    </section>
  );
};

export default Dashboard;
