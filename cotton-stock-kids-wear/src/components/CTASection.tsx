import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-lavender to-secondary"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(200, 80%, 65%) 0%, hsl(270, 50%, 85%) 50%, hsl(340, 65%, 80%) 100%)",
            "linear-gradient(135deg, hsl(340, 65%, 80%) 0%, hsl(200, 80%, 65%) 50%, hsl(270, 50%, 85%) 100%)",
            "linear-gradient(135deg, hsl(270, 50%, 85%) 0%, hsl(340, 65%, 80%) 50%, hsl(200, 80%, 65%) 100%)",
            "linear-gradient(135deg, hsl(200, 80%, 65%) 0%, hsl(270, 50%, 85%) 50%, hsl(340, 65%, 80%) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary-foreground/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Emoji decorations */}
      <motion.div
        className="absolute top-10 left-10 text-6xl"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        👶
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 text-5xl"
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        👗
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-5xl"
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        🌈
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-6xl"
        animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
      >
        ⭐
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Dress Your Kids with{" "}
            <br className="hidden md:block" />
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Comfort & Style
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Visit our store today and explore the finest collection of kids wear in Mumbai. 
            Your little ones deserve the best!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://maps.app.goo.gl/f8MKwYJyakJLbGex8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-primary-foreground text-primary font-bold rounded-2xl shadow-float overflow-hidden flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <MapPin className="w-5 h-5" />
              <span className="relative">Visit Store</span>
            </motion.a>

            <motion.a
              href="tel:+919892613808"
              className="group px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-bold rounded-2xl shadow-soft hover:bg-primary-foreground/10 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>

            <motion.a
              href="https://wa.me/9892613808"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-accent text-accent-foreground font-bold rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Special offer badge */}
          <motion.div
            className="mt-12 inline-block"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <motion.div
              className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-foreground/30"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-primary-foreground font-semibold">
                🎉 Special Offer: <span className="font-bold">Flat 20% OFF</span> on your first purchase!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;