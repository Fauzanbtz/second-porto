
import Button from "../Elements/button";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div>
        <a className="btn btn-ghost text-xl">Fauzan</a>
      </div>
      <div className="hidden lg:flex gap-2">
        <ul className="flex gap-10">
          <li>
            <a className="link link-hover" href="#about">About</a>
          </li>
          <li>
            <a className="link link-hover" href="#certificate">Certificate</a>
          </li>
          <li>
            <a className="link link-hover" href="#project">Project</a>
          </li>
          <li>
            <a className="link link-hover">Contact</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex gap-2">
        <Button
          className=" bg-color text-color-light hover:bg-slate-500"
          onClick={() => {}}>
          Download CV
        </Button>
      </div>

      <div className="flex lg:hidden">
        <button className="btn btn-circle swap swap-rotate" onClick={toggle}>
          <svg
            className={` fill-current ${open ? "hidden" : "block"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className={` fill-current ${open ? "block" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          open ? "translate-x-0" : "translate-x-full"
        } lg:hidden fixed z-10 top-14 right-0 py-10   w-full  bg-color text-color-light transition-transform duration-300 ease-in-out flex flex-col gap-10 items-start`}>
        <ul className="flex flex-col  w-full " onClick={() => setOpen(false)}>
          <li className="border-b-[1px] p-5 hover:cursor-pointer hover:bg-[#1a1a1a] w-full px-5" >
            <a className=" text-5xl" href="#about">About</a>
          </li>
          <li className="border-b-[1px] p-5  hover:cursor-pointer hover:bg-[#1a1a1a] w-full px-5">
            <a className=" text-5xl" href="#certificate">Certificate</a>
          </li>
          <li className="border-b-[1px] p-5  hover:cursor-pointer hover:bg-[#1a1a1a] w-full px-5">
            <a className=" text-5xl" href="#project">Project</a>
          </li>
          <li className="border-b-[1px] p-5  hover:cursor-pointer hover:bg-[#1a1a1a] w-full px-5">
            <a className=" text-5xl" href="#contact">Contact</a>
          </li>
        </ul>
        <Button
          className=" bg-color-light text-color hover:bg-slate-500"
          onClick={() => {}}>
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
