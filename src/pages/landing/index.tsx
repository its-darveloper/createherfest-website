// src/pages/landing/index.tsx
import { useSeo } from "@/hooks/useSeo";
import { useEffect, useState } from 'react';
import { getRecentWorkshops } from '@/lib/sanity';
import type { Workshop } from '@/types/sanity';
import AboutSection from "./components/AboutSection";
import EventSeries from "./components/EventSeries";
import Hero from "./components/Hero";
import PartnersMarquee from "./components/Partners";
import WorkshopSpeakers from "./components/UpcomingWorkshops";
import StatsSection from "./components/StatsSection";

const LandingPage = () => {
    const [workshops, setWorkshops] = useState<Workshop[]>([]);

    useEffect(() => {
        const fetchWorkshops = async () => {
            const data = await getRecentWorkshops();
            setWorkshops(data);
        };
        fetchWorkshops();
    }, []);

    useSeo({
        title: "Home",
        description: "CreateHER Fest is dedicated to bridging the gender gap in emerging tech through hands-on training in AI, Blockchain, and AR/VR.",
        type: "website",
        workshops: workshops
    });

    return (
        <div className="w-full">
            <Hero />
            <StatsSection />
            <AboutSection />
            <WorkshopSpeakers />
            <EventSeries />
            <PartnersMarquee />
        </div>
    );
};

export default LandingPage;