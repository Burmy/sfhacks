
import Hero from './Components/Hero/Hero'
import Track from './Components/Track/Track'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import FAQ from './Components/FAQ/FAQ'
import Sponsors from './Components/Sponsors/Sponsors'
import AboutUs from './Components/AboutUs/AboutUs'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Track />
      <FAQ />
      <Sponsors />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;