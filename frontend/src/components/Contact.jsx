import Footer from "./Footer";
import { SiNetlify } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const Resume_File = "http://localhost:5173/contact/sem-4.pdf";

const Contact = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div>
      <div className="flex lg:h-[55vh] h-[68vh] sm:h-[63vh] items-center justify-center">
        <button 
          onClick={() => {
            downloadFileAtURL(Resume_File);
          }}
          className="font-bold shadow-xl text-[35px] sm:text-[45px] md:text-[50px] text-white bg-red-500 rounded-md p-2 m-2"
        >
          Download Resume
        </button>
      </div>
      <div className="flex  text-[60px] flex-wrap justify-evenly items-center m-2">
        <Link to="https://mail.ksingh79798@gmail.com" target="_blank">
          <CgMail />
        </Link>

        <Link to="https://github.com/Ksingh79798" target="_blank">
          <FaSquareGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/karan-singh-b861471a4"
          target="_blank"
        >
          <FaLinkedin className="text-[#0059c1]" />
        </Link>

        <Link
          to="https://app.netlify.com/teams/ksingh79798/sites"
          target="_blank"
        >
          <SiNetlify className="text-[#4bc0c0]" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
