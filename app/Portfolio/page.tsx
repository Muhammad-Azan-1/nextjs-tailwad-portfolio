import Header from "../Components/Header/header";
import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import {urbanist } from "../About/page";

const Page = () => {
  return (
    <>
      <Header />

      <div className="w-full h-full mt-40 text-center">
        <h1
          className={`${style.heading} ${urbanist.className} ml-[-5px] -mb-3  text-secondary text-[4.5rem] font-extrabold dark:text-white tracking-wider`}
        >
          Lastest <span className="text-main font-[700]">Projects</span>
        </h1>
      </div>

      <div className="my-6 mt-16  flex flex-wrap justify-evenly mx-3">
        <div
          className={`${style.box} border-[2px] text-center cursor-pointer `}
        >
          <Link href="">
            <Image
              className="rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)]  transition-transform duration-300 "
              src="/images/uni.jpeg"
              alt="Project 1"
              width={420}
              height={250}
            />
          </Link>
          <h3
            className={`${urbanist.className} mt-[5px] dark:text-white text-[2rem] mb-[10px] font-[600] text-secondary`}
          >
            University Website
          </h3>
        </div>

        <div className="border-[2px] text-center cursor-pointer">
          <Link href="https://resume-drab-sigma.vercel.app/" target="_blank">
            <Image
              className="rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300"
              src="/images/resume.jpeg"
              alt="Project 1"
              width={420}
              height={250}
              loading="lazy"
            />
          </Link>
          <h3
            className={`${urbanist.className} mt-[5px] dark:text-white text-[2rem] mb-[10px] font-[600] text-secondary`}
          >
            Resume Builder
          </h3>
        </div>

        <div className="border-[2px] text-center cursor-pointer ">
          <Link href="" target="_blank">
            <Image
              className="rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300 "
              src="/images/img7.jpeg"
              alt="Project 1"
              width={420}
              height={250}
               loading="lazy"
            />
          </Link>
          <h3
            className={` ${urbanist.className} mt-[5px] dark:text-white text-[2rem] mb-[10px] font-[600] text-secondary`}
          >
            Scooter Website
          </h3>
        </div>

        <div className="border-[2px] text-center ">
          <Link href="" target="_blank">
            {" "}
            <Image
              className="rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300"
              src="/images/currency.webp"
              alt="Project 1"
              width={420}
              height={250}
               loading="lazy"
            />{" "}
          </Link>
          <h3
            className={`${urbanist.className}mt-[5px] dark:text-white text-[2rem] font-[600] text-secondary`}
          >
            Currency Converter
          </h3>
        </div>

        <div className="border-[2px] text-center ">
          <Link href="" target="_blank">
            <Image
              className="rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300"
              src="/images/img6.webp"
              alt="Project 1"
              width={420}
              height={250}
               loading="lazy"
            />
          </Link>
          <h3
            className={` ${urbanist.className} mt-[5px] dark:text-white text-[2rem] font-[600] text-secondary`}
          >
            Tic Tac Toe
          </h3>
        </div>

        <div className="border-[2px] text-center ">
          <Link href="" target="_blank">
            {" "}
            <Image
              className="rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300"
              src="/images/rock.jpg"
              alt="Project 1"
              width={420}
              height={250}
               loading="lazy"
            />
          </Link>
          <h3
            className={` ${urbanist.className} mt-[5px] dark:text-white text-[2rem] font-[600] text-secondary`}
          >
            Rock Papar Scissors
          </h3>
        </div>
      </div>
    </>
  );
};

export default Page;
