import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VehicleShowcase from "@/components/VehicleShowcase";
import SearchFilter from "@/components/SearchFilter";
import LiveTracking from "@/components/LiveTracking";
import AIRecommendation from "@/components/AIRecommendation";
import Testimonials from "@/components/Testimonials";

export const Route = createFileRoute("/_layout/")({
  head: () => ({
    meta: [
      { title: "Voltride — Premium 3D Automobile Sharing Platform" },
      { name: "description", content: "Voltride is a futuristic automobile sharing platform with 3D vehicle preview, AI recommendations, real-time GPS, and seamless booking." },
      { property: "og:title", content: "Voltride — Drive the future, share the road" },
      { property: "og:description", content: "Premium vehicles, instant booking, real-time GPS and AI recommendations." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Features />
      <VehicleShowcase />
      <SearchFilter />
      <LiveTracking />
      <AIRecommendation />
      <Testimonials />
    </>
  );
}
