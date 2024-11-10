"use client"
import Link from 'next/link'
import Theme from '../theme/theme'
//font
import { Poppins} from "next/font/google";
const poppins = Poppins({
  weight: ["500","600","700", "800" , "900"],
  subsets: ["latin"],
});

const header = () => {



  return (
    <>
    <div
     className={` ${poppins.className} w-[100%] h-[75px] fixed flex items-center dark:bg-[#14073e] bg-primary top-0 left-0 pt-[2rem] pb-[2rem] pl-[7%] pr-[7%]
      border-main border-b-[10px] border-solid border-t-0 border-r-0 border-l-0 `}>

        <Link href='/' className='mr-[auto] text-[2.5rem] cursor-pointer font-[700] text-main'>Portfolio</Link>

        <div className='cursor-pointer font-[600] flex items-center dark:text-white text-secondary'> 

        <Link 
        className='relative ml-[4rem] text-[1.7rem] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-main after:left-0 after:bottom-[-2px] after:hover:w-[100%] after:hover:duration-700' href='/'
        >Home</Link>

        <Link className=' relative ml-[4rem] text-[1.7rem] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-main after:left-0 after:bottom-[-2px] after:hover:w-[100%] after:hover:duration-700' href='/About'
         >About</Link>

        <Link className='relative ml-[4rem] text-[1.7rem] after:content-[" "] after:absolute after:w-0 after:h-[2.5px]
         after:bg-main after:left-0 after:bottom-[-2px] after:hover:w-[100%] after:hover:duration-700' href='/Portfolio'
         >Portfolio</Link>

        <Link className='relative ml-[4rem] text-[1.7rem] after:content-[" "]
         after:absolute after:w-0 after:h-[2.5px] after:bg-main after:left-0 after:bottom-[-2px] after:hover:w-[100%] after:hover:duration-700' href='/Contact'
         >Contact</Link>
        <Theme/>

        </div>

    </div>
    </>
  )
}

export default (header);

