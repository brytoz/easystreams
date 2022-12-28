import axios from "axios";
import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import Top from "../../components/Top";
import useAuth from "../../contexts/useAuth";

function Post() {
  axios.defaults.withCredentials = true;

  const { user } = useAuth();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [home_img, setHomeImage] = useState([]);
  const [away_img, setAwayImage] = useState([]);
  const [title, setTitle] = useState("");
  const [home_team, setHome] = useState("");
  const [away_team, setAway] = useState("");
  const [match_time, setTime] = useState("");
  const [match_day, setDate] = useState("");
  const [league, setLeague] = useState("");
  const [sport_type, setSport] = useState("");
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [priority, setPriority] = useState("");

  // const handleFormUpload = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios
  //       .post(`${process.env.REACT_APP_DB}/post`, {
  //         title,
  //         home_img,
  //         away_img,
  //         home_team,
  //         away_team,
  //         match_time,
  //         match_day,
  //         league,
  //         sport_type,
  //         posted_by: user,
  //         link_one: one,
  //         link_two: two,
  //         link_three: three,
  //         link_four: four,
  //         link_five: five,
  //       })
  //       .then(async (result) => {
  //         if (result.status === 200) {
  //           setSuccess(true);
  //           setStatus(result.data);
  //           setTimeout(() => {
  //             window.location.reload(true);
  //           }, 3000);
  //         } else {
  //           setError(true);
  //           setStatus(result.data);
  //         }

  //         setTimeout(() => {
  //           setStatus("");
  //           setSuccess(false);
  //           setError(false);
  //         }, 5000);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };



  const handleFormUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("home_img", home_img);
    formData.append("away_img", away_img);
    formData.append("home_team", home_team);
    formData.append("away_team", away_team);
    formData.append("match_time", match_time);
    formData.append("title", title);
    formData.append("match_day", match_day);
    formData.append("league", league);
    formData.append("posted_by", user);
    formData.append("sport_type", sport_type);

    formData.append("link_one", one);
    formData.append("link_two", two);
    formData.append("link_three", three);
    formData.append("link_four", four);
    formData.append("link_five", five);
    formData.append("priority", priority);

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/post`, formData)
        .then(async (result) => {
          if (result.status === 200) {
            setSuccess(true);
            console.log(result)
            setStatus(result.data);
            // setTimeout(() => {
            //   window.location.reload(true);
            // }, 3000);
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
      setError(true);
      console.log(err)
      setStatus(err.message);
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
              <form
                encType="multipart/form-data"
                method="POST"
                onSubmit={handleFormUpload}
                className="pt-8 md:pt-3"
              >
                <div className="text-3xl font-bold w-full pb-4">
                  Post Upcoming Livestream Link data (use ID)
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

                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Sport Type
                    </label>
                    <select
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={sport_type}
                      onChange={(e) => {
                        setSport(e.target.value);
                      }}
                    >
                      <option value="">Select sport</option>
                      <option value="Football">Football</option>
                      <option value="Tennis">Tennis</option>
                      <option value="Basketball">Basketball</option>
                    </select>
                  </div>

                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Home Team
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      onChange={(e) => {
                        setHome(e.target.value);
                      }}
                      type="text"
                      placeholder="Manchester Utd"
                    />
                  </div>

                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Away Team
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      onChange={(e) => {
                        setAway(e.target.value);
                      }}
                      type="text"
                      placeholder="e.g Barcelona"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Home Team Image
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="home_img"
                      id="home_img"
                      onChange={(e) => {
                        setHomeImage(e.target.files[0]);
                      }}
                      type="file"
                    />
                  </div>

                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Away Team Image
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="away_img"
                      name="away_img"
                      onChange={(e) => {
                        setAwayImage(e.target.files[0]);
                      }}
                      type="file"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Title Intro
                    </label>
                    <textarea
                      class=" no-resize appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                      id="message"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      placeholder="Description about the match. Make it short. (1000 words max)"
                    ></textarea>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Match Date
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                      type="date"
                      placeholder="Date"
                    />
                  </div>

                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Match Time
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                      type="time"
                      placeholder="Time"
                    />
                  </div>

                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-zip"
                    >
                      League
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      onChange={(e) => {
                        setLeague(e.target.value);
                      }}
                      type="text"
                      placeholder="England PL"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      First Stream Link
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      onChange={(e) => {
                        setOne(e.target.value);
                      }}
                      type="text"
                      placeholder="https://example...."
                    />
                  </div>

                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Second Stream Link
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      onChange={(e) => {
                        setTwo(e.target.value);
                      }}
                      type="text"
                      placeholder="https://example...."
                    />
                  </div>

                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Third Stream Link
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      onChange={(e) => {
                        setThree(e.target.value);
                      }}
                      type="text"
                      placeholder="https://example...."
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Fourth Stream Link
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      onChange={(e) => {
                        setFour(e.target.value);
                      }}
                      placeholder="https://example...."
                    />
                  </div>

                  <div class="w-full md:w-1/3 px-3  mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Fifth Stream Link
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      onChange={(e) => {
                        setFive(e.target.value);
                      }}
                      placeholder="https://example...."
                    />
                  </div>

                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Select Priority
                    </label>
                    <select
                      class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      value={priority}
                      onChange={(e) => {
                        setPriority(e.target.value);
                      }}
                    >
                      <option value="">Select Priority</option>
                      <option value="A">High</option>
                      <option value="B">Medium</option>
                      <option value="C">Low</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black  transition duration-200 rounded shadow-md bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-opacity-75 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                  >
                    Post Data
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

export default Post;
