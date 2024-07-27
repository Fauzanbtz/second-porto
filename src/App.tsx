import Navbar from "./components/Layout/navbar";
import Hero from "./components/Layout/hero";
import About from "./components/Layout/about";
import Skill from "./components/Layout/skill";
import Learning from "./components/Layout/learning";
import Certificate from "./components/Layout/certificate";
import Project from "./components/Layout/project";
import Contact from "./components/Layout/contact";

function App() {
  return (
    <>
      <div className="md:mx-32 mx-5 ">
        <Navbar />
        <Hero/>
        <About/>
        <Skill/>
        <Learning/>
        <Certificate/>
        <Project/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
