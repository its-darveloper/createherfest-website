// src/pages/landing/index.tsx
import { Seo } from "@/components/Seo";
import AboutSection from "./components/AboutSection";
import EventSeries from "./components/EventSeries";
import Hero from "./components/Hero";
import PartnersMarquee from "./components/Partners";
import WorkshopSpeakers from "./components/UpcomingWorkshops";
import StatsSection from "./components/StatsSection";

const LandingPage = () => {
    return (
        <>
            <Seo 
                title="Home"
                description="CreateHER Fest is dedicated to bridging the gender gap in emerging tech through hands-on training in AI, Blockchain, and AR/VR. Join our community of women and allies tech innovators."
                url="https://createherfest-website-staging.web.app"
                image="https://www.templeton-recruitment.com/hs-fs/hubfs/getty_466086694_89091.jpg?width=1920&name=getty_466086694_89091.jpg"
                type="website"  // Use 'website' for homepage instead of 'article'
            />
        <div className="w-full">
            <Hero />
            <StatsSection />
            <AboutSection />
            <WorkshopSpeakers />
            <EventSeries />
            
            <PartnersMarquee />
            {/* <FAQSection /> */}
        </div>
        </>
    )
}

export default LandingPage;