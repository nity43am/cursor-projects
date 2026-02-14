import { type ReactNode, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { GlassCard } from './GlassCard'

interface StatCardProps {
  label: string
  value: number
  icon?: ReactNode
  suffix?: string
}

export function StatCard({ label, value, icon, suffix }: StatCardProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.2,
      ease: 'easeOut',
    })
    return () => controls.stop()
  }, [count, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <GlassCard className="flex h-full flex-col gap-4 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            {label}
          </p>
          {icon && (
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/60 text-accentCyan shadow-inner-glow">
              {icon}
            </div>
          )}
        </div>
        <div className="flex items-end justify-between gap-2">
          <div className="flex items-baseline gap-1">
            <motion.span className="text-2xl sm:text-3xl font-semibold text-slate-50">
              {rounded}
            </motion.span>
            {suffix && (
              <span className="text-xs font-medium text-slate-400">{suffix}</span>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
