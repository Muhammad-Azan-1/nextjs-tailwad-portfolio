
import Header from '../Components/Header/header'
import Footer from '../Components/Footer/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Urbanist, Poppins } from "next/font/google";
const urbanist = Urbanist({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <>
    <Header/>

    <div className='w-[100% h-[100%] mt-[10rem] text-center'>
    <h1 className={`${urbanist.className} ml-[-5px] mb-[-12px] text-secondary text-[4.5rem] font-extrabold dark:text-white tracking-[.2rem]`}>Lastest <span className='text-main font-[700]'>Projects</span></h1>
    </div>

    <div className='my-[1.5rem] mt-[3rem] flex flex-wrap justify-evenly mx-[12px]'>

      <div className='border-[2px] text-center cursor-pointer '>
      <Link href=''><Image className='rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300 ' src='/images/uni.jpeg' alt='Project 1' width={420} height={250} /></Link>
     <h3 className={`${urbanist.className} mt-[5px] dark:text-white text-[2rem] mb-[10px] font-[600] text-secondary`}>University Website</h3> 
      </div>

      
      <div className='border-[2px] text-center'>
      <Link href=''><Image className='md:rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300' src='/images/resume.jpeg' alt='Project 1' width={420} height={250} /></Link>
     <h3 className={`${urbanist.className} mt-[5px] dark:text-white text-[2rem] mb-[10px] font-[600] text-secondary`}>Resume Builder</h3> 
      </div>


  
      <div className='border-[2px] text-center '>
      <Link href=''><Image className='md:rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300 ' src='/images/img7.jpeg' alt='Project 1' width={420} height={250} /></Link>
     <h3 className={` ${urbanist.className} mt-[5px] dark:text-white text-[2rem] mb-[10px] font-[600] text-secondary`}>Scooter Website</h3> 
      </div>

      <div className='border-[2px] text-center '>
       <Link href=''> <Image className='md:rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300' src='/images/currency.webp' alt='Project 1' width={420} height={250} /> </Link>
     <h3 className={`${urbanist.className}mt-[5px] dark:text-white text-[2rem] font-[600] text-secondary`}>Currency Converter</h3> 
      </div>


      <div className='border-[2px] text-center '>
       <Link href=''><Image className='md:rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300' src='/images/img6.webp' alt='Project 1' width={420} height={250} /></Link> 
     <h3 className={` ${urbanist.className} mt-[5px] dark:text-white text-[2rem] font-[600] text-secondary`}>Tic Tac Toe</h3> 
      </div>

      <div className='border-[2px] text-center '>
     <Link href=''> <Image className='rounded-[5px] hover:scale-105 hover:drop-shadow-[0px 4px 12px rgba(0,0,0,0.3)] transition-transform duration-300' src='/images/rock.jpg' alt='Project 1' width={420} height={250} /></Link> 
     <h3 className={` ${urbanist.className} mt-[5px] dark:text-white text-[2rem] font-[600] text-secondary`}>Rock Papar Scissors</h3> 
      </div>
      
      </div>
    
    <Footer/>
  
   
    </>
  )
}

export default page;