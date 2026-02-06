import { createFileRoute } from "@tanstack/react-router";
import CaseStudyTraditionalMedicinals from "../../components/CaseStudyTraditionalMedicinals";

export const Route = createFileRoute("/case-study/traditional-medicinals")({
  component: TraditionalMedicinalsPage,
});

function TraditionalMedicinalsPage() {
  return (
    <div className="w-full bg-white text-black">
      <CaseStudyTraditionalMedicinals />
    </div>
  );
}
