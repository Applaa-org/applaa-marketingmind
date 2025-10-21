import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet,
  redirect
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from './components/Layout';
import DashboardPage from './pages/dashboard/Index';
import CoursesPage from './pages/courses/Index';
import CourseDetailPage from './pages/courses/Detail';
import AiMentorPage from './pages/ai-mentor/Index';
import PricingPage from './pages/pricing/Index';
import CertificationsPage from './pages/certifications/Index';

const queryClient = new QueryClient();

// Create root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppLayout />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Index route redirects to dashboard
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  loader: () => redirect({ to: '/dashboard' }),
})

const dashboardRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage,
})

const coursesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/courses',
  component: CoursesPage,
})

const courseDetailRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/courses/$courseId',
  component: CourseDetailPage,
})

const aiMentorRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/ai-mentor',
  component: AiMentorPage,
})

const pricingRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/pricing',
  component: PricingPage,
})

const certificationsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/certifications',
  component: CertificationsPage,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  coursesRoute,
  courseDetailRoute,
  aiMentorRoute,
  pricingRoute,
  certificationsRoute,
])

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;