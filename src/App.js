import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Section from "./components/Section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Section title="About" content={<About />} id="section1" />
        <Section title="Projects" content={<Projects />} id="section2" />
        <Section title="Contact" content={<Contact />} id="section3" />
      </main>
      <footer>Created by Amanda So</footer>
    </div>
  );
}

export default App;
