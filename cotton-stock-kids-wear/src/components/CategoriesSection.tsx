import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    icon: "👦",
    title: "Boys Wear",
    description: "Trendy & comfortable styles for active boys",
    color: "from-baby-blue to-primary",
    items: "200+ Items",
  },
  {
    icon: "👧",
    title: "Girls Wear",
    description: "Beautiful dresses & outfits for little princesses",
    color: "from-soft-pink to-secondary",
    items: "250+ Items",
  },
  {
    icon: "👶",
    title: "Baby Wear",
    description: "Soft & gentle clothing for your little ones",
    color: "from-cream to-sunny-yellow",
    items: "150+ Items",
  },
];

const CategoryCard = ({ category, index }: { category: typeof categories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        className="group relative bg-card rounded-3xl p-8 shadow-card cursor-pointer overflow-hidden"
        whileHover={{ 
          y: -10,
          rotateY: 5,
          rotateX: -5,
        }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Floating icon */}
        <motion.div
          className="relative z-10 text-6xl mb-4"
          animate={{ y: [0, -5, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
        >
          {category.icon}
        </motion.div>

        <h3 className="relative z-10 text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
          {category.title}
        </h3>
        
        <p className="relative z-10 text-muted-foreground text-sm mb-4">
          {category.description}
        </p>

        <motion.div
          className={`relative z-10 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.color} text-primary-foreground text-sm font-semibold rounded-full`}
          whileHover={{ scale: 1.05 }}
        >
          {category.items}
        </motion.div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-bl-full">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
          style={{
            boxShadow: `0 0 40px 10px hsl(var(--primary) / 0.2)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export const CategoriesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-baby-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-pink/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium text-secondary-foreground mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Shop by Category
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-4">
            Find the Perfect{" "}
            <span className="text-gradient">Outfit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collection of premium kids wear, designed for comfort and style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
