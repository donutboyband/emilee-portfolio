import { createFileRoute } from "@tanstack/react-router";
import CaseStudyDeborahPagani from "../../components/CaseStudyDeborahPagani";

export const Route = createFileRoute("/case-study/deborah-pagani")({
  component: DeborahPaganiPage,
});

function DeborahPaganiPage() {
  return (
    <div className="w-full bg-white text-black">
      <CaseStudyDeborahPagani />
    </div>
  );
}
