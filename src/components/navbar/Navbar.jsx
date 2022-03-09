import { IoReceiptOutline } from "react-icons/io5";
import { AiOutlineShop, AiOutlineMessage, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";

import {Link} from "react-router-dom"

import logo from "../../logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar flex flex-col justify-center border py-3 rounded-xl">
      <div className="navbar-item navbar-logo">
        <Link to="/" className="logo-link">
            <img src={logo} alt="logo" className="logo object-cover" />
        </Link>
      </div>
      <ul className="Menu">
        <li key={1} className="nav-item my-8 cursor-pointer">
          <Link to="/" className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500">
            <div className="nav-item__icon mb-2">
              <AiOutlineShop className="text-3xl fill-pink-600 group-hover:fill-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">Home</span>
            </div>
          </Link>
        </li>
        <li key={2} className="nav-item my-8 cursor-pointer">
          <Link to="/chat" className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500">
            <div className="nav-item__icon mb-2">
              <AiOutlineMessage className="text-3xl fill-pink-600 group-hover:fill-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">Chat</span>
            </div>
          </Link>
        </li>
        <li key={3} className="nav-item my-8 cursor-pointer">
          <Link to="/bill" className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500">
            <div className="nav-item__icon mb-2">
              <IoReceiptOutline className="text-3xl stroke-pink-600 group-hover:stroke-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">Bill</span>
            </div>
          </Link>
        </li>
        <li key={4} className="nav-item my-8 cursor-pointer">
          <Link to="/settings" className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500">
            <div className="nav-item__icon mb-2">
              <AiOutlineSetting className="text-3xl fill-pink-600 group-hover:fill-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">Settings</span>
            </div>
          </Link>
        </li>
        <li key={5} className="nav-item my-8 cursor-pointer">
          <Link to="/login" className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500">
            <div className="nav-item__icon mb-2">
              <HiOutlineLogin className="text-3xl stroke-pink-600 group-hover:stroke-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">Log In</span>
            </div>
          </Link>
        </li>
      </ul>
      <ul className="Menu mt-8">
        <li key={6} className="nav-item cursor-pointer">
            <Link to="/login" className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500">
                <div className="nav-item__icon mb-2">
                <AiOutlineLogout className="text-3xl fill-gray-400 group-hover:fill-white" />
                </div>
                <div className="navbar-item__text">
                <span className="text-sm text-gray-400 group-hover:text-white">Log Out</span>
                </div>
            </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
