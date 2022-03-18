import React from "react";
import LoginImage from "../../assets/images/login-image.jpg";
import Logo from "../../assets/images/logodf.png"
import { HiOutlineLockClosed, HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import userSlice from "../settings/content-settings/userSlice";

function LoginForm() {
  const dispatch = useDispatch()
  const handleUpdateUser = () => {
    const user= {
      image: localStorage.getItem("userAvatar") || '/images/user.jpg',
      email: 'nhom5@gmail.com',
      userName: 'Nhom-5'
    }
    dispatch(userSlice.actions.updateUser(user))
    localStorage.setItem("isLogin", "1")
  }
  return (
    <div className="Login grid grid-cols-12 w-3/4 mx-auto mt-24 border-2 shadow-2xl overflow-hidden rounded-2xl">
      <div className="Login-Image col-span-8">
        <img
          src={LoginImage}
          alt=""
          className="object-cover"
          style={{ maxWidth: "100%", height: "100%" }}
        />
      </div>
      <div className="Form-Login col-span-4">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src={Logo}
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="my-5">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex-col flex 2xl:flex-row items-center justify-between">
                <div className="flex items-center mb-5 2xl:mb-0">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/"
                    className="font-medium text-pink-600 hover:text-pink-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <Link to="/">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => handleUpdateUser()}
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <HiOutlineLockClosed
                        className="h-5 w-5 text-white group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign in
                  </button>
                </Link>
              </div>
              <div className="text-sm text-center">
                <p className="font-medium text-gray-400">
                  Do you have an account? <br />
                  <Link
                    className="cursor-pointer text-black hover:text-pink-600 ml-1"
                    to="/sign-up"
                  >
                    Sign up <HiArrowSmRight className="inline-block" />
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
