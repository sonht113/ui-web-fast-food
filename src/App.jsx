import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AnimatePresence} from "framer-motion";


import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUs";
import Settings from "./pages/Settings";
import Login from './pages/Login';
import Register from './pages/Register';
import {useEffect, useState} from "react";
import Lottie from "lottie-react";
import appPhone from "./lotties/app-phone.json"
import {useDispatch, useSelector} from "react-redux";
import userSlice from "./components/settings/content-settings/userSlice";
import {selectRemainingUser} from "./redux/selector";


function App() {
  const [showNote, setShowNote] = useState(false)

  const user = useSelector(selectRemainingUser)

  const dispatch = useDispatch()
  useEffect(() => {
    setShowNote(window.innerWidth < 1280)
    window.addEventListener("resize", () => {
      setShowNote(window.innerWidth < 1280)
    })
  }, [])

  useEffect(() => {
    if(localStorage.getItem("isLogin")) {
      const currentUser = localStorage.getItem("currentUser")
      if(currentUser) {
        try {
          const data = JSON.parse(currentUser)
          if(data.hasOwnProperty("userName") && data.hasOwnProperty("email") && data.hasOwnProperty("image")) {
            dispatch(userSlice.actions.updateUser(data))
          }
        }
        catch (err) {
          console.log(err)
        }
      }

    }
  }, [])

  useEffect(() => {
    if(user) {
      localStorage.setItem("currentUser", JSON.stringify(user))
    }
  }, [user])
  return (
    <div className="App pl-5 flex">
      {
        showNote
            ? <div className="w-full h-full fixed top-0 left-0 bg-[#7e7e7ec7] z-[10000]">
                <div className="relative z-[1] w-full h-full flex justify-center items-center">
                  <div></div>
                  <ShowNotify />
                </div>
              </div>
            : null
      }
      <Router>
        <Navbar />
        <div className="Main w-full">
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact-us" element={<ContactUsPage/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/sign-up" element={<Register/>}/>
              <Route path="/settings" element={<Settings/>}/>
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </div>
  );
}

const ShowNotify = () => {
  return (
    <div className="absolute z-[2] flex flex-col justify-center items-center">
      <h1 className="text-white text-center text-4xl">You must use app on phone. <br /> We apologize for this inconvenience! 😓</h1>
      <Lottie
          className="w-[500px] duration-300"
          animationData={appPhone}
          loop={true}
          autoplay={true}
      />
    </div>
  )
}

export default App;
