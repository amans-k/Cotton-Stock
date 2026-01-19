import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute w-full h-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-muted/30"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <span className="text-3xl">👶</span>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl">Cotton Stock</h3>
                <p className="text-sm text-primary-foreground/60">Kids Wear</p>
              </div>
            </motion.div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Cotton Stock kids wear for every little star. Quality fabrics, trendy designs, 
              and comfortable fits for children aged 1-16 years.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/cotton_stock_kids_wear?igsh=MWY1YjU0ZmNseWU3dA=="
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/cotton_stock_kids_wear?igsh=MWY1YjU0ZmNseWU3dA=="
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Boys Collection", "Girls Collection", "Baby Wear", "New Arrivals", "Sale Items"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Shop no M-1832 (2P) ground floor gandhi bazaar Chembur colony , <br />chembur  - 400074
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
                  +91 9892613808
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:cottonstockkidswear@gmail.com" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
                  cottonstockkidswear@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Daily: 10:00 AM - 9:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Get notified about new arrivals and special offers!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-primary-foreground/10 rounded-xl text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                className="px-4 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
            </div>
            <p className="text-xs text-primary-foreground/50 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Cotton Stock Kids Wear. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
            Made with <span className="text-coral animate-pulse">❤️</span> Little Smiles😊        </p>
        </div>
      </div>
    </footer>
  );
};
