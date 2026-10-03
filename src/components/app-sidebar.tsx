import { Link } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { routes } from "../utils/constants/routes";
import {
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const items: NavItem[] = [
  {
    title: "Dashboard",
    url: routes.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: "Inventory",
    url: routes.INVENTORY,
    icon: Package,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      {/* ////// ---Header----- ///// */}
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-4">
          <Package />
          <span className="font-bold">PharmBook</span>
        </div>
      </SidebarHeader>

      {/* Contents of the Sidebar */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((s) => (
              <SidebarMenuItem key={s.title}>
                <SidebarMenuButton asChild>
                  <Link
                    to={s.url}
                    className="flex py-3 dark:text-white px-4 hover:cursor-pointer rounded-4  items-center w-full gap-3 body-medium-semibold"
                    activeProps={{
                      className:
                        "bg-primary/10 py-3 px-4 rounded-xl flex w-full text-primary gap-3 relative body-medium-semibold",
                    }}
                  >
                    <s.icon />
                    <span>{s.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>

      {/* // Footer */}
      <SidebarFooter>
        <SidebarMenu>
          {/* Settings */}
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Logout */}
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
