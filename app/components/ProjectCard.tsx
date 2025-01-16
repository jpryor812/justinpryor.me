import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  images: Array<{
    url: string;
    alt: string;
    title: string;
    link: string;
  }>;
  logoSrc: string;
  className?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  images,
  logoSrc,
  className = '',
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      <motion.div 
        className="relative w-full aspect-[3/1]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 1.8,
          ease: [0.215, 0.610, 0.355, 1.000]
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Light blue backdrop */}
        <div className="bg-blue-50 rounded-lg absolute inset-0"></div>
        
        {/* Logo image positioned over the backdrop */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src={logoSrc}
            alt={title}
            width={500}
            height={300}
            className="w-auto h-full max-h-full object-contain" 
          />
        </div>
        
        {/* Title overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 
            className="text-4xl sm:text-5xl font-bold max-w-[75%] text-center"
            style={{
              color: 'black',
              textShadow: `-2px -2px 0 #fff,
                           2px -2px 0 #fff,
                          -2px  2px 0 #fff,
                           2px  2px 0 #fff`
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
          transition={{ duration: 0.4 }}
          className="absolute left-0 w-full -top-1/2 transform translate-y-full z-50"
        >
        {/* Image Gallery */}
            <div className="flex justify-between items-center mb-6">
            {images.map((image, index) => (
                <motion.div
                key={index}
                className={`relative rounded-lg overflow-hidden 
                    ${index === 0 ? 'h-56' : ''}
                    ${index === 1 ? 'h-60' : ''}
                    ${index === 2 ? 'h-56' : ''}
                `}
                initial={{ 
                    y: 0,
                    rotate: index === 0 ? -5 : index === 2 ? 5 : 0 
                }}
                animate={{ 
                    y: index === 1 ? -48 : -8,
                    rotate: index === 0 ? -12 : index === 2 ? 12 : 0
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
                style={{
                    boxShadow: 'none'
                }}
                >
                <Image
                    src={image.url}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="w-72 h-full object-cover bg-green-200 rounded-xl p-2 shadow-xl"
                    style={{ border: 'none' }}
                />
                <motion.a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
            <div className="w-3/4 mx-auto text-center bg-white border-8 border-pink-200 rounded-xl p-6 shadow-xl">
            <p className="text-gray-600 text-md">{description}</p>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectCard;