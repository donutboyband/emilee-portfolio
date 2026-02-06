import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-full bg-white text-black">
      <Hero />

      {/* Anchor targets for nav links */}
      <section id="featured" className="sr-only">
        Featured work
      </section>
      <section id="about" className="sr-only">
        About
      </section>
    </div>
  );
}
