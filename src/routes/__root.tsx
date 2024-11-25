import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeProvider } from "@/components/theme-provider"
                            
export const Route = createRootRoute({
  component: () => (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
     <Navbar/>
      <div > 

      <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
})
