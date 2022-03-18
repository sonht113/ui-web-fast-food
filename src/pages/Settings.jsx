
import SidebarSettings from "../components/settings/SidebarSettings";
import TitleSettings from "../components/settings/TitleSettings";
import AccountSetting from "../components/settings/content-settings/AccountSetting";

import {useState} from 'react';
import AnimatedPage from "../animation-page/AnimatedPage";
import {useSelector} from "react-redux";
import {selectRemainingUser} from "../redux/selector";
import PasswordSetting from "../components/settings/content-settings/PasswordSetting";
import HelpSetting from "../components/settings/content-settings/HelpSetting";

//let test = { title: string, keu: string, vaue: component }

function Settings() {
  const [current, setCurrent] = useState("Account");
  const user = useSelector(selectRemainingUser)

    const returnComponent = () => {
        if(current === "Account") {
            return <AccountSetting />
        } else if(current === "Password") {
            return <PasswordSetting />
        } else {
            return <HelpSetting />
        }
    }

  return (
      <AnimatedPage>
          <div className="settingPage ml-14 pt-2">
              <TitleSettings />
              <div className="bodySettingPage grid grid-cols-12 gap-x-20">
                  <div className="sideBarSettings col-span-3">
                      <SidebarSettings changeTab={(e) => setCurrent(e)} currentLabel={ current }/>
                  </div>
                  <div className="contentSettings col-span-9">
                      {
                          returnComponent()
                      }
                  </div>
              </div>
          </div>
      </AnimatedPage>
  );
}

export default Settings;
