import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { HiSupport } from "react-icons/hi";
import PasswordSetting from "./content-settings/PasswordSetting";
import HelpSetting from "./content-settings/HelpSetting";
import AccountSetting from "./content-settings/AccountSetting";

import {useState} from 'react';

function SidebarSettings({changeTab}) {
  const [currentLabel, setCurrentLabel] = useState("Account");

  const clickHandle = (label, tab) => {
    setCurrentLabel(label)
    changeTab(tab)
  }

  return (
    <div className="sidebarSettings">
      <ul className="menu">
        <TabLabelComponent
          changeTab={() => clickHandle("Account", AccountSetting)}
          title="Account"
          icon={AiOutlineUser}
          active={ currentLabel === "Account" }
        />
        <TabLabelComponent
          changeTab={() => clickHandle("Password", PasswordSetting)}
          title="Password"
          icon={AiFillLock}
          active={ currentLabel === "Password" }
        />
        <TabLabelComponent
          changeTab={() => clickHandle("Help", HelpSetting)}
          title="Help"
          icon={HiSupport}
          active={ currentLabel === "Help" }
        />
      </ul>
    </div>
  );
}

function TabLabelComponent({title, icon, changeTab, active}) {
  return (
    <li onClick={() => changeTab() } className={active ? "flex group bg-pink-600 py-3 items-end cursor-pointer mb-5 rounded-lg" : "flex group hover:bg-pink-600 duration-500 py-3 items-end cursor-pointer mb-5 rounded-lg"}>
      <div className="settingIcon pl-5 pr-2 text-2xl">
        {
            active
                ? icon({className: "fill-white"})
                : icon({className: "fill-gray-400 group-hover:fill-white"})
        }
      </div>
      <div className="settingTitle">
        <span className={active ? "text-white" : "text-gray-400 group-hover:text-white"}>{title}</span>
      </div>
    </li>
  );
}

export default SidebarSettings;
