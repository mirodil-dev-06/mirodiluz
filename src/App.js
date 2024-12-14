import React, { useState, useEffect } from 'react';
import ScrollProgressBar from './components/scrollProgressBar/ScrollProgressBar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import TimeLine from './components/timeLine/TimeLine';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import Nav from './components/nav/Nav';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <ScrollProgressBar />
          <Nav />
          <Hero />
          <About />
          <TimeLine />
          <Portfolio />
          <Contact />
          <ScrollToTopButton />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
