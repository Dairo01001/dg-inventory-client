import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useAppSelector } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'
import AppSidebar from './app-sidebar'

export const PrivateLayout = () => {
  const { user, isAuthenticated } = useAppSelector(state => state.userSession)

  if (!user || !isAuthenticated) return <Navigate to="/login" />

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <main>
        <div className="p-2">
          <SidebarTrigger aria-describedby="Open menu" />
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default PrivateLayout
