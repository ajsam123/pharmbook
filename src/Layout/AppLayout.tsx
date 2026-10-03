import AppHeader from "#components/app-header";
import { AppSidebar } from "#components/app-sidebar";
import { SidebarProvider } from "#components/ui/sidebar";
import { Outlet } from "@tanstack/react-router";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <AppHeader />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
