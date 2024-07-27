const Learning = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold my-10">The course I took</h1>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 bg-base-200 border">
        <div className="collapse-title text-xl font-medium">
          The Complete JavaScript Course 2024: From Zero to Expert!{" "}
          <span className="text-blue-500">on Udemy</span>
        </div>
        <div className="collapse-content">
          <p>
            The Complete JavaScript Course 2024: From Zero to Expert!" on Udemy
            is a comprehensive course designed to teach JavaScript from scratch.
            It covers fundamental concepts, advanced topics, and real-world
            applications. The course includes interactive exercises, practical
            projects, and expert tips to help learners understand and master
            JavaScript. It's suitable for beginners as well as those looking to
            deepen their knowledge of JavaScript.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 bg-base-200 border">
        <div className="collapse-title text-xl font-medium">
          KelasFullstack <span className="text-blue-500"> on CodePolitan</span>
        </div>
        <div className="collapse-content">
          <p>
            The Fullstack class at CodePolitan is designed to teach both
            frontend and backend development skills. It covers a range of
            technologies including HTML, CSS, JavaScript, and various backend
            frameworks. The course aims to equip students with the knowledge
            needed to build and manage complete web applications, from the user
            interface to server-side functionality. It includes hands-on
            projects and real-world examples to ensure practical learning and
            skill application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
