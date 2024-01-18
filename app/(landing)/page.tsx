import { Button } from "@/components/ui/button";
import Link from "next/link";

import { LandingNavBar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

const LandingPage = () => {
  return (
  <div className="h-screen">

    <LandingNavBar />
    <LandingHero />
    <LandingContent />
    
  </div>
  )
};

export default LandingPage;