import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";


function Login() {
  axios.defaults.withCredentials = true;


   const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/login`, {
          username: username,
          password: password,
        })
        .then(async (result) => {
          if (result.status === 200) {
            setSuccess(true);
            setStatus(result.data.data);
            dispatch({ type: "LOGIN", payload: username });
            setTimeout(() => {
              navigate("/dashboard");
            }, 3000);
          } else {
            setError(true);
            setStatus(result.data);
          }

          setTimeout(() => {
            setStatus("");
            setSuccess(false);
            setError(false);
          }, 5000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative">
      <div className="relative    bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-opacity-75">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="text-black/75 w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6  text-3xl md:text-6xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                Administrator
              </h2>
              <p className="max-w-xl mb-4 text-base  md:text-lg">
                Easystreams admin login. Have troubles logging in? Contact the developer.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Login
                </h3>

                <div className="flex justify-center ">
                  {error && (
                    <span className="text-center text-red-600 bold">
                      {status}
                    </span>
                  )}
                  {success && (
                    <span className="text-center text-xl text-green-600 bold">
                      {status}
                    </span>
                  )}
                </div>
                <form onSubmit={handleLogin}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="Username"
                      className="inline-block mb-1 font-medium"
                    >
                      Username
                    </label>
                    <input
                      placeholder="Username"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="username"
                      name="username"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="********"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black/75 transition duration-200 rounded shadow-md bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-opacity-75  focus:shadow-outline focus:outline-none"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-center flex-wrap justify-center">
                    <p className="text-xs text-gray-600 sm:text-sm cursor-pointer">
                      Forgotten Password? Contact Developer
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
