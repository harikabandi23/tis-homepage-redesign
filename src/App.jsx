import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import AcademicsSection from './components/sections/AcademicsSection'
import AdmissionsSection from './components/sections/AdmissionsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/animation/ScrollProgress'

function App() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <AdmissionsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App