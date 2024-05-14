import React from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import { useNavigate } from "react-router-dom";


const ProceedToTest = () => {
    const navigate = useNavigate();

    const handleProceedToTest = (e) => {
      e.preventDefault()
      navigate("/test");
    };

  return (
    <div className="mb-12 pb-1 pt-1 text-center">

        <button
          className="mb-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
          type="button"
          style={{
            background:
              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
          }}
          onClick={handleProceedToTest}
        >
          Proceed To Test
        </button>

    </div>
  )
}

export default ProceedToTest