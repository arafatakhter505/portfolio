import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Skill from "./components/Skill/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Skill />
    </div>
  );
}

export default App;
