import type { Metadata } from "next";
import { Hero } from "@/features/landing/components/hero";
import { LandingFooter } from "@/features/landing/components/landing-footer";
import { LandingHeader } from "@/features/landing/components/landing-header";
import {
  CtaSection,
  FeatureGrid,
  HowItWorks,
  RewardsSection,
} from "@/features/landing/components/sections";

export const metadata: Metadata = {
  title: "XPVest — Learn, Simulate & Earn",
  description:
    "Build money confidence before it's real. XPVest teaches finance with short lessons, a simulated portfolio and coin rewards you can redeem in your favourite games.",
};

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <LandingHeader />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <RewardsSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
