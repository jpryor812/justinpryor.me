import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../globals.css';
import { Racing_Sans_One } from 'next/font/google';
import Link from 'next/link';
const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: ['400'], // Use the available weights
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2.6,
          ease: "easeOut"
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative"
      >
        <nav className="flex justify-between items-center">
          {/* Left side - Logo */}
          <div>
            <Link href="/" className={`text-2xl font-500 ${racingSansOne.className}`}>
              Justin Pryor
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-blue-500">
              Home
            </Link>
            <a 
              href="https://docs.google.com/document/d/1en4LjA52kor9kICJB1j14FYuVs7WxZsbtIvLAqA0diU/edit?tab=t.0" 
              className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a 
              href="mailto:jpryor812@gmail.com?subject=You're%20Hired!" 
              className="px-4 py-2 text-white rounded-md hover:scale-125 transition-all animate-color-change"
            >
              Email Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50"
          >
            <motion.div
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              className="text-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </nav>

        {/* Full Screen Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute top-0 left-0 w-full h-screen bg-white z-40"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <motion.div custom={0} variants={menuItemVariants}>
                  <Link 
                    href="/"
                    className="text-3xl text-blue-500 hover:text-blue-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div custom={1} variants={menuItemVariants}>
                  <a
                    href="https://docs.google.com/document/d/1en4LjA52kor9kICJB1j14FYuVs7WxZsbtIvLAqA0diU/edit?tab=t.0"
                    className="text-3xl text-black hover:text-purple-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    Resume
                  </a>
                </motion.div>
                <motion.div custom={2} variants={menuItemVariants}>
                  <a
                    href="mailto:jpryor812@gmail.com?subject=You're%20Hired!"
                    className="text-3xl text-black hover:text-green-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Email Me
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {isOpen && <div className="md:hidden h-screen" />}
    </>
  );
};

export default Header;