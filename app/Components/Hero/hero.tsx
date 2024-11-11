
//just for responsiveness
import style from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";

// font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareInstagram,faLinkedin, faSquareFacebook,faTwitter,} from "@fortawesome/free-brands-svg-icons";

//Fonts
import { poppins,urbanist } from "../../About/page";

const Hero = () => {
  return (
    <>
      <div
        className={` ${style.main} w-full h-screen mt-[12rem] flex items-center justify-evenly`}
      >
        <div className={`${style.content_box}  ml-[20px] h-[60%]`}>
          <div className={style.text_box}>
            <h1
              className={`${urbanist.className} mb-[-15px] text-secondary dark:text-white text-5xl font-bold tracking-[.3rem]`}
            >
              Hello, I am
            </h1>
            <h1
              className={`${style.me} ${urbanist.className} ml-[-5px] text-secondary dark:text-white text-[4.5rem] font-extrabold tracking-wider`}
            >
              MUHAMMAD AZAN
            </h1>
            <p
              className={`${poppins.className} text-[1.5rem] dark:text-white text-[#777]`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus{" "}
              <br />
              temporibus consecteturvoluptatem quod nisi ipsum. Eveniet lorem,
              <br />
              ipsum Eveniet pariatur .
            </p>

            <div
              className={`${style.Icons} w-[100%] flex mt-10 -mr-4`}
            >
              <Link
                className={`  mr-12 text-[2rem] h-[50px] w-[50px] border-solid border-main border-[2px] rounded-[50%] flex justify-center items-center
                     text-main cursor-pointer  hover:bg-main hover:text-primary hover:duration-[0.7s] `}
                href=""
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </Link>

              <Link
                className={`mr-12 text-[2rem] h-[50px] w-[50px] border-solid border-main border-[2px] rounded-[50%] flex justify-center items-center
                     text-main cursor-pointer  hover:bg-main hover:text-primary hover:duration-[0.7s]`}
                href=""
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>

              <Link
                className={`mr-12 text-[2rem] h-[50px] w-[50px] border-solid border-main border-[2px] rounded-[50%] flex justify-center items-center
                     text-main cursor-pointer  hover:bg-main hover:text-primary hover:duration-[0.7s]`}
                href=""
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>

              <Link
                className={` text-[2rem] h-[50px] w-[50px] border-solid border-main border-[2px] rounded-[50%] flex justify-center items-center
                     text-main cursor-pointer  hover:bg-main hover:text-primary hover:duration-[0.7s]`}
                href=""
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </Link>
            </div>

            <div>
              <button
                className={`${style.btn} py-6 px-12 rounded-[5px] mt-[3rem] ml-[0.5rem] border-2 border-solid border-main bg-main text-primary text-[1.5rem] font-semibold
                hover:bg-primary hover:text-main hover:duration-[1s] hover:dark:text-white hover:dark:bg-[#14073e]`}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* images section */}
        <div className={`${style.main2} mr-[20px]  pb-[30px] h-full`}>
          <div
            className={`${style.mainBox} bg-main w-full h-full`}
            style={{ borderRadius: "100% 100% 39% 39% / 15% 15% 15% 15%" }}
          >
            <Image
              src="/images/home.png"
              width={691}
              height={471}
              alt="My Images"
              className={`${style.img} w-full h-full`}
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
