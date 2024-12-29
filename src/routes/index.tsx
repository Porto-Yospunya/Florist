import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home";

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <Home />
    </div>
  )
}