import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface GlassCardProps {
  className?: string
  children: ReactNode
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={clsx(
        'glass-card relative overflow-hidden transition-transform duration-300 ease-soft-spring',
        'hover:-translate-y-1 hover:shadow-glow',
        'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent',
        className
      )}
    >
      {children}
    </div>
  )
}
