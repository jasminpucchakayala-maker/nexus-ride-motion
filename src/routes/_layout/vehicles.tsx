import { createFileRoute } from "@tanstack/react-router";
import VehicleShowcase from "@/components/VehicleShowcase";
import SearchFilter from "@/components/SearchFilter";

export const Route = createFileRoute("/_layout/vehicles")({
  head: () => ({
    meta: [
      { title: "Vehicles — Voltride" },
      { name: "description", content: "Browse our premium fleet — luxury cars, EVs, bikes and scooters in interactive 3D." },
      { property: "og:title", content: "The Voltride 3D Showroom" },
      { property: "og:description", content: "Explore the entire fleet in fully interactive 3D." },
    ],
  }),
  component: VehiclesPage,
});

function VehiclesPage() {
  return (
    <div className="pt-28">
      <div className="px-6 pt-10 text-center">
        <h1 className="text-5xl font-bold">The <span className="text-gradient">Showroom</span></h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Step inside our cinematic 3D fleet. Spin, recolor and reserve.
        </p>
      </div>
      <VehicleShowcase />
      <SearchFilter />
    </div>
  );
}
