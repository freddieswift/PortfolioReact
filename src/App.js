import Header from './sections/header/Header'
import HeroSection from './sections/hero/HeroSection';
import CardSection from './sections/cardSection/CardSection';
import AboutMeSection from './sections/aboutMe/AboutMeSection';
import ContactMeSection from './sections/contactMe/ContactMeSection';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMeSection />
      <CardSection className='projectSection' sectionHeading='Projects' />
      <ContactMeSection />
    </>
  );
}

export default App;
