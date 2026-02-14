import { motion } from 'framer-motion'
import { GlassCard } from './GlassCard'
import { Users, Star, Calendar } from 'lucide-react'

interface SocietyCardProps {
  name: string
  members: number
  events: number
  rating: number
  category: string
}

export function SocietyCard({
  name,
  members,
  events,
  rating,
  category,
}: SocietyCardProps) {
  return (
    <motion.div
      className="[perspective:1000px]"
      whileHover={{ rotateX: 6, rotateY: -8, translateY: -6 }}
      transition={{ type: 'spring', stiffness: 230, damping: 18 }}
    >
      <GlassCard className="flex h-full flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accentCyan">
              {category}
            </p>
            <h3 className="mt-1 text-base font-semibold text-slate-50">{name}</h3>
          </div>
          <span className="rounded-full bg-slate-900/70 px-2 py-1 text-[10px] font-medium text-accentPurple">
            Featured
          </span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-accentCyan" />
            <span>{members} members</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-emerald-400" />
            <span>{events} events</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 text-yellow-400" />
            <span>{rating.toFixed(1)}/5</span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
