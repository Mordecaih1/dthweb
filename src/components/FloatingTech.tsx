import { motion } from "framer-motion";

export default function FloatingTech() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gentle Tech Hexagon Bouncing */}
      <motion.div
        className="absolute w-16 md:w-24 h-16 md:h-24 opacity-30 mix-blend-multiply md:mix-blend-normal"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ top: "25%", left: "10%" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500/40" fill="transparent" stroke="currentColor" strokeWidth="2">
          <polygon points="50 5 95 27 95 72 50 95 5 72 5 27" />
          <circle cx="50" cy="50" r="15" />
          <line x1="50" y1="5" x2="50" y2="35" />
          <line x1="95" y1="27" x2="63" y2="42" />
          <line x1="95" y1="72" x2="63" y2="57" />
          <line x1="50" y1="95" x2="50" y2="65" />
          <line x1="5" y1="72" x2="37" y2="57" />
          <line x1="5" y1="27" x2="37" y2="42" />
        </svg>
      </motion.div>

      {/* Another Geometric Tech Element */}
      <motion.div
        className="absolute w-20 md:w-32 h-20 md:h-32 opacity-20 mix-blend-multiply md:mix-blend-normal"
        animate={{
          y: [0, 50, 0],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ bottom: "20%", right: "12%" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-600/40" fill="transparent" stroke="currentColor" strokeWidth="1.5">
          <circle cx="50" cy="50" r="45" strokeDasharray="10 5" />
          <circle cx="50" cy="50" r="30" />
          <path d="M50 20 L50 80 M20 50 L80 50" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
}
