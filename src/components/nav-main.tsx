import { useLocation, Link } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

interface NavItem {
  title: string
  icon: LucideIcon
  url: string
}

interface NavMainProps {
  items: NavItem[]
}

export function NavMain({ items }: NavMainProps) {
  const location = useLocation()

  return (
    <SidebarMenu>
      {items.map((item) => {
        const isActive = location.pathname === item.url

        return (
          <SidebarMenuItem key={item.title} className="px-3 py-1">
            <SidebarMenuButton
              asChild
              isActive={isActive}
              className={isActive ? 
                "bg-blue-600/20 text-blue-500" : 
                "text-neutral-400 hover:bg-neutral-800/50 hover:text-white"}
            >
              <Link to={item.url} className="flex items-center gap-3 px-3 py-2 text-sm">
                <item.icon className={`h-5 w-5 ${isActive ? "text-blue-500" : "text-neutral-400"}`} />
                {item.title}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
} 