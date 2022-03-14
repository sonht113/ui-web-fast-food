import Lottie from "lottie-react";
import passwordSetting from "../../../lotties/forgot-password.json"
const PasswordSetting = () => {
    return(
        <div className="passwordSetting border-l pl-10 flex">
           <div className="w-1/2">
               <TitlePassword />
               <ContentPasswordSetting />
           </div>
            <div className="w-1/2 flex flex-col content-center">
                <Lottie
                    animationData={passwordSetting}
                    loop={true}
                    autoplay={true}
                    style={{height: "80%"}}
                />
                <span className="text-sm text-gray-400 text-center">Note: Change your password for better account security.</span>
            </div>
        </div>
    )
}

function TitlePassword() {
    return(
        <div className="titlePasswordSetting mb-10">
            <h1 className="text-gray-400 text-2xl">Change Password</h1>
            <span className="text-sm text-gray-400">You can change your password here. This will help you <br/>keep your account safe.</span>
        </div>
    )
}

function ContentPasswordSetting() {
    return(
        <div className="contentPasswordSetting">
            <div className="formChangePassword space-y-10">
                <div className="oldPassword space-y-1">
                    <label className="text-sm text-gray-400 block">Password</label>
                    <input type="password" className="px-3 py-2 border rounded-lg placeholder:text-sm focus:outline-none focus:ring" placeholder="Enter your password..." />
                </div>
                <div className="newPassword space-y-1">
                    <label className="text-sm text-gray-400 block">New Password</label>
                    <input type="password" className="px-3 py-2 border rounded-lg placeholder:text-sm focus:outline-none focus:ring" placeholder="Enter your new password..." />
                </div>
                <div className="oldPassword space-y-1">
                    <label className="text-sm text-gray-400 block">Confirm Password</label>
                    <input type="password" className="px-3 py-2 border rounded-lg placeholder:text-sm focus:outline-none focus:ring" placeholder="Confirm new password..." />
                </div>
                <button className="px-10 py-2 bg-pink-600 hover:bg-pink-800 text-sm text-white rounded-full">Save</button>
            </div>
        </div>
    )
}

export default PasswordSetting;