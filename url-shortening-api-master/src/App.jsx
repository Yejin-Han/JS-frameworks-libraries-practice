import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UrlShortener from './components/UrlShortener';
import AdvancedStatistics from './components/AdvancedStatistics';
import Boost from './components/Boost';
import Footer from './components/Footer';
import { GlobalStyle } from './assets/styles/GlobalStyles';

const App = () => {
  const [links, setLinks] = useState([]);

  const addLink  = (newLink) => {
    setLinks([newLink, ...links]);
  };

  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <Hero />
        <UrlShortener addLink={addLink} links={links} />
        <AdvancedStatistics />
        <Boost />
        <Footer />
      </main>
    </>
  )
}

export default App;