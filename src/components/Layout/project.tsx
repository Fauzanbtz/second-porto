import { MdModeOfTravel } from "react-icons/md";
import Project1 from "../../../public/project/project1.png";
import Project2 from "../../../public/project/project2.png";
import Project3 from "../../../public/project/project3.png";
import Project4 from "../../../public/project/project4.png";
import Project5 from "../../../public/project/project5.png";

const Project = () => {
  const data = [
    {
      name: "Website Travel",
      description:
        "This travel website provides features for booking tickets, hotels and others with ease and comfort when ordering with the application",
      link: "https://github.com/irfanfirdaus/Project-1",
      icons: <MdModeOfTravel />,
      image: Project1,
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    },
    {
      name: "Portofolio",
      description:
        "This travel website provides features for booking tickets, hotels and others with ease and comfort when ordering with the application",
      link: "https://github.com/irfanfirdaus/Project-1",
      icons: <MdModeOfTravel />,
      image: Project2,
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    },
    {
      name: "Portofolio",
      description:
        "This travel website provides features for booking tickets, hotels and others with ease and comfort when ordering with the application",
      link: "https://github.com/irfanfirdaus/Project-1",
      icons: <MdModeOfTravel />,
      image: Project3,
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    },
    {
      name: "Portofolio",
      description:
        "This travel website provides features for booking tickets, hotels and others with ease and comfort when ordering with the application",
      link: "https://github.com/irfanfirdaus/Project-1",
      icons: <MdModeOfTravel />,
      image: Project4,
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    },
    {
      name: "Portofolio",
      description:
        "This travel website provides features for booking tickets, hotels and others with ease and comfort when ordering with the application",
      link: "https://github.com/irfanfirdaus/Project-1",
      icons: <MdModeOfTravel />,
      image: Project5,
      tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    },

  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center" id="project">
      <h1 className="text-5xl font-bold">Project that i has been done </h1>
      <div className="flex flex-col items-center justify-center gap-32 pt-32" >
        {data.map((item) => (
          <div
            key={item.name}
            className="flex flex-col md:flex-row justify-center items-center  p-5 rounded-xl shadow-2xl space-y-5 md:space-y-0 md:space-x-5" data-aos="fade-up" data-aos-duration="2000">
            <div className="">
              <div className="">
                <p className="text-sm font-bold ">Featured Project</p>
                <h1 className="text-3xl font-bold">{item.name}</h1>
              </div>
              <div className="relative w-full py-5 md:left-10 rounded-xl bg-white/30 backdrop-blur-xl ">
                <p className="px-5">{item.description}</p>
              </div>
              <div className="mt-4">
                {item.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 px-2 py-1 bg-gray-200 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="min-w-2.5 ">
              <img src={item.image} alt="" className="rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
