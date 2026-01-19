import { motion } from "framer-motion";
import { FloatingElements } from "./FloatingElements";
import { MapPin, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
      <FloatingElements />
      
      {/* Main content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-6"
            >
              <Sparkles className="w-4 h-4 text-coral" />
              <span className="text-sm font-medium text-foreground">Premium Kids Fashion</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Cotton Stock  Kids Wear for Every{" "}
              <span className="text-gradient">Little Star</span>{" "}
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                🌟
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="font-semibold text-foreground">Comfort</span> •{" "}
              <span className="font-semibold text-foreground">Style</span> •{" "}
              <span className="font-semibold text-foreground">Quality</span>
              <br />
              Dress your little ones in pure cotton comfort
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.button
                className="group relative px-8 py-4 gradient-cta text-primary-foreground font-bold rounded-2xl shadow-float overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Visit Our Store
                </span>
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-card border-2 border-primary/30 text-foreground font-bold rounded-2xl shadow-soft hover:shadow-card hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Collection
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-baby-blue to-soft-pink border-2 border-card shadow-soft"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">2000+</span> Happy Families
              </p>
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative circles */}
              <motion.div
                className="absolute -top-10 -right-10 w-72 h-72 bg-baby-blue/40 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-soft-pink/40 rounded-full blur-3xl"
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Main showcase card */}
              <motion.div
                className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-float border border-border/50"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Product cards */}
                  {[
                    { emoji: "👗", label: "Girls Dresses", color: "from-soft-pink to-lavender" },
                    { emoji: "👕", label: "Boys T-Shirts", color: "from-baby-blue to-mint-green" },
                    { emoji: "👶", label: "Baby Rompers", color: "from-cream to-sunny-yellow" },
                    { emoji: "👟", label: "Cute Shoes", color: "from-mint-green to-baby-blue" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-soft cursor-pointer`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotateY: 10,
                        rotateX: -5,
                        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)"
                      }}
                    >
                      <motion.div
                        className="text-4xl mb-2"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {item.emoji}
                      </motion.div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-coral text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-float"
                  animate={{ y: [0, -5, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  New Arrivals! ✨
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-foreground/50 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
