import { createFileRoute } from "@tanstack/react-router";
import CaseStudyNalgene from "../../components/CaseStudyNalgene";

export const Route = createFileRoute("/case-study/nalgene")({
  component: NalgenePage,
});

function NalgenePage() {
  return (
    <div className="w-full bg-white text-black">
      <CaseStudyNalgene />
    </div>
  );
}
