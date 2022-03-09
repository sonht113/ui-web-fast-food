import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App pl-5 pt-5 flex">
      <Router>
        <Navbar />
        <div className="Main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
