import image from "../../../public/3d.png";
import { MapPin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-around">
        <div className="lg:w-1/2" data-aos="fade-right">
          <h1 className="text-5xl font-bold">Hi, Im Fauzan</h1>
          <p className="py-6 ">
            Passionate about crafting seamless and dynamic web experiences, I
            specialize in building both robust back-end systems and engaging
            front-end interfaces. With a keen eye for detail and a love for
            solving complex problems, I bring ideas to life through code. Let's
            create something amazing together!
          </p>

          <p className="flex items-center gap-2">
            <MapPin /> Bekasi, Indonesia
          </p>

          <div className="flex gap-4 mt-5 ">
            <a
              href="#"
              className="hover:bg-[#9897a4] hover:text-black rounded-md transition 
               duration-300 ">
              <Github />
            </a>

            <a
              href="#"
              className="hover:bg-[#9897a4] hover:text-black rounded-md transition 
               duration-300">
              <Instagram />
            </a>

            <a
              href="#"
              className="hover:bg-[#9897a4] hover:text-black rounded-md transition 
               duration-300">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-[50rem]" data-aos="fade-left">
          <img src={image} alt="" className="w-2/3" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
