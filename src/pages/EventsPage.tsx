import { EventCard } from '../components/EventCard'
import { GlassCard } from '../components/GlassCard'
import { CalendarDays } from 'lucide-react'

const events = [
  {
    title: 'Hack the Campus 2.0',
    date: 'Fri · 14 Mar · 6:00 PM',
    venue: 'Innovation Lab · Block C',
    capacity: 120,
    registered: 104,
    status: 'Upcoming' as const,
  },
  {
    title: 'Inter-College Dance Fest',
    date: 'Sat · 15 Mar · 7:30 PM',
    venue: 'Open Air Theatre',
    capacity: 320,
    registered: 312,
    status: 'Live' as const,
  },
  {
    title: 'Sustainability Ideas Marathon',
    date: 'Sun · 23 Mar · 10:00 AM',
    venue: 'Auditorium · Block A',
    capacity: 180,
    registered: 162,
    status: 'Upcoming' as const,
  },
  {
    title: 'Photography Walk: Old City',
    date: 'Sun · 23 Mar · 5:30 AM',
    venue: 'Main Gate Assembly',
    capacity: 60,
    registered: 54,
    status: 'Completed' as const,
  },
]

export function EventsPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accentCyan">
            Events
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
            Live Campus Timeline
          </h1>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            Track capacities, statuses and highlight events in real-time.
          </p>
        </div>
        <button type="button" className="btn-primary mt-2 w-full sm:mt-0 sm:w-auto">
          <CalendarDays className="mr-1.5 h-4 w-4" />
          Create new event
        </button>
      </div>

      <GlassCard className="p-3 sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
          <span>
            <span className="font-semibold text-accentCyan">{events.length}</span>{' '}
            curated events • optimized for engagement & capacity.
          </span>
          <span className="rounded-full bg-slate-900/70 px-3 py-1 text-slate-400">
            Auto-capacity alerts enabled
          </span>
        </div>
      </GlassCard>

      <div className="grid gap-3 md:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  )
}
