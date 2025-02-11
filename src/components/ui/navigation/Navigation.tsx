import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  // { path: '/about', label: 'About' },
  // { path: '/workshops', label: 'Workshops' },
  { path: "/faqs", label: "FAQs" },
  { path: "https://tally.so/r/wzJkBE", label: "Speak" },
  { path: "https://tally.so/r/wQJJpp", label: "Mentor" },
  { path: "https://tally.so/r/wdjO1y", label: "Volunteer" },
  { path: "https://tally.so/r/nWMoXj", label: "Partner" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.08,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -4 },
  open: { opacity: 1, x: 0 },
};

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`desktop-nav fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#150E60] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src="/chf.svg"
                  alt="CreateHER Fest"
                  className="h-12 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <ul
                className={`${
                  windowWidth >= 768 ? "flex" : "hidden"
                } md:flex items-center space-x-8 gap-8`}
              >
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Desktop Register Button */}
              <Button
                className={`register-button ${
                  windowWidth >= 768 ? "flex" : "hidden"
                } 
                  md:flex bg-[#473dc6] hover:bg-[#CAA3D6]/80 text-white transition-all duration-300`}
              >
                <Link
                  to="https://form.jotform.com/243616450118149"
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  Register
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </AnimatePresence>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Adjusted height and spacing */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-16 left-0 right-0 bg-[#150E60] md:hidden z-40"
          >
            <motion.div className="flex flex-col px-4 py-2 bg-[#150E60] max-h-[70vh] overflow-y-auto mobile-nav">
              {navItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center text-white/90 hover:text-white py-3
                             text-lg font-medium border-b border-white/10 
                             transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="py-4">
                <Button
                  className="register-button bg-[#473dc6] hover:bg-[#CAA3D6]/80 text-white py-4
                           transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link
                    to="https://form.jotform.com/243616450118149"
                    target="_blank"
                    className="w-full"
                  >
                    Register Now
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
