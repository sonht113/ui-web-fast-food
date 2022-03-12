import Lottie from "lottie-react";
import foodDeliveryService from "../../lotties/food-delivery-services-animation.json";

function ContactUs() {
  return (
    <div className="ContactUs lg:w-3/4 mx-auto">
      <div className="title text-center mb-5">
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          DF Store
        </h1>
      </div>
      <div className="Body-ContactUs flex">
        <div className="contact-us__form">
          <div className="contact-us__form-content ">
            <div className="title">
              <h2 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Contact Us
              </h2>
            </div>
            <div className="content mb-10 mt-3">
              <p className="whitespace-pre-wrap text-pink-700">
                To request a quote or want to meet up for coffee,<br/>contact us     
                directly or fill out the form and we will get back to you
                proptly.
              </p>
            </div>
            <div className="form-contact">
                <div className="fullname">
                    <label className="block mb-1 text-sm text-gray-400" >Your Name</label>
                    <input type="text" className="border border-pink-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 p-2 rounded-lg w-3/4" placeholder="Your name..." />
                </div>
                <div className="email my-7">
                    <label className="block mb-1 text-sm text-gray-400" >Your Email</label>
                    <input type="text" className="border border-pink-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 p-2 rounded-lg w-3/4" placeholder="Email..." />
                </div>
                <div className="message">
                    <label className="block mb-1 text-sm text-gray-400" >Your Message</label>
                    <textarea type="text" rows="5" className="border border-pink-300  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 p-2 rounded-lg w-3/4" placeholder="Message..." />
                </div>
            </div>
            <button className="bg-pink-600 mt-5 inline-block mx-auto text-white px-7 py-3 rounded-full focus:outline-none focus:ring focus:ring-purple-500 hover:bg-pink-700">Send Message</button>
          </div>
        </div>
        <div className="contact-us__animation">
          <div className="animation">
            <Lottie
              className="object-cover"
              animationData={foodDeliveryService}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
