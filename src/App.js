import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Domain from "./components/Domain/Domain";
import About from "./components/About/About";
import Sponsors from "./components/Sponsors/Sponsors";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Support from "./components/Support/Support";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => (
  <div className="App">
    <Hero />
    <Services />
    <Domain />
    <About />
    <Sponsors />
    <Pricing />
    <Testimonials />
    <Support />
    <Blog />
    <Footer />
  </div>
);

export default App;
