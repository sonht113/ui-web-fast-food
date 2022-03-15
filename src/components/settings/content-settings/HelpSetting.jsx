const HelpSetting = () => {
    return(
        <div className="hellpSetting flex border-l px-10">
            <div className="w-1/2">
                <TitleHelpSetting />
                <ContentHelpSetting />
            </div>
            <div className="w-1/2">
                <MapHelpSetting />
            </div>
        </div>
    )
}
const TitleHelpSetting = () => {
    return(
        <>
            <h1 className="text-3xl text-gray-400">We are here to Help you</h1>
            <p className="text-sm text-gray-400">We are ready to listen to your comments to provide the fastest  <br /> and most accurate support.</p>
        </>
    )
}

const ContentHelpSetting = () => {
    return(
        <div className="contentHelpSetting mt-10 mb-10 space-y-7">
            <div className="questions space-y-1">
                <label className="text-sm text-gray-400 block">What are you not satisfied with?</label>
                <textarea rows="4"  className="border rounded-lg px-2 py-2 placeholder:text-sm focus:outline-none focus:ring" placeholder="Enter your answer..." />
            </div>
            <div className="questions space-y-1">
                <label className="text-sm text-gray-400 block">What are you not satisfied with?</label>
                <textarea rows="4"  className="border rounded-lg px-2 py-2 placeholder:text-sm focus:outline-none focus:ring" placeholder="Enter your answer..." />
            </div>
            <div className="questions space-y-1">
                <label className="text-sm text-gray-400 block">What are you not satisfied with?</label>
                <textarea rows="4"  className="border rounded-lg px-2 py-2 placeholder:text-sm focus:outline-none focus:ring" placeholder="Enter your answer..." />
            </div>
            <button className="py-2 px-10 rounded-xl bg-pink-600 hover:bg-pink-800 text-white text-sm ml-2">Send massage</button>
        </div>
    )
}

const MapHelpSetting = () => {
    return(
        <>
            <iframe className="border-2 border-gray-400 max-w-[100%]"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7669.202413484284!2d108.21891537451707!3d16.034262166295612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1647268410089!5m2!1svi!2s"
    width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
            <div>
                <p className="text-sm text-gray-400 text-center mt-5"> You can meet us directly at 524 2/9 street.</p>
                <p className="text-sm text-gray-400 text-center mt-5"> OR</p>
                <p className="text-sm text-gray-400 text-center mt-5"> You can call us with hotline: (+84) 399 187 817.</p>
            </div>
        </>
    )
}

export default HelpSetting;