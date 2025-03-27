import { Link, Outlet, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  ScrollText,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Reports", href: "/reports", icon: ScrollText },
]

export function RootLayout() {
  const location = useLocation()

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 border-r bg-card">
        <div className="flex h-full flex-col">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">Audit App</h2>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
} 