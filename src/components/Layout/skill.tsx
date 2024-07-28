import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

const skill = () => {
  return (
    <div className="bg-color-dark rounded-xl dark:text-white     ">
      <div className="py-20 px-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white ">
            I've learned some technology like
          </h1>
        </div>
        <ul className="flex flex-wrap  gap-10 justify-center mt-10" >
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="500">
            <FaCss3Alt className="text-5xl" />
            CSS
          </li>
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="700">
            <FaHtml5 className="text-5xl" />
            HTML
          </li>
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="900">
            <IoLogoJavascript className="text-5xl" />
            JAVASCRIPT
          </li>
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="1100">
            <RiTailwindCssFill className="text-5xl" />
            TAILWIND
          </li>
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="1300">
            <FaNodeJs className="text-5xl" />
            NODEJS
          </li>
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="1300">
            <SiExpress className="text-5xl" />
            ExpressJs
          </li>
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="1100">
            <SiMysql className="text-5xl" />
            MYSQL
          </li>
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="900">
            <DiMongodb className="text-5xl" />
            MONGODB
          </li>
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="700">
            <SiPrisma className="text-5xl" />
            PRISMA
          </li>
          <li className="py-5 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="500">
            <FaGitAlt className="text-5xl" />
            GIT
          </li>
        </ul>
      </div>
    </div>
  );
};

export default skill;
