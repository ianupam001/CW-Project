import React, { useEffect, useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { Spinner } from "@material-tailwind/react";
import useAuth from "../hooks/useAuth";
import Logout from "../pageComponents/Logout";

const AdminPanel = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const { register, getUsers } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(loginId, password);
      if (response) {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Unable to create user", error);
    }
  };
  // fetching the users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    // fetch users initially
    fetchUsers();
    //fetch user after 2second
    const intervalId = setInterval(fetchUsers, 2000);

    // Clean up interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12 border-r border-neutral-800 dark:border-neutral-600">
                  <div className="md:mx-6 md:p-12">
                    {/* Left content */}
                    <div className="text-center">
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Create Users
                      </h4>
                    </div>
                    <form>
                      <p className="mb-4">Enter details to create users</p>
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
                            "Create User"
                          ) : (
                            <Spinner color="blue" size="xl" />
                          )}
                        </button>
                        <div>
                        <Logout route="/cw-admin" />

                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column container */}
                <div className="lg:w-6/12">
                  <div className="flex justify-center items-center rounded-b-lg bg-white lg:rounded-r-lg lg:rounded-bl-none  dark:bg-neutral-800">
                    <div className="px-4 py-6 text-neutral-800 dark:text-neutral-200 md:mx-6 md:p-12">
                      {/* Right content */}
                      <div>
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Total User list
                        </h4>
                        {users.length === 0 ? (
                          <Spinner color="blue" size="xl" />
                        ) : (
                          users.map((user,index) => (
                            <ul key={index}>
                              <li>
                                {user.loginId}
                              </li>
                            </ul>
                          ))
                        )}
                      </div>
                    </div>
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

export default AdminPanel;
