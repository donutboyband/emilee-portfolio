import { createFileRoute } from "@tanstack/react-router";
import AdditionalDesignStudies from "../../components/AdditionalDesignStudies";

export const Route = createFileRoute("/gallery/additional-design-studies")({
  component: AdditionalDesignStudiesPage,
});

function AdditionalDesignStudiesPage() {
  return <AdditionalDesignStudies />;
}
