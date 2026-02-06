import { createFileRoute } from "@tanstack/react-router";
import About from "../components/About";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="w-full bg-white text-black">
      <About />
    </div>
  );
}
