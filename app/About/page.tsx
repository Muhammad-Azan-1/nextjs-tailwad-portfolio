import Header from '../Components/Header/header'
import Footer from '../Components/Footer/footer'
import Image from 'next/image'
import '../globals.css'

// fonts
import { Urbanist, Poppins } from "next/font/google";
const urbanist = Urbanist({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
    weight: ["500", "600", "700", "800", "900"],
    subsets: ["latin"],
  });

const page = () => {
  return (
    <>
    <Header/>
    <div className='w-[100%] mt-[16rem] h-[100%]'>
        <div className='w-[100%] px-[20px] flex justify-center items-center gap-16 '>
        <div>
        <Image
        src='/images/about.png'
        alt='About Image'
        width={550}
        height={400}
        ></Image>
        </div>

        <div>
            <h1 className={`${urbanist.className} ml-[-5px] mb-[-12px] text-secondary dark:text-white text-[4.5rem] font-extrabold tracking-[.2rem]`}>About <span className='text-main'>Me</span></h1>
            <h3  className={`${urbanist.className} text-[3rem] mb-[11px] text-secondary dark:text-white font-bold tracking-[.2rem]`}>Hi,I am here to provide you solutions</h3>
            <p className={`${poppins.className} whitespace-pre-line	 text-[1.5rem] dark:text-white text-[#777]`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis <br />
                culpa nam tenetur nobis natus omnis voluptate iusto, nulla sunt eos of!<br/> 
                Possimus beatae aut et autem obcaecati quae adipisci a quam asperiores <br/>
                Possimus beatae aut et autem obcaecati quae adipisci a quam asperiores <br/>
                modi architecto assumenda voluptas iste, rem illo nulla. Cumque officiis<br />
                 minus error nesciunt.
            </p>
            
            <div>
              <button className="py-[12px] px-[30px] rounded-[5px] mt-[3rem] ml-[0.5rem] border-[2px] border-solid border-main bg-main text-primary text-[1.5rem] font-semibold
                hover:bg-primary hover:text-main hover:duration-[0.5s] hover:dark:text-white hover:dark:bg-[#14073e]" 
              >Read More
              </button>
            </div>
        </div>
        </div>
    </div>
    <Footer/>

    </>
  )
}

export default page;