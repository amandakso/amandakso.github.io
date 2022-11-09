import Navbar from "./components/Navbar";
import Section from "./components/Section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Section title="About" content="TBD" id="section1" />
        <Section title="Projects" content="TBD" id="section2" />
        <Section title="Contact" content="TBD" id="section3" />
      </main>
      <footer>Created by Amanda So</footer>
    </div>
  );
}

export default App;
