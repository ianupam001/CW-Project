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
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-7/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img className="mx-auto w-48" src={Logo} alt="logo" />
                    </div>
                    <TestInstructions />
                    <ProceedToTest />
                  </div>
                </div>
                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-5/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <PsychometricTestInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
   
  );
};
export default Dashboard;