
import SidebarSettings from "../components/settings/SidebarSettings";
import TitleSettings from "../components/settings/TitleSettings";
import AccountSetting from "../components/settings/content-settings/AccountSetting";

import {useState} from 'react';

//let test = { title: string, keu: string, vaue: component }

function Settings() {
  const [current, setCurrent] = useState(AccountSetting);
  return (
    <div className="settingPage ml-14 pt-2">
      <TitleSettings />
      <div className="bodySettingPage grid grid-cols-12 gap-x-20">
        <div className="sideBarSettings col-span-3">
          <SidebarSettings changeTab={(e) => setCurrent(e)}/>
        </div>
        <div className="contentSettings col-span-9">
          {
            current
          }
        </div>
      </div>
    </div>
  );
}

export default Settings;
