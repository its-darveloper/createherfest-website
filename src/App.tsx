import './App.css'
import { Navigation } from './components/ui/navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing'
import Footer from './components/ui/navigation/Footer'
import AboutPage from './pages/about'
import SpeakersPage from './pages/speakers'
import WorkshopSchedulePage from './pages/schedule'
import FAQSection from './pages/faqs'
import PrivacyPolicy from './pages/privacy'
import CodeOfConduct from './pages/conduct'
import TermsAndConditions from './pages/terms'


function App() {
  return (

    <div className="w-full min-h-screen">
      <Navigation />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<FAQSection />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/schedule" element={<WorkshopSchedulePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />
    </div>
 
  )
}

export default App