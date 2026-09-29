import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Footer from "./sections/Footer/Footer";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <ScrollToTop />

      <main>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/work"
            element={<Work />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;