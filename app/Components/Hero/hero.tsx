import Link from "next/link";
import Image from "next/image"
// font icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

//Fonts

import { Urbanist, Poppins } from "next/font/google";
const urbanist = Urbanist({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

//fonts for text
const poppins = Poppins({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const hero = () => {
  return (
    <>
      <div className=" text-center md:w-[100%] md:h-[100vh] mt-[12rem] md:flex md:items-center md:justify-evenly">
        <div className="ml-[20px] h-[60%]">
          <div>
            <h1
              className={`${urbanist.className} mb-[-15px] dark:text-white text-[3rem] font-bold tracking-[.3rem]`}
            >
              Hello, I am
            </h1>
            <h1
              className={`${urbanist.className} ml-[-5px] dark:text-white text-[4.5rem] font-extrabold tracking-[.2rem]`}
            >
              MUHAMMAD AZAN
            </h1>
            <p className={`${poppins.className} text-[1.5rem] dark:text-white text-[#777]`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus{" "}
              <br />
              temporibus consecteturvoluptatem quod nisi ipsum. Eveniet lorem,
              <br />
              ipsum Eveniet pariatur .
            </p>

            <div className="flex mt-[2.5rem] mr-[-1rem]">
              <Link
                className={`  mr-[3rem] text-[2rem] h-[50px] w-[50px] border-solid border-main border-[2px] rounded-[50%] flex justify-center items-center
                     text-main cursor-pointer  hover:bg-main hover:text-primary hover:duration-[0.7s] `}
                href=""
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </Link>

              <Link
                className={`mr-[3rem] text-[2rem] h-[50px] w-[50px] border-solid border-main border-[2px] rounded-[50%] flex justify-center items-center
                     text-main cursor-pointer  hover:bg-main hover:text-primary hover:duration-[0.7s]`}
                href=""
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>

              <Link
                className={`mr-[3rem] text-[2rem] h-[50px] w-[50px] border-solid border-main border-[2px] rounded-[50%] flex justify-center items-center
                     text-main cursor-pointer  hover:bg-main hover:text-primary hover:duration-[0.7s]`}
                href=""
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>

              <Link
                className={`mr-[3rem] text-[2rem] h-[50px] w-[50px] border-solid border-main border-[2px] rounded-[50%] flex justify-center items-center
                     text-main cursor-pointer  hover:bg-main hover:text-primary hover:duration-[0.7s]`}
                href=""
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </Link>
            </div>

            <div>
              <button className="md:py-[12px] px-[30px] rounded-[5px] mt-[3rem] ml-[0.5rem] border-[2px] border-solid border-main bg-main text-primary text-[1.5rem] font-semibold
                hover:bg-primary hover:text-main hover:duration-[1s] hover:dark:text-white hover:dark:bg-[#14073e]" 
              >Download CV
              </button>
            </div>
          </div>
        </div>
 
   {/* images section */}
        <div className="md:mr-[20px] h-[100%]" >
          <div className=" bg-main md:h-[91.7%]" style={{borderRadius: '100% 100% 39% 39% / 15% 15% 15% 15%'}}>
            <Image
            src='/images/home.png'
            width={500}
            height={100}
            alt="My Images"
            ></Image>
          </div>

        </div>
      </div>
    </>
  );
};

export default hero;

