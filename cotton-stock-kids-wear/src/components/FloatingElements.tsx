import { motion } from "framer-motion";

const Cloud = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
  >
    <motion.svg
      viewBox="0 0 200 100"
      className="w-full h-full"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <ellipse cx="60" cy="60" rx="40" ry="30" fill="white" opacity="0.9" />
      <ellipse cx="100" cy="50" rx="50" ry="35" fill="white" opacity="0.95" />
      <ellipse cx="150" cy="60" rx="35" ry="25" fill="white" opacity="0.9" />
      <ellipse cx="80" cy="45" rx="30" ry="25" fill="white" opacity="0.85" />
      <ellipse cx="130" cy="45" rx="35" ry="28" fill="white" opacity="0.9" />
    </motion.svg>
  </motion.div>
);

const Balloon = ({ 
  color, 
  className, 
  delay = 0 
}: { 
  color: string; 
  className?: string; 
  delay?: number 
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1 }}
  >
    <motion.svg
      viewBox="0 0 60 100"
      className="w-full h-full drop-shadow-lg"
      animate={{ 
        y: [0, -15, 0],
        rotate: [-3, 3, -3]
      }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id={`balloon-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.7 }} />
        </linearGradient>
      </defs>
      <ellipse cx="30" cy="35" rx="25" ry="32" fill={`url(#balloon-gradient-${color})`} />
      <ellipse cx="20" cy="25" rx="8" ry="10" fill="white" opacity="0.3" />
      <polygon points="25,65 35,65 30,75" fill={color} opacity="0.8" />
      <path d="M30 75 Q32 82 28 90 Q26 95 30 100" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
    </motion.svg>
  </motion.div>
);

const Star = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <motion.svg
      viewBox="0 0 50 50"
      className="w-full h-full"
      animate={{ 
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <polygon
        points="25,2 32,18 50,20 37,32 40,50 25,42 10,50 13,32 0,20 18,18"
        fill="hsl(45, 90%, 75%)"
        className="drop-shadow-sm"
      />
    </motion.svg>
  </motion.div>
);

const Heart = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <motion.svg
      viewBox="0 0 50 50"
      className="w-full h-full"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M25 45 C10 30 0 20 5 12 C10 4 20 5 25 15 C30 5 40 4 45 12 C50 20 40 30 25 45"
        fill="hsl(340, 65%, 80%)"
        className="drop-shadow-sm"
      />
    </motion.svg>
  </motion.div>
);

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Clouds */}
      <Cloud className="absolute top-10 left-[5%] w-32 md:w-48 opacity-80" delay={0} />
      <Cloud className="absolute top-20 right-[10%] w-28 md:w-40 opacity-70" delay={0.3} />
      <Cloud className="absolute top-40 left-[60%] w-24 md:w-32 opacity-60" delay={0.6} />

      {/* Balloons */}
      <Balloon color="#8BC4E8" className="absolute top-[15%] left-[8%] w-12 md:w-16" delay={0.2} />
      <Balloon color="#F5B5C8" className="absolute top-[25%] right-[12%] w-10 md:w-14" delay={0.5} />
      <Balloon color="#A8DBC9" className="absolute top-[10%] left-[75%] w-8 md:w-12" delay={0.8} />
      <Balloon color="#F9D89C" className="absolute top-[30%] left-[15%] w-9 md:w-12" delay={1.1} />

      {/* Stars */}
      <Star className="absolute top-[20%] left-[25%] w-6 md:w-8" delay={0.3} />
      <Star className="absolute top-[35%] right-[20%] w-5 md:w-7" delay={0.7} />
      <Star className="absolute top-[15%] right-[35%] w-4 md:w-6" delay={1} />

      {/* Hearts */}
      <Heart className="absolute top-[40%] left-[5%] w-5 md:w-7" delay={0.4} />
      <Heart className="absolute top-[25%] right-[8%] w-4 md:w-6" delay={0.9} />
    </div>
  );
};
