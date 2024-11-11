import Header from "../Components/Header/header";
// fonts
import {urbanist } from "../About/page";
import style from "./page.module.css";
const page = () => {
  return (
    <>
      <Header />
      <div className={`${style.heading}  mt-40 text-center`}>
        <h1
          className={` ${style.heading2} ${urbanist.className} ml-[-5px] -mb-3 text-secondary text-[4.5rem] dark:text-white font-extrabold tracking-wider`}
        >
          Contact <span className="text-main">Me</span>
        </h1>
      </div>

      <div
        className={` ${style.main} w-full h-[80vh] mt-8 flex justify-evenly items-center`}
      >
        <div className={`${style.map} h-[450px] `}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.403046891173!2d67.12986705!3d24.921861449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1731218692953!5m2!1sen!2s"
            width="600"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={`${style.iframe} rounded-[10px]`}
          ></iframe>
        </div>

        <div
          className={`${style.contact} flex flex-col h-[450px] w-[40%] justify-evenly px-[5px] `}
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="h-[45px] border-[2px] border-solid border-secondary rounded-[2px] placeholder: px-3 dark:border-[white] "
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="h-[45px] border-[2px] border-solid dark:border-[white] border-secondary  rounded-[2px] placeholder: px-3"
          />

          <input
            type="text"
            placeholder="Enter your Phone number"
            className="h-[45px] border-[2px] border-solid dark:border-[white]  border-secondary  rounded-[2px] placeholder: px-3"
          />

          <textarea
            placeholder="Comment"
            cols={80}
            rows={7}
            style={{ padding: "10px", border: "2px solid #333" }}
            className="b rounded-[2px] placeholder: px-3"
          />

          <button
            type="submit"
            className="py-6 px-12 rounded-[5px] mt-12 ml-1  w-48  border-[2px] border-solid border-main bg-main text-primary text-[1.5rem] font-semibold
           hover:bg-primary hover:text-main hover:duration-[0.5s] hover:dark:text-white hover:dark:bg-[#14073e]"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
