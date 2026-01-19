import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Star } from "lucide-react";

export const StoreHighlight = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Store Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-card rounded-3xl p-8 shadow-float overflow-hidden">
              {/* Neon sign effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Store mockup */}
              <div className="relative z-10">
                <motion.div
                  className="text-center py-8 px-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6"
                  animate={{ boxShadow: [
                    "0 0 20px hsl(var(--primary) / 0.3)",
                    "0 0 40px hsl(var(--primary) / 0.5)",
                    "0 0 20px hsl(var(--primary) / 0.3)",
                  ]}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.h3
                    className="text-2xl md:text-3xl font-heading font-extrabold text-primary"
                    style={{
                      textShadow: "0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.3)",
                    }}
                    animate={{ 
                      textShadow: [
                        "0 0 10px hsl(var(--primary) / 0.5)",
                        "0 0 30px hsl(var(--primary) / 0.8)",
                        "0 0 10px hsl(var(--primary) / 0.5)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Cotton Stock Kids Wear
                  </motion.h3>
                  <p className="text-muted-foreground mt-2">Premium Kids Fashion Boutique</p>
                </motion.div>

                {/* Store interior representation */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { emoji: "👗", label: "Dresses" },
                    { emoji: "👕", label: "Tops" },
                    { emoji: "👖", label: "Bottoms" },
                    { emoji: "👟", label: "Footwear" },
                    { emoji: "🎀", label: "Accessories" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="bg-background/50 rounded-xl p-4 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div
                        className="text-3xl mb-1"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {item.emoji}
                      </motion.div>
                      <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Spotlight effect */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 text-5xl"
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌟
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-4xl"
              animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🎈
            </motion.div>
          </motion.div>

          {/* Store Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <a 
  href="https://maps.app.goo.gl/zdhn7WTmR5FFAg9i9" 
  target="_blank" 
  rel="noopener noreferrer"
>
  📍 Visit Our Store
</a> 
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6">
              Experience the Magic{" "}
              <span className="text-gradient">In Person</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Step into our colorful world of kids fashion! Our friendly staff will help you find 
              the perfect outfits for your little ones. See, feel, and try our premium collection.
            </p>

            {/* Store details */}
            <div className="space-y-4 mb-8">
              {[
                { icon: MapPin, text: "Shop no M-1832 (2P) ground floor gandhi bazaar Chembur colony , chembur 400074", label: "Location" },
                { icon: Clock, text: "Open Daily: 10:00 AM - 10:00 PM", label: "Timings" },
                { icon: Phone, text: "+91 9892613808", label: "Contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Reviews snippet */}
            <motion.div
              className="bg-card rounded-2xl p-6 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sunny-yellow text-sunny-yellow" />
                ))}
                <span className="ml-2 font-bold">4.9/5</span>
                <span className="text-muted-foreground text-sm">(500+ reviews)</span>
              </div>
              <p className="text-muted-foreground italic">
                "Amazing collection and the staff is so helpful! My kids love shopping here."
              </p>
              <p className="text-sm font-medium mt-2">- Priya M., Happy Parent</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
