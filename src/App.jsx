import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from './components/Services';
import Works from './components/Works';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <div id="home ">
        <Home />
      </div>
      <div id='service'>
        <Services/>
      </div>
      <div id='Works'>
        <Works/>
      </div>
      <div id='Team'>
        <Team/>
      </div>
      {/* <div id='Testimonial'>
        <Testimonial/>
      </div> */}
      <div id='FAQ'>
        <FAQ/>
      </div>
      <div id='Contact'>
        <Contact/>
      </div>
      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
