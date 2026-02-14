import { motion } from 'framer-motion'
import { BotMessageSquare } from 'lucide-react'

export function FloatingChatbot() {
  return (
    <div className="fixed bottom-24 right-4 z-40 sm:bottom-6 sm:right-6">
      <motion.button
        type="button"
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-accentCyan to-accentPurple text-slate-950 shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentCyan/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="pointer-events-none absolute -inset-1 rounded-full border border-accentCyan/40" />
        <span className="pointer-events-none absolute -inset-4 animate-[ring-pulse_2.8s_ease-out_infinite] rounded-full border border-accentCyan/40 opacity-60" />
        <BotMessageSquare className="relative h-5 w-5" />
      </motion.button>
    </div>
  )
}
