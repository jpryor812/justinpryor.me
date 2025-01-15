import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SmallProjectCardProps {
  title: string;
  description: string;
  images: Array<{
    url: string;
    alt: string;
    title: string;
    link: string;
  }>;
  logoSrc: string;
  bgColor?: string;
}

const SmallProjectCard = ({ 
  title, 
  description, 
  images,
  logoSrc,
  bgColor = 'bg-purple-100'
}: SmallProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1170);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      className="relative w-full aspect-[6/5]"
      initial={{ opacity: 0, y: 125 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.9,
        type: "spring",
        bounce: 0.6
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background */}
      <div className={`${bgColor} rounded-lg absolute inset-0`}></div>
      
      {/* Logo/Image */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <img 
          src={logoSrc}
          alt={title}
          className="w-auto h-full max-h-full object-contain" 
        />
      </div>

      {/* Title overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 
          className="text-3xl sm:text-4xl font-bold"
          style={{
            color: 'black',
            textShadow: `
              -2px -2px 0 #fff,
               2px -2px 0 #fff,
              -2px  2px 0 #fff,
               2px  2px 0 #fff
            `
          }}
        >
          {title}
        </h2>
      </div>

      {/* Hover Popup */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={isHovered ? 
          { opacity: 1, y: 0, scale: 1 } : 
          { opacity: 0, y: 20, scale: 0.95 }
        }
        transition={{ duration: 0.2 }}
        style={{ 
          position: 'absolute',
          left: isWideScreen ? '-10%' : '0',
          width: isWideScreen ? '120%' : '100%',
          bottom: '-1rem',
          transform: 'translateY(100%)',
          zIndex: 50 
        }}
      >
        {/* Image Gallery */}
        <div 
          className={`flex items-center gap-2 mb-6 ${
            images.length === 2 ? 'justify-center' : 'justify-between'
          }`}
          style={{
            width: isWideScreen ? '120%' : '100%',
            marginLeft: isWideScreen ? '-10%' : '0',
            position: 'relative',
            left: isWideScreen ? '-1%' : '0'
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full overflow-hidden rounded-lg"
              style={{ 
                aspectRatio: '4 / 3',
                ...(images.length === 2 && {
                  marginLeft: isWideScreen ? (index === 0 ? '10%' : 0) : 0,
                  marginRight: isWideScreen ? (index === 1 ? '10%' : 0) : 0,
                })
              }}
              initial={{ 
                y: 0,
                rotate: images.length === 2 
                  ? (index === 0 ? -12 : 12) 
                  : (index === 0 ? -12 : index === 2 ? 12 : 0)
              }}
              animate={{ 
                y: images.length === 2
                  ? -8
                  : (index === 1 ? -48 : -8),
                rotate: images.length === 2
                  ? (index === 0 ? -5 : 5)
                  : (index === 0 ? -5 : index === 2 ? 5 : 0)
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              transition={{ 
                duration: 0.2,
                bounce: 0.2
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover bg-white rounded-xl p-2 shadow-xl"
              />
              <motion.a
                href={image.link}
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
              >
                <span className="text-white text-sm font-medium">
                  {image.title}
                </span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <div className={`w-full mx-auto text-center bg-white rounded-xl shadow-xl ${
          isWideScreen ? 'p-6' : 'p-4'
        }`}>
          <p className={`text-gray-600 ${
            isWideScreen ? 'text-sm' : 'text-xs'
          }`}>
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SmallProjectCard;