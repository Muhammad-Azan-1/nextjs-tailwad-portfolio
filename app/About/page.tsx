
import Header from "../Components/Header/header";
import style from "./page.module.css";
import Image from "next/image";

// fonts
import { Urbanist, Poppins } from "next/font/google";
 export const urbanist = Urbanist({
  weight: [ "900"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["600",],
  subsets: ["latin"],
});

const page = () => {
  return (
    <>
      <Header />
      <div className={`${style.main} w-full mt-40 min-h-screen`}>
        <div
          className={`${style.content}  px-5 flex justify-center items-center gap-16`}
        >
          <div>
            <h1
              className={`${urbanist.className} -ml-1 mb-3 text-secondary dark:text-white text-[4.5rem] font-extrabold tracking-wider`}
            >
              About <span className="text-main">Me</span>
            </h1>
            <h3
              className={`${urbanist.className} text-5xl mb-3  text-secondary dark:text-white font-bold tracking-wider`}
            >
              Hi,I am here to provide you solutions
            </h3>
            <p
              className={`${poppins.className} whitespace-pre-line text-2xl dark:text-white text-[#777]`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis <br />
              culpa nam tenetur nobis natus omnis voluptate iusto, nulla sunt
              eos <br />
              Possimus beatae aut et autem obcaecati quae adipisci a quam asp{" "}
              <br />
              Possimus beatae aut et autem obcaecati quae adipisci a quam asp{" "}
              <br />
              modi architecto assumenda voluptas iste rem illo nulla Cumque of
              <br />
              minus error nesciunt.
            </p>

            <div>
              <button
                className="py-6 px-14 rounded-[5px] mt-12 ml-2  border-2 border-solid border-main bg-main text-primary text-[1.5rem] font-semibold
                hover:bg-primary hover:text-main hover:duration-[0.5s] hover:dark:text-white hover:dark:bg-[#14073e]"
              >
                Read More
              </button>
            </div>
          </div>

          <div>
            <Image
              src="/images/about.png"
              alt="About Image"
              width={600}
              height={600}
              className={`${style.img}`}
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
