/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  AiOutlineShop,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineBook
} from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";

import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import "../../assets/css/Navbar.css";
import avatar from "../../assets/images/user.jpg";

function Navbar() {
  return (
    <div className="navbar flex flex-col py-3 rounded-xl mr-10 border border-gray-300">
      <div className="navbar-item navbar-logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo object-cover" />
        </Link>
      </div>
      <ul className="Menu">
        <li key={1} className="nav-item my-8 cursor-pointer">
          <Link
            to="/"
            className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500"
          >
            <div className="nav-item__icon mb-2">
              <AiOutlineShop className="text-3xl fill-pink-600 group-hover:fill-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">
                Home
              </span>
            </div>
          </Link>
        </li>
        <li key={2} className="nav-item my-8 cursor-pointer">
          <Link
            to="/about"
            className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500"
          >
            <div className="nav-item__icon mb-2">
              <AiOutlineBook className="text-3xl fill-pink-600 group-hover:fill-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">
                About
              </span>
            </div>
          </Link>
        </li>
        <li key={5} className="nav-item my-8 cursor-pointer">
          <Link
            to="/settings"
            className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500"
          >
            <div className="nav-item__icon mb-2">
              <AiOutlineSetting className="text-3xl fill-pink-600 group-hover:fill-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">
                Settings
              </span>
            </div>
          </Link>
        </li>
        <li key={6} className="nav-item my-8 cursor-pointer">
          <Link
            to="/login"
            className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500"
          >
            <div className="nav-item__icon mb-2">
              <HiOutlineLogin className="text-3xl stroke-pink-600 group-hover:stroke-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">
                Log In
              </span>
            </div>
          </Link>
        </li>
      </ul>
      <ul className="Menu mt-8">
        <li
          key={7}
          className="nav-item cursor-pointer flex justify-center mb-3"
        >
          <div></div>
          <div>
            <img
              src={avatar}
              alt="Profile image"
              className="inline object-cover w-12 h-12 rounded-full"
            />
          </div>
        </li>
        <li key={7} className="nav-item cursor-pointer">
          <Link
            to="/login"
            className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500"
          >
            <div className="nav-item__icon mb-2">
              <AiOutlineLogout className="text-3xl fill-gray-400 group-hover:fill-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-gray-400 group-hover:text-white">
                Log Out
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
