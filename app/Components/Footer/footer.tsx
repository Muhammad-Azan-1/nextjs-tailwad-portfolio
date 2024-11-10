import Link from 'next/link'
// font icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/free-brands-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import  {faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const footer = () => {
  return (
    <>
    <div className="w-[100%] h-[10vh] mt-[5rem] text-center  bg-main">
        <div className='flex justify-center gap-[70px] text-[25px] '>
          <Link className=' text-primary mt-[8px]' href="">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link className=' text-primary mt-[8px]' href="https://www.instagram.com/azan.jundullah/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link className=' text-primary mt-[8px]' href="https://www.linkedin.com/in/muhammad-azan-/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link className=' text-primary mt-[8px]' href="">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>

        <div className=' text-primary mt-[5px]  text-[1.5rem] text-center'>
          Made with{" "}
          <FontAwesomeIcon icon={faHeart} style={{ color: "#ff004f" }} /> by
          Muhammad Azan
        </div>
      </div>

    </>
  )
}

export default footer