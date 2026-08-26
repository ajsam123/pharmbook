import {
  createRoute,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import { route } from "./utils/constants";
import LoginPage from "./pages/auth/LoginPage";
import AuthLayout from "./Layout/AuthLayout";

const rootRoute = createRootRoute();

// Homepage/index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Homepage,
});

// Layout Routes
const AuthLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth-layout",
  component: AuthLayout,
});

// Auth Routes
const LoginPageRoute = createRoute({
  getParentRoute: () => AuthLayoutRoute,
  path: route.LOGIN,
  component: LoginPage,
});

const DashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  DashboardRoute,
  AuthLayoutRoute.addChildren([LoginPageRoute]),
]);

export const router = createRouter({
  routeTree,
});
