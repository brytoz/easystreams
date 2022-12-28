import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav";
import Top from "../../components/Top";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import useAuth from "../../contexts/useAuth";


function Users() {

  axios.defaults.withCredentials = true;
  const { user } = useAuth();

  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery(
    ["users"],
    async () => await axios.get(`${process.env.REACT_APP_DB}/login`)
  );

  // users
  if (isError) {
    navigate("/noaccess");
  }


  const [info, setInfo] = useState([]);
  
  useEffect(() => {
    async function getUsers() {
      try {
        await axios
          .get(`${process.env.REACT_APP_DB}/users`)
          .then((result) => {

            setInfo(result.data)
    
          });
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);


  return (
    <div className="w-full">
    <SideNav />
    <div className="w-full flex flex-wrap md:flex-nowrap">
      <div className="hidden md:block w-60 h-full "></div>
      <div className="flex-1 flex-wrap px-4">
        <Top />
        <div className=" flex-wrap  md:flex ">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
              
                  <th scope="col" className="py-3 px-6">
                    Username
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Role
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                {info &&
                  info.map((datas) => (
                    <tr
                      key={datas.id}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      
                      <td className="py-4 px-6">{datas.username}</td>
                      <td className="py-4 px-6">{datas.role}</td> 
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Users;
