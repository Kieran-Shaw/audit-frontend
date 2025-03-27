import { useLocation, Link } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  BarChart, 
  ArrowUpCircle,
} from 'lucide-react'

import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar'

import { NavMain } from '@/components/nav-main'

interface AppShellProps {
  children: React.ReactNode
}

const navItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Clients', url: '/clients', icon: Users },
  { title: 'Reports', url: '/reports', icon: FileText },
]

export function AppShell({ children }: AppShellProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="w-64 border-r border-neutral-800 bg-[#121212] text-white" collapsible="offcanvas">
          <SidebarHeader className="px-4 py-3">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="data-[slot=sidebar-menu-button]:!p-1.5"
                >
                  <Link to="/" className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-blue-500" />
                    <span className="text-base font-semibold">Audit App</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <NavMain items={navItems} />
          </SidebarContent>
          <SidebarFooter className="p-4 border-t border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-neutral-700 flex items-center justify-center text-white font-medium">
                KS
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">User</span>
                <span className="text-xs text-neutral-400">user@example.com</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <main className="flex-1 overflow-auto bg-white">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
} 