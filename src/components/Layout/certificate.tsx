import Certificate1 from "../../../public/certificate1.png";
import Certificate2 from "../../../public/certificate2.png";

const Certificate = () => {
  const data = [
    {
      name: "Designing Future With Backend In Tech Industry",
      image: Certificate1,
      description: "description",
      from: "Google Developer Students Clubs",
    },
    {
      name: "Mengenal Program Komputer",
      image: Certificate2,
      description: "description",
      from: "Codepolitan",
    },
    
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center mb-10" id="certificate">
      <h1 className="text-5xl font-bold  my-10">Certificate</h1>
      <div className=" flex flex-col md:flex-row gap-10 rounded-lg shadow-lg">
        {data.map((item) => (
          <div
            className="flex flex-col rounded-md bg-slate-300 p-5 items-center justify-center mb-5 shadow-xl"
            key={item.name}>
            <div className="mb-5">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg w-full max-w-md"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <p className="text-lg ">{item.from}</p>
              <p className="text-md font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, odio mollitia? Accusamus tempora harum voluptate ea
                enim, officia quae exercitationem placeat corrupti mollitia,
                aspernatur quas commodi, fuga illum beatae nostrum.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
