import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/9892613808"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+919892613808"
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 15, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <Phone className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </div>
  );
};