import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import Logo from "../assets/logo.png";
import { Spinner } from "@material-tailwind/react";

const Login = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Attempt to login
      const response = await login(loginId, password);
      if (response.status === 200) {
        setLoading(false);
        navigate("/dashboard");
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-20">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img className="mx-auto w-48" src={Logo} alt="logo" />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Counselling Wala
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Login Id input--> */}
                      <TEInput
                        type="text"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                        className="mb-4 outline-none border"
                        placeholder=" Login Id"
                        required
                      ></TEInput>

                      {/* <!--Password input--> */}
                      <TEInput
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 outline-none border"
                        placeholder=" Password"
                        required
                      ></TEInput>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                          onClick={handleSubmit}
                        >
                          {loading ? (
                            "Log in"
                          ) : (
                            <Spinner color="blue" size="xl" />
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Psychometric Test & Career Counselling
                    </h4>
                    <p className="text-sm">
                      Our psychometric tests provide detailed reports for
                      students in classes IX to XII and college, offering
                      insights into strengths, weaknesses, and career aptitudes.
                      We guide students in stream and subject selection, explore
                      diverse career options, and provide personalized guidance
                      for effective career planning and profile building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
