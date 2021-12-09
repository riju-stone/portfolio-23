import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Cursor />
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
