import { AiFillDashboard } from 'react-icons/ai'
import { FaUser, FaUsers } from 'react-icons/fa'
import {CiStreamOn } from "react-icons/ci";
import {GiCornerFlag, GiTimeTrap } from "react-icons/gi";
import { BiFootball } from 'react-icons/bi';
import { BsFileImage } from 'react-icons/bs';
import { HiUserAdd } from 'react-icons/hi';
import { GoRocket } from 'react-icons/go';
import { FcLowPriority } from 'react-icons/fc';



export const links = [
    {id:1, title: 'Dashboard', ref: "/dashboard", icon: <AiFillDashboard size={25} />},
    {id:2, title: 'All Users', ref: "/users", icon: <FaUsers size={25} />},
    {id:3, title: 'Send Post', ref: "/send-posts", icon: <GoRocket size={25} />},
    {id:4, title: 'All Post', ref: "/posts", icon: <BiFootball size={25} />},
    {id:5, title: 'Update Scores', ref: "/score-update", icon: <GiCornerFlag size={25} />},
    {id:6, title: 'Update Streaming Link', ref: "/update-link", icon: <CiStreamOn size={25} />},
    {id:7, title: 'Update Match Image', ref: "/update-image", icon: <BsFileImage size={25} />},
    {id:8, title: 'Update Date/Time Info', ref: "/update-date-time-info", icon: <GiTimeTrap size={25} />},
    {id:9, title: 'Update Priority', ref: "/update-priority", icon: <FcLowPriority size={25} />},
    {id:10, title: 'Add User', ref: "/add-user", icon: <HiUserAdd size={25} />},
    {id:11, title: 'My Profile', ref: "/profile", icon: <FaUser size={25} />},
]

{/* <BiFootball className="yellow" size={24} /> */}