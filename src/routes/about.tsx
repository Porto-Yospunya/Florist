import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../pages/About";

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return <AboutPage />;
}