import { createFileRoute } from "@tanstack/react-router";
import CaseStudyTogethxr from "../../components/CaseStudyTogethxr";

export const Route = createFileRoute("/case-study/togethxr")({
  component: TogethxrPage,
});

function TogethxrPage() {
  return (
    <div className="w-full bg-white text-black">
      <CaseStudyTogethxr />
    </div>
  );
}
