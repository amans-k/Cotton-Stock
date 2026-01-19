import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹490",
    originalPrice: "₹899",
    category: "Girls",
    badge: "New Arrival",
    emoji: "👗",
    color: "from-soft-pink to-lavender",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Cotton Polo T-Shirt",
    price: "₹490",
    originalPrice: "₹699",
    category: "Boys",
    badge: "Bestseller",
    emoji: "👕",
    color: "from-baby-blue to-mint-green",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Soft Baby Romper",
    price: "₹220",
    originalPrice: "₹499",
    category: "Baby",
    badge: "Premium",
    emoji: "👶",
    color: "from-cream to-sunny-yellow",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Denim Jacket Kids",
    price: "₹690",
    originalPrice: "₹1,799",
    category: "Unisex",
    badge: "Trending",
    emoji: "🧥",
    color: "from-primary to-baby-blue",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Party Frock",
    price: "₹499",
    originalPrice: "₹1,499",
    category: "Girls",
    badge: "Exclusive",
    emoji: "💃",
    color: "from-secondary to-coral",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Cargo Shorts",
    price: "₹449",
    originalPrice: "₹649",
    category: "Boys",
    emoji: "🩳",
    color: "from-mint-green to-accent",
    rating: 4.6,
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-72 md:w-80"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.div
        className="bg-card rounded-3xl overflow-hidden shadow-card group cursor-pointer"
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Product Image Area */}
        <div className={`relative h-64 bg-gradient-to-br ${product.color} p-6 overflow-hidden`}>
          {/* Badge */}
          {product.badge && (
            <motion.div
              className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-soft"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {product.badge} ✨
            </motion.div>
          )}

          {/* Floating emoji */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-8xl"
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 180, 360],
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            }}
          >
            {product.emoji}
          </motion.div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          >
            <motion.button
              className="bg-card text-foreground px-6 py-3 rounded-full font-bold shadow-float opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-sunny-yellow text-sunny-yellow" />
            <span className="text-sm font-semibold">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({Math.floor(Math.random() * 100 + 50)} reviews)</span>
          </div>
          
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          
          <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">{product.price}</span>
            <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
            <span className="text-xs bg-coral/20 text-coral px-2 py-1 rounded-full font-semibold">
              {Math.round((1 - parseInt(product.price.replace(/\D/g, '')) / parseInt(product.originalPrice.replace(/\D/g, ''))) * 100)}% OFF
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FeaturedCollection = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const newPosition = direction === "left" 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.span
              className="inline-block px-4 py-2 bg-coral/20 rounded-full text-sm font-medium text-coral mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              ✨ Featured Collection
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold">
              Trending{" "}
              <span className="text-gradient">This Season</span>
            </h2>
          </div>

          <div className="flex gap-3 mt-6 md:mt-0">
            <motion.button
              onClick={() => scroll("left")}
              className="p-3 bg-card rounded-full shadow-soft hover:shadow-card transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              className="p-3 bg-primary text-primary-foreground rounded-full shadow-soft hover:shadow-card transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={(e) => setScrollPosition((e.target as HTMLDivElement).scrollLeft)}
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
