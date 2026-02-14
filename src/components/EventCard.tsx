import { motion } from 'framer-motion'
import { GlassCard } from './GlassCard'
import { CalendarDays, MapPin, Users } from 'lucide-react'
import { clsx } from 'clsx'

type Status = 'Upcoming' | 'Live' | 'Completed'

interface EventCardProps {
  title: string
  date: string
  venue: string
  capacity: number
  registered: number
  status: Status
}

export function EventCard({
  title,
  date,
  venue,
  capacity,
  registered,
  status,
}: EventCardProps) {
  const percentage = Math.min(100, Math.round((registered / capacity) * 100))

  const statusClasses: Record<Status, string> = {
    Upcoming:
      'bg-amber-500/15 text-amber-300 border-amber-400/40 shadow-[0_0_12px_rgba(251,191,36,0.35)]',
    Live:
      'bg-emerald-500/15 text-emerald-300 border-emerald-400/40 shadow-[0_0_14px_rgba(16,185,129,0.45)]',
    Completed:
      'bg-slate-500/20 text-slate-200 border-slate-300/40 shadow-[0_0_10px_rgba(148,163,184,0.35)]',
  }

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-[1px] hover:shadow-[0_0_40px_rgba(0,245,255,0.35)]"
    >
      <GlassCard className="h-full bg-slate-950/70 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              <CalendarDays className="h-3 w-3 text-accentCyan" />
              {date}
            </p>
            <h3 className="mt-1 text-base font-semibold text-slate-50">{title}</h3>
          </div>
          <div className="relative">
            <span
              className={clsx(
                'flex items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]',
                statusClasses[status]
              )}
            >
              <span
                className={clsx(
                  'relative mr-1 inline-flex h-1.5 w-1.5 rounded-full',
                  status === 'Live'
                    ? 'bg-emerald-400'
                    : status === 'Upcoming'
                      ? 'bg-amber-300'
                      : 'bg-slate-300'
                )}
              >
                {status === 'Live' && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                )}
              </span>
              {status}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 text-[12px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-accentPurple" />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-emerald-400" />
            <span>
              {registered}/{capacity} filled
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Capacity</span>
            <span className="font-medium text-slate-200">{percentage}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800/80">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-accentCyan via-emerald-400 to-accentPurple shadow-glow"
            />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
