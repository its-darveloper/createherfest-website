// src/pages/landing/index.tsx
import AboutSection from "./components/AboutSection";
import EventSeries from "./components/EventSeries";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import PartnersMarquee from "./components/Partners";
import WorkshopSpeakers from "./components/UpcomingWorkshops";
import StatsSection from "./components/StatsSection";

const LandingPage = () => {
    return (
        <div className="w-full">
            <Hero />
            <StatsSection />
            <AboutSection />
            <WorkshopSpeakers />
            <EventSeries />
            
            <PartnersMarquee />
            {/* <FAQSection /> */}
        </div>
    )
}

export default LandingPage;