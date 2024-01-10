import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

const Footer = () => {

  return (
    <div className="bg-[#141414] h-full pt-10 sm:pt-16 px-2 text-white">
      <hr className="w-[100%]"/>
      <div className="flex justify-center items-center p-10">
        <h1 className="text-md sm:text-xl font-bold mr-2">Contact</h1>
        <Link className="mx-2" to={`mailto:ngunjyal25@gmail.com`}><IoIosMail style={{color:"white"}} className="FooterIcon"/></Link>
        <Link className="mx-2" to={`https://github.com/NGunjyal01`}><FaGithub style={{color:"white"}} className="FooterIcon"/></Link>
        <Link className="mx-2" to={`www.linkedin.com/in/nakshatra-gunjyal`}><FaLinkedin style={{color:"white"}} className="FooterIcon"/></Link>
      </div>
    </div>
  );
};

export default Footer;
