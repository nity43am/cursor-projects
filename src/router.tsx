import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { GlassCard } from './components/GlassCard'

const DashboardPage = lazy(() =>
  import('./pages/DashboardPage').then((mod) => ({ default: mod.DashboardPage }))
)
const SocietiesPage = lazy(() =>
  import('./pages/SocietiesPage').then((mod) => ({
    default: mod.SocietiesPage,
  }))
)
const EventsPage = lazy(() =>
  import('./pages/EventsPage').then((mod) => ({ default: mod.EventsPage }))
)
const AiPage = lazy(() =>
  import('./pages/AiPage').then((mod) => ({ default: mod.AiPage }))
)

function Loader() {
  return (
    <div className="flex items-center justify-center py-10">
      <GlassCard className="px-4 py-3 text-xs text-slate-300">
        Loading experience…
      </GlassCard>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: '/societies',
        element: (
          <Suspense fallback={<Loader />}>
            <SocietiesPage />
          </Suspense>
        ),
      },
      {
        path: '/events',
        element: (
          <Suspense fallback={<Loader />}>
            <EventsPage />
          </Suspense>
        ),
      },
      {
        path: '/ai',
        element: (
          <Suspense fallback={<Loader />}>
            <AiPage />
          </Suspense>
        ),
      },
    ],
  },
])
