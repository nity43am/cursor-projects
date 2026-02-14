import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { clsx } from 'clsx'
import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'

export function RootLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <div className="relative min-h-screen text-slate-50">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />

      <main
        className={clsx(
          'relative flex min-h-screen flex-col transition-[padding-left] duration-300 ease-soft-spring',
          collapsed ? 'md:pl-[100px]' : 'md:pl-[264px]'
        )}
      >
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <Navbar />
        </div>

        <div className="px-3 pb-24 pt-3 sm:px-4 sm:pt-4 md:pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
