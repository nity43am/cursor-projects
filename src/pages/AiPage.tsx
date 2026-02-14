import { GlassCard } from '../components/GlassCard'
import { BotMessageSquare, Sparkles, Stars } from 'lucide-react'
import { motion } from 'framer-motion'

const sparkleVariants = {
  initial: { opacity: 0, scale: 0.4, y: 10 },
  animate: {
    opacity: [0, 1, 0],
    scale: [0.4, 1, 0.7],
    y: [10, -4, 0],
    transition: {
      duration: 2.4,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
}

export function AiPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accentCyan">
            AI Studio
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
            AI Society Recommendations
          </h1>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            A glassy, animated surface for smart matches between students and
            societies.
          </p>
        </div>
      </div>

      <GlassCard className="relative overflow-hidden p-4 sm:p-6">
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-accentCyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-accentPurple/10 blur-3xl" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-950/70 px-3 py-1 text-[11px] text-accentCyan">
              <BotMessageSquare className="h-3.5 w-3.5 shrink-0" />
              AI engine tuned for student engagement
            </div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Hyper-personal recommendations for every student.
            </h2>
            <p className="text-[12px] text-slate-300 sm:text-sm">
              Our AI engine ingests course history, expressed interests, time
              availability and historic attendance to surface a ranked list of
              societies and events. Every prediction is explainable, and tuned
              for long-term campus engagement.
            </p>

            <div className="grid gap-2 text-[12px] sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950/70 px-3 py-2">
                <p className="text-xs font-semibold text-accentCyan">
                  Matching signals
                </p>
                <p className="mt-1 text-[11px] text-slate-300">
                  Academics, previous registrations, peer graph and declared
                  passions.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-950/70 px-3 py-2">
                <p className="text-xs font-semibold text-accentPurple">
                  Control & safety
                </p>
                <p className="mt-1 text-[11px] text-slate-300">
                  Admin overrides, bias dashboards and transparent scoring.
                </p>
              </div>
            </div>

            <button type="button" className="btn-primary mt-1 w-full sm:w-auto">
              <Sparkles className="mr-1.5 h-4 w-4" />
              Generate sample recommendations
            </button>
          </div>

          <div className="relative mt-4 w-full max-w-xs sm:mt-0">
            <div className="glass-card relative overflow-hidden p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400">
                    Sample student
                  </p>
                  <p className="truncate text-sm font-semibold text-slate-50">
                    Priya · 2nd year CSE
                  </p>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accentCyan to-accentPurple text-slate-950 shadow-glow">
                  <Stars className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-3 space-y-2 text-[11px] text-slate-300">
                <p>
                  Prefers <span className="font-semibold">weekend</span> events,
                  loves{' '}
                  <span className="font-semibold">
                    AI, robotics & photography
                  </span>
                  .
                </p>
                <p>
                  Attended{' '}
                  <span className="font-semibold">8/10</span> recommended events
                  last month.
                </p>
              </div>

              <div className="mt-3 space-y-1.5 text-[11px]">
                <p className="text-[11px] font-semibold text-slate-400">
                  Top matches
                </p>
                <div className="rounded-2xl bg-slate-950/70 px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-slate-50">
                      Robotics & Automation Society
                    </span>
                    <span className="shrink-0 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
                      96% fit
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Strong overlap on AI, projects and weekend hackathons.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/70 px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-slate-50">
                      Photography & Cinematics
                    </span>
                    <span className="shrink-0 rounded-full bg-sky-500/15 px-2 py-0.5 text-[10px] text-sky-300">
                      88% fit
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Visual storytelling + late evening events align with
                    patterns.
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accentCyan/20 blur-xl" />
              <div className="pointer-events-none absolute -left-6 bottom-0 h-16 w-16 rounded-full bg-accentPurple/25 blur-xl" />
            </div>

            {/* Sparkles overlay */}
            <div className="pointer-events-none absolute inset-0">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  variants={sparkleVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute h-2 w-2 rounded-full bg-accentCyan/70 shadow-glow"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${20 + i * 15}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
