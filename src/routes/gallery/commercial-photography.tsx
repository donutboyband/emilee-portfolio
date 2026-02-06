import { createFileRoute } from "@tanstack/react-router";
import CommercialPhotography from "../../components/CommercialPhotography";

export const Route = createFileRoute("/gallery/commercial-photography")({
  component: CommercialPhotographyPage,
});

function CommercialPhotographyPage() {
  return <CommercialPhotography />;
}
