import {
  createRoute,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/auth/LoginPage";
import AuthLayout from "./Layout/AuthLayout";
import AppLayout from "./Layout/AppLayout";
import { routes } from "./utils/constants/routes";
import SignUpPage from "./pages/auth/SignUpPage";
import Inventory from "./pages/Inventory";

const rootRoute = createRootRoute();

// Homepage/index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Homepage,
});

// Layout Routes ////

// Auth Layout
const AuthLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "auth-layout",
  component: AuthLayout,
});

// App Layout

const AppLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "app-layout",
  component: AppLayout,
});

// Auth Routes
const LoginPageRoute = createRoute({
  getParentRoute: () => AuthLayoutRoute,
  path: routes.LOGIN,
  component: LoginPage,
});

const signUpPageRoute = createRoute({
  getParentRoute: () => AuthLayoutRoute,
  path: routes.SIGNUP,
  component: SignUpPage,
});

const DashboardRoute = createRoute({
  getParentRoute: () => AppLayoutRoute,
  path: routes.DASHBOARD,
  component: Dashboard,
});

const InventoryRoute = createRoute({
  getParentRoute: () => AppLayoutRoute,
  path: routes.INVENTORY,
  component: Inventory,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  AuthLayoutRoute.addChildren([LoginPageRoute, signUpPageRoute]),
  AppLayoutRoute.addChildren([DashboardRoute, InventoryRoute]),
]);

export const router = createRouter({
  routeTree,
});
