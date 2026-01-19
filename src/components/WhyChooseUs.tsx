import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Palette, BadgeIndianRupee, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Pure Cotton Fabric",
    description: "100% organic cotton that's gentle on your child's delicate skin",
    color: "from-mint-green to-accent",
  },
  {
    icon: Heart,
    title: "Skin Friendly",
    description: "Hypoallergenic materials tested for sensitive skin",
    color: "from-soft-pink to-secondary",
  },
  {
    icon: Palette,
    title: "Trendy Designs",
    description: "Latest fashion trends adapted for comfortable kids wear",
    color: "from-lavender to-primary",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Prices",
    description: "Premium quality at prices that fit your family budget",
    color: "from-sunny-yellow to-coral",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every piece passes our strict quality control standards",
    color: "from-baby-blue to-primary",
  },
  {
    icon: Truck,
    title: "Easy Exchange",
    description: "Hassle-free exchange policy for your convenience",
    color: "from-accent to-mint-green",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
      }}
    >
      <motion.div
        className="relative bg-card rounded-3xl p-6 shadow-soft group cursor-pointer overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Icon container */}
        <motion.div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-soft`}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-primary-foreground" />
        </motion.div>

        <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative gradient blob */}
        <motion.div
          className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
        />

        {/* Check mark animation */}
        <motion.div
          className="absolute top-4 right-4 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
        >
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 text-6xl"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 text-5xl"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💝
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-medium text-accent-foreground mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Why Parents Trust Us
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-4">
            Why Choose{" "}
            <span className="text-gradient">Cotton Stock?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe every child deserves comfortable, stylish clothing that lets them play freely
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { number: "5000+", label: "Happy Kids" },
            { number: "2000+", label: "Products" },
            { number: "5+", label: "Years Trust" },
            { number: "4.9★", label: "Rating" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center px-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-heading font-extrabold text-primary"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
