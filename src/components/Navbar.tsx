import { Bell, Search, ChevronDown, User } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <header className="glass-card sticky top-3 z-20 flex items-center justify-between gap-3 bg-slate-950/85 px-3 py-2.5 sm:px-4">
      <div className="flex flex-1 items-center gap-2 sm:gap-3">
        <div className="relative hidden w-full max-w-xs items-center rounded-3xl bg-slate-900/70 px-3 py-1.5 shadow-inner-glow sm:flex">
          <Search className="mr-2 h-3.5 w-3.5 shrink-0 text-slate-500" />
          <input
            type="text"
            placeholder="Search societies, events..."
            className="w-full border-none bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-900/80 text-slate-300 shadow-inner-glow hover:text-accentCyan"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accentCyan/60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accentCyan shadow-glow" />
          </span>
        </button>

        <ThemeToggle />

        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 rounded-3xl bg-slate-900/80 px-2 py-1.5 text-xs text-slate-200 shadow-inner-glow hover:bg-slate-900"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-accentCyan to-accentPurple text-slate-950 shadow-glow">
            <User className="h-4 w-4" />
          </div>
          <div className="hidden flex-col text-left sm:flex">
            <span className="text-[11px] font-medium">Campus Admin</span>
            <span className="text-[10px] text-slate-400">societies@college</span>
          </div>
          <ChevronDown className="ml-1 hidden h-3 w-3 shrink-0 text-slate-400 sm:inline" />
        </motion.button>
      </div>
    </header>
  )
}
