import { motion } from "framer-motion";
import { Racing_Sans_One } from 'next/font/google';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: ['400'],
});

const InitialLoadAnimation = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100vh" }}
      transition={{
        duration: 1.5,
        delay: 1.5, // Increased delay to allow text animation to complete
        ease: "easeInOut",
      }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <motion.h1
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={`text-white text-9xl font-bold ${racingSansOne.className}`}
      >
        Justin Pryor
      </motion.h1>
    </motion.div>
  );
};

export default InitialLoadAnimation;