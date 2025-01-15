import { motion } from "motion/react";
import { FC } from "react";

const AnimatedParagraph: FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
    <motion.p
      className="mb-6 text-lg leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.215, 0.610, 0.355, 1.000]
      }}
    >
      {children}
    </motion.p>
  );

export default AnimatedParagraph;