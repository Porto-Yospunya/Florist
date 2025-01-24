// Import ...
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

// Import components
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <TanStackRouterDevtools />
    </div>
  ),
});