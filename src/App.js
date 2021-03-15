import { useState, useEffect } from "react";
import Hero from './Components/Hero/Hero'
import Track from './Components/Track/Track'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import FAQ from './Components/FAQ/FAQ'
import Sponsors from './Components/Sponsors/Sponsors'
import AboutUs from './Components/AboutUs/AboutUs'
import GridLoader from "react-spinners/GridLoader";
import Fade from 'react-reveal/Fade';
import './App.css';

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1700)
  }, []
  )
  return (
    <div>
      <Fade>
        {
          loading ?
            <div class="loading">

              <GridLoader
                color={"#F7CA17"}
                loading={loading}
                size={30}
              />
              <h2>Welcome to SF HACKS!</h2>
            </div>

            :
            <div>
              <Navbar />
              <Fade>
                <Hero />
                <About />
                <Track />
                <FAQ />
                <Sponsors />
                <AboutUs />
                <Footer />
              </Fade>
            </div>
        }
      </Fade>
    </div>
  );
}

export default App;