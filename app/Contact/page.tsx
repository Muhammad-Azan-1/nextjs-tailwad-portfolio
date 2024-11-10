import Header from '../Components/Header/header'
import Footer from '../Components/Footer/footer'
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
    <div className='mt-[10rem] text-center'>
    <h1 className={`${urbanist.className} ml-[-5px] mb-[-12px] text-secondary text-[4.5rem] dark:text-white font-extrabold tracking-[.2rem]`}>Contact <span className='text-main'>Me</span></h1>
    </div>

    <div className='w[100%] h-[80vh] mt-[2rem] flex justify-evenly items-center'>
     
     <div className='h-[450px] px-[10px] '>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.403046891173!2d67.12986705!3d24.921861449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1731218692953!5m2!1sen!2s" 
      width="600" 
      height="420" 
      style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      className='rounded-[5px] '
      ></iframe>
     </div>

   

    <div className='flex flex-col h-[450px] w-[40%] justify-evenly px-[5px] '>
    <input
            type="text"
            placeholder="Enter your name"
            className='h-[45px] border-[1px] border-solid dark:border-[white] border-[#333] rounded-[2px] placeholder: px-3'
          
          />

          <input
            type="email"
            placeholder="Enter your email"
            className='h-[45px] border-[1px] border-solid dark:border-[white] border-[#333] rounded-[2px] placeholder: px-3'

          
          />

          <input
            type="text"
            placeholder="Enter your Phone number"
            className='h-[45px] border-[1px] border-solid dark:border-[white]  border-[#333] rounded-[2px] placeholder: px-3'

         
          />

          <textarea
            placeholder="Comment"
            cols={80}
            rows={7}
            style={{ padding: "10px", border: "1px solid #777" }}
            className= 'border-[1.5px] border-[#333]  ] rounded-[2px] placeholder: px-3'

          />

          <button type="submit" className="py-[12px] px-[30px] w-[12rem] rounded-[5px] mt-[1rem] ml-[0.5rem] border-[2px] border-solid border-main bg-main text-primary text-[1.5rem] font-semibold
           hover:bg-primary hover:text-main hover:duration-[0.5s] hover:dark:text-white hover:dark:bg-[#14073e]" >
            Submit
          </button>
    </div>
    </div>
    <Footer/>
</>

  )
}

export default page