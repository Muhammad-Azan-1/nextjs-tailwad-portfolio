
// font icons
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footer = () => {
  return (
    <>
      <div className="w-full p-[10px] bg-main text-primary inline-block text-[1.5rem] h-[50px] text-center">
        Made with{" "}
        <FontAwesomeIcon icon={faHeart} style={{ color: "#ff004f" }} /> by
        Muhammad Azan
      </div>
    </>
  );
};

export default footer;
