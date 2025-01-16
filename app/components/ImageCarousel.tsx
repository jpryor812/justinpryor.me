import React from 'react';
import { motion } from 'framer-motion';

const ImageCarousel = () => {
  // Sample image data - replace with your actual images
  const images = [
    "CSS-logo.png",
    "HTML-logo.png",
    "JS-logo.png",
    "React-logo.png",
    "Tailwind-logo.png",
    "TS-logo.png",
    "Excel-logo.png",
    "Figma-logo.png",
    "GitHub-logo.png",
    "NextJS-logo.png",
    "firebase_logo.png",
    "FramerMotion-logo.png",
    "jira-logo.png",
    "Notion-logo.png",
    "Monday-logo.png",
    "VSCode-logo.png",
    "Replit-logo.png",
    "Vercel-logo.png",
  ];

  // Duplicate the images array to create the infinite effect
  const duplicatedImages = [...images, ...images];

  return (
    <motion.div
    className="w-2/3 mx-auto overflow-hidden bg-gray-100 p-4"
    initial={{ opacity: 0, y: 125 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.9,
      type: "spring",
      bounce: 0.6,
      delay: 0.4
    }}
    >
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -1800], // Adjust this value based on your image width and gap
        }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden"
          >
            <img
              src={src}
              alt={`Carousel item ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageCarousel;