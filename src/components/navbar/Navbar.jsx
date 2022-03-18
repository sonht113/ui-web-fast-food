/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  AiOutlineShop,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineContacts
} from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logodf.png";
import "../../assets/css/Navbar.css";
import {useSelector} from "react-redux"
import {selectRemainingUser} from "../../redux/selector";
import {useDispatch} from "react-redux";
import userSlice from "../settings/content-settings/userSlice";

function Navbar() {
  const user = useSelector(selectRemainingUser)
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(userSlice.actions.updateUser(undefined))
    localStorage.removeItem("currentUser")
    localStorage.removeItem("isLogin")
  }

  return (
    <div className="navbar flex sticky top-0 left-0 flex-col py-3 rounded-xl mr-10 h-[100%]">
      <div className="navbar-item navbar-logo">
        <Link to="/" className="logo-link flex items-center justify-center">
          <div></div>
          <img src={logo} alt="logo" className="logo object-cover w-2/4" />
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
            to="/contact-us"
            className="nav-link group Itemlink flex flex-col items-center py-4  rounded-xl hover:bg-rose-600 duration-500"
          >
            <div className="nav-item__icon mb-2">
              <AiOutlineContacts className="text-3xl fill-pink-600 group-hover:fill-white" />
            </div>
            <div className="navbar-item__text">
              <span className="text-sm text-rose-600 group-hover:text-white">
              Contact us
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
        {
          user
            ? null
            : <li key={6} className="nav-item my-8 cursor-pointer">
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
        }
      </ul>
      {
        user
        ? <ul className="Menu mt-8">
            <li
                key={7}
                className="nav-item cursor-pointer flex justify-center mb-3"
            >
              <div></div>
              <div>
                <Link to="/settings">
                  <img
                      src={user.image}
                      alt="Profile image"
                      className="inline object-cover w-12 h-12 rounded-full"
                  />
                </Link>
              </div>
            </li>
            <li key={8} className="nav-item cursor-pointer" onClick={() => handleLogOut()}>
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
        : null
      }
    </div>
  );
}

export default Navbar;
