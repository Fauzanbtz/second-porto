function About() {
  return (
    <section id="about" className="p-8 bg-gray-100 min-h-screen flex">
      <div className="flex flex-col md:flex-row items-center justify-betwen">
        <div className="md:w-1/2 p-2" data-aos="fade-right" data-aos-duration="2000">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            Hello, my name is Fauzan. I am 20 years old and currently pursuing
            my studies at Gunadarma University. I live in Bekasi and have a
            strong enthusiasm for learning new things. I am also a team player,
            always eager to collaborate and contribute to group efforts. With a
            keen interest in exploring new ideas and environments, I am excited
            about the opportunities that lie ahead.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="text-end">
          <h3 className="text-2xl font-bold mt-6">Education</h3>
          <p>Gunadarma University, Computer Science</p>
          <h3 className="text-2xl font-bold mt-6">Interests</h3>
          <p>
            Exploring new technologies, working on team projects, and
            continuously learning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
