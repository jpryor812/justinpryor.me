import React from 'react';
import { motion } from 'framer-motion';

interface EmailMeButtonProps {
  className?: string;  // Allow custom classes to be passed
  size?: 'sm' | 'md' | 'lg';  // Optional size prop
}

const EmailMeButton = ({ 
    className = '', 
    size = 'md' 
  }: EmailMeButtonProps) => {
    // Size classes mapping
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-16 py-3 text-xl'
    };
  
    return (
<motion.a 
  href="mailto:jpryor812@gmail.com?subject=You're%20Hired!"
  className={`
    ${sizeClasses[size]}
    text-white 
    rounded-md 
    hover:scale-125 
    transition-all 
    animate-color-change
    bg-blue-500  // Add this to ensure there's a base background color
    inline-block  // Add this to ensure proper display
    ${className}
  `}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Send Me an Email
</motion.a>
    );
  };

export default EmailMeButton;