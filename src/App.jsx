import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence} from "framer-motion";


import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUs";
import Settings from "./pages/Settings";
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App pl-5 pt-5 flex">
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

export default App;
