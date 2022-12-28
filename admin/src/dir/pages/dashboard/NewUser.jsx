import axios from "axios";
import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import Top from "../../components/Top";

function NewUser() {
  axios.defaults.withCredentials = true;

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const handleNewUser = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/register`, {
          username: username,
          role: role,
          password: password,
        })
        .then(async (result) => {
          if (result.status === 200) {
            setSuccess(true);
            setStatus(result.data);
            setTimeout(() => {
              window.location.reload(true);
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
    <div className="w-full">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full "></div>
        <div className="flex-1 flex-wrap px-4">
          <Top />
          <div className=" flex-wrap  md:flex ">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12 py-3">
              <form onSubmit={handleNewUser} className="pt-8 md:pt-3">
                <div className="text-3xl font-bold w-full pb-4">
                  Add New User
                </div>
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
                <div className="mb-1 sm:mb-2">
                  <label htmlFor="id" className="inline-block mb-1 font-medium">
                    Username
                  </label>
                  <input
                    placeholder="Enter the Users' username ID"
                    required
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full  px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      for="grid-state"
                    >
                      Role
                    </label>
                    <div class="relative">
                      <select
                        class="block appearance-none w-full border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white "
                        id="grid-state"
                        value={role}
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Others">Others</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
 
                </div>

                <div className="mb-1 sm:mb-2">
                  <label className="inline-block mb-1 font-medium">
                    Password
                  </label>
                  <input
                    placeholder="***"
                    required
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide   transition duration-200 rounded shadow-md bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-opacity-75 focus:ring-opacity-50 text-black focus:shadow-outline focus:outline-none"
                  >
                    Update Value
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
