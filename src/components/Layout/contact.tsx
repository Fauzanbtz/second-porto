import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

function contact() {
  return (
    <div className="flex justify-center items-center min-h-screen mt-20" id="contact">
      <div className="bg-color w-full p-10 rounded-2xl text-color-light">
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-color-light">Contact me</h1>
          <p className="text-color-light font-thin">
            lets make your project become a reality
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <div className="text-color-light">
            <h1 className="text-2xl font-semibold">lets connect</h1>
            <div className="flex gap-4 ">
              <div>
                <h2>send me an email</h2>
                <p>m.fauzan.hb@gmail.com</p>
              </div>
              <div>
                <h2>follow me</h2>
                <div className="flex gap-4">
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
            </div>
          </div>
          <div className="w-full pt-20 md:p-0 md:w-1/2">
            <h1 className="text-2xl font-semibold">send me a message</h1>
            <div className="">
              <form action="sumbit" className="flex flex-col">
                <input
                  type="text"
                  placeholder="name"
                  className="border-[1px] border-gray-400 focus:outline-none  focus:ring-black focus:border-black w-full p-2 py-6 rounded-t-lg mt-5 divide-y-2 "
                />
                <input
                  type="text"
                  placeholder="email"
                  className="border-[1px] border-gray-400 focus:outline-none  focus:ring-black focus:border-black w-full p-2 py-6  "
                />
                <input
                  type="text"
                  placeholder="phone"
                  className="border-[1px] border-gray-400 focus:outline-none  focus:ring-black focus:border-black w-full p-2 py-6 "
                />
                <textarea
                  name="message"
                  id=""
                  placeholder="message"
                  className="border-[1px] border-gray-400 focus:outline-none  focus:ring-black focus:border-black w-full p-2 py-6 rounded-b-lg "></textarea>
                <input
                  type="submit"
                  className="btn border-none hover:bg-[#9897a4] focus:outline-none  focus:ring-black focus:border-black  text-color-dark bg-color-light btn-primary mt-5"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
