import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Sun, MoonStar } from 'lucide-react'
import { clsx } from 'clsx'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(
        'relative flex h-10 w-[4.5rem] items-center rounded-3xl border border-white/10',
        'bg-slate-900/70 dark:bg-slate-800/80 px-1 shadow-inner-glow',
        'transition-colors duration-500 ease-soft-spring',
        'hover:border-accentCyan/60'
      )}
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 350, damping: 26 }}
        className={clsx(
          'absolute h-8 w-8 rounded-full bg-gradient-to-tr from-accentCyan to-accentPurple shadow-glow',
          isDark ? 'right-1' : 'left-1'
        )}
      />
      <div className="relative z-10 flex w-full items-center justify-between px-1">
        <AnimatePresence initial={false} mode="popLayout">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="flex w-full items-center justify-start gap-1 text-xs text-slate-200"
            >
              <MoonStar className="h-4 w-4 text-accentPurple" />
              <span className="hidden sm:inline">Night</span>
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, y: -6, rotate: -45 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: 6, rotate: 45 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex w-full items-center justify-end gap-1 text-xs text-amber-200"
            >
              <span className="hidden sm:inline">Day</span>
              <Sun className="h-4 w-4 text-accentCyan" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </button>
  )
}
