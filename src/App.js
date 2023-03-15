import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Navbar/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
