import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BotMessageSquare,
} from 'lucide-react'
import { clsx } from 'clsx'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/societies', label: 'Societies', icon: Users },
  { to: '/events', label: 'Events', icon: CalendarDays },
  { to: '/ai', label: 'AI Hub', icon: BotMessageSquare },
]

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 76 : 240 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className="glass-card fixed inset-y-3 left-3 z-30 hidden h-[calc(100vh-1.5rem)] flex-col overflow-hidden bg-slate-950/80 px-3 py-4 md:flex"
      >
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accentCyan to-accentPurple shadow-glow">
              <span className="text-xs font-bold text-slate-950">CS</span>
            </div>
            {!collapsed && (
              <div className="flex min-w-0 flex-col overflow-hidden">
                <span className="truncate text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  College
                </span>
                <span className="truncate text-[11px] text-slate-500">
                  Society Portal
                </span>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={onToggle}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl bg-slate-900/80 text-[10px] text-slate-400 shadow-inner-glow hover:text-accentCyan"
          >
            {collapsed ? '>>' : '<<'}
          </button>
        </div>

        <nav className="mt-6 flex-1 space-y-1 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  clsx(
                    'group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-xs font-medium text-slate-300 transition-all duration-300',
                    'hover:bg-slate-900/80 hover:text-accentCyan',
                    isActive &&
                      'bg-gradient-to-r from-accentCyan/15 via-accentPurple/10 to-transparent text-accentCyan shadow-[0_0_18px_rgba(168,85,247,0.35)]'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={clsx(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 text-slate-300 shadow-inner-glow',
                        isActive && 'border-accentCyan/60 text-accentCyan'
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    {!collapsed && (
                      <span className="truncate text-[11px] tracking-wide">
                        {link.label}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>

        {!collapsed && (
          <div className="mt-4 shrink-0 rounded-2xl bg-slate-900/80 p-3 text-[11px] text-slate-400">
            <p className="font-medium text-slate-200">Semester Fest Overview</p>
            <p className="mt-1">
              Track societies, events and AI-powered insights from a single
              pane.
            </p>
          </div>
        )}
      </motion.aside>

      {/* Mobile bottom nav */}
      <nav className="glass-card fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-1 overflow-hidden bg-slate-950/90 px-2 py-2 md:hidden">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1.5 text-[10px] font-medium transition-all',
                  isActive
                    ? 'bg-slate-900 text-accentCyan shadow-glow'
                    : 'text-slate-400 hover:text-accentCyan'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={clsx(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/90 text-slate-300',
                      isActive && 'border-accentCyan/60 text-accentCyan'
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">{link.label}</span>
                </>
              )}
            </NavLink>
          )
        })}
      </nav>
    </>
  )
}
