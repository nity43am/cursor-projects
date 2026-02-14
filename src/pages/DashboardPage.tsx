import { StatCard } from '../components/StatCard'
import { GlassCard } from '../components/GlassCard'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { Users, CalendarDays, Sparkles, BotMessageSquare } from 'lucide-react'

const activityData = [
  { day: 'Mon', events: 3, registrations: 48 },
  { day: 'Tue', events: 5, registrations: 76 },
  { day: 'Wed', events: 4, registrations: 64 },
  { day: 'Thu', events: 6, registrations: 92 },
  { day: 'Fri', events: 8, registrations: 136 },
  { day: 'Sat', events: 7, registrations: 118 },
  { day: 'Sun', events: 2, registrations: 32 },
]

const pieData = [
  { name: 'Tech', value: 32 },
  { name: 'Cultural', value: 26 },
  { name: 'Sports', value: 18 },
  { name: 'Arts', value: 14 },
  { name: 'Social', value: 10 },
]

const PIE_COLORS = ['#00f5ff', '#a855f7', '#22c55e', '#f97316', '#eab308']

export function DashboardPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accentCyan">
            Overview
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
            Campus Society Command Center
          </h1>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            Monitor societies, events and AI insights, all in one rich
            dashboard.
          </p>
        </div>
        <button type="button" className="btn-primary mt-2 w-full sm:mt-0 sm:w-auto">
          <Sparkles className="mr-1.5 h-4 w-4" />
          Generate AI Highlights
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        <StatCard
          label="Active Societies"
          value={28}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard
          label="Events This Month"
          value={64}
          icon={<CalendarDays className="h-4 w-4" />}
        />
        <StatCard
          label="AI Matches Generated"
          value={412}
          icon={<BotMessageSquare className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="p-4 sm:p-5 lg:col-span-2">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-semibold text-slate-50">
                Weekly Engagement
              </h2>
              <p className="text-[11px] text-slate-400">
                Events and registrations across the current week.
              </p>
            </div>
          </div>
          <div className="mt-4 h-60 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={activityData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#020617',
                    borderRadius: 16,
                    border: '1px solid rgba(148,163,184,0.3)',
                    padding: 8,
                  }}
                  labelStyle={{ color: '#e5e7eb', fontSize: 12 }}
                />
                <Line
                  type="monotone"
                  dataKey="events"
                  stroke="#00f5ff"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="registrations"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-4 sm:p-5">
          <h2 className="text-sm font-semibold text-slate-50">Society Mix</h2>
          <p className="text-[11px] text-slate-400">
            Breakdown of active societies by domain.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-40 w-40 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={entry.name}
                        fill={PIE_COLORS[index % PIE_COLORS.length]}
                        stroke="transparent"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="min-w-0 flex-1 space-y-1.5 text-[11px]">
              {pieData.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-2 rounded-2xl bg-slate-900/70 px-2 py-1.5"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: PIE_COLORS[index] }}
                    />
                    <span className="truncate text-slate-200">{item.name}</span>
                  </div>
                  <span className="shrink-0 font-semibold text-slate-50">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="p-4 sm:p-5 lg:col-span-2">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-slate-50">
              Recent Activity
            </h2>
            <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[10px] text-slate-400">
              Auto-synced every 2 min
            </span>
          </div>
          <ul className="mt-3 space-y-2.5 text-[12px] text-slate-300">
            <li className="flex items-center justify-between gap-2 rounded-2xl bg-slate-900/70 px-3 py-2">
              <span>
                Robotics Society created{' '}
                <span className="font-medium text-slate-100">
                  Autonomous Drone Workshop
                </span>
              </span>
              <span className="shrink-0 text-[11px] text-slate-500">
                2 mins ago
              </span>
            </li>
            <li className="flex items-center justify-between gap-2 rounded-2xl bg-slate-900/70 px-3 py-2">
              <span>
                Cultural Club published{' '}
                <span className="font-medium text-slate-100">
                  Inter-college Dance Fest
                </span>
              </span>
              <span className="shrink-0 text-[11px] text-slate-500">
                16 mins ago
              </span>
            </li>
            <li className="flex items-center justify-between gap-2 rounded-2xl bg-slate-900/70 px-3 py-2">
              <span>
                AI Assistant generated personalized society matches for{' '}
                <span className="font-medium text-slate-100">48 new students</span>
              </span>
              <span className="shrink-0 text-[11px] text-slate-500">
                24 mins ago
              </span>
            </li>
          </ul>
        </GlassCard>

        <GlassCard className="p-4 sm:p-5">
          <h2 className="text-sm font-semibold text-slate-50">
            Upcoming Highlights
          </h2>
          <p className="text-[11px] text-slate-400">
            Curated by the recommendation engine.
          </p>
          <ul className="mt-3 space-y-2.5 text-[12px] text-slate-300">
            <li className="rounded-2xl bg-slate-900/70 px-3 py-2">
              <span className="font-medium text-slate-100">
                Hack the Campus 2.0
              </span>
              <p className="text-[11px] text-slate-400">
                High match for CS & ECE students interested in AI.
              </p>
            </li>
            <li className="rounded-2xl bg-slate-900/70 px-3 py-2">
              <span className="font-medium text-slate-100">
                Night Under The Stars
              </span>
              <p className="text-[11px] text-slate-400">
                Astronomy & Photography societies co-hosted stargazing.
              </p>
            </li>
          </ul>
        </GlassCard>
      </div>
    </div>
  )
}
