import { SocietyCard } from '../components/SocietyCard'
import { GlassCard } from '../components/GlassCard'
import { Sparkles } from 'lucide-react'

const societies = [
  {
    name: 'Robotics & Automation Society',
    members: 148,
    events: 12,
    rating: 4.8,
    category: 'Tech & Innovation',
  },
  {
    name: 'Cultural Performing Arts Club',
    members: 212,
    events: 18,
    rating: 4.9,
    category: 'Cultural',
  },
  {
    name: 'AI & Data Science Circle',
    members: 132,
    events: 14,
    rating: 4.7,
    category: 'Tech',
  },
  {
    name: 'Entrepreneurship Cell',
    members: 96,
    events: 9,
    rating: 4.6,
    category: 'Leadership',
  },
  {
    name: 'Photography & Cinematics',
    members: 84,
    events: 7,
    rating: 4.5,
    category: 'Arts',
  },
  {
    name: 'Environmental Action Forum',
    members: 103,
    events: 10,
    rating: 4.4,
    category: 'Social Impact',
  },
]

export function SocietiesPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accentCyan">
            Societies
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
            Discover Campus Communities
          </h1>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            Browse societies with rich 3D hover states and glassmorphism cards.
          </p>
        </div>
        <button type="button" className="btn-primary mt-2 w-full sm:mt-0 sm:w-auto">
          <Sparkles className="mr-1.5 h-4 w-4" />
          Smart society suggestions
        </button>
      </div>

      <GlassCard className="p-3 sm:p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[12px] text-slate-300">
            <p>
              <span className="font-semibold text-accentCyan">28</span> active
              societies ·{' '}
              <span className="font-semibold text-accentPurple">6</span> new
              registrations this week.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <button
              type="button"
              className="rounded-2xl bg-slate-900/80 px-3 py-1.5 text-slate-200"
            >
              All
            </button>
            <button
              type="button"
              className="rounded-2xl bg-slate-900/60 px-3 py-1.5 text-slate-400"
            >
              Tech
            </button>
            <button
              type="button"
              className="rounded-2xl bg-slate-900/60 px-3 py-1.5 text-slate-400"
            >
              Cultural
            </button>
            <button
              type="button"
              className="rounded-2xl bg-slate-900/60 px-3 py-1.5 text-slate-400"
            >
              Sports
            </button>
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {societies.map((society) => (
          <SocietyCard key={society.name} {...society} />
        ))}
      </div>
    </div>
  )
}
