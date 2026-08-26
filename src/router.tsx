import {
  createRoute,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";

const rootRoute = createRootRoute();

// Homepage/index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Homepage,
});

const DashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren([indexRoute, DashboardRoute]);

export const router = createRouter({
  routeTree,
});
