import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { User } from '@/models'
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'

const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar
  },
  {
    title: 'Search',
    url: '#',
    icon: Search
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings
  }
]

interface AppSidebarProps {
  user: User
}

export const AppSidebar = ({ user }: AppSidebarProps) => {
  console.log(user)

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link className="flex items-center gap-2 font-bold" to="/">
                <h1>DG</h1>
                <span>Inventory</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Aplicación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
