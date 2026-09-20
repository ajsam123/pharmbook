import { AppSidebar } from "#components/app-sidebar";
import { SidebarProvider } from "#components/ui/sidebar";
import { Outlet } from "@tanstack/react-router";

const AppLayout = () => {
  return (
    <div className="w-full flex flex-row gap-5">
      <SidebarProvider>
        <AppSidebar />
        <Outlet />
      </SidebarProvider>
    </div>
  );
};

export default AppLayout;
