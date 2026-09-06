import {
  createRoute,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/auth/LoginPage";
import AuthLayout from "./Layout/AuthLayout";
import { routes } from "./utils/constants/routes";
import SignUpPage from "./pages/auth/SignUpPage";

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
  path: routes.LOGIN,
  component: LoginPage,
});

const signUpPageRoute = createRoute({
  getParentRoute: () => AuthLayoutRoute,
  path: routes.SIGNUP,
  component: SignUpPage,
});

const DashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  DashboardRoute,
  AuthLayoutRoute.addChildren([LoginPageRoute, signUpPageRoute]),
]);

export const router = createRouter({
  routeTree,
});
