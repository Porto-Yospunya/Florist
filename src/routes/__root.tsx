import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Navbar } from "../components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </div>
  ),
});