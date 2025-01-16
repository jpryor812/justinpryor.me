// components/LiteYouTubeEmbed.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface LiteYouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const LiteYouTubeEmbed = ({ videoId, title }: LiteYouTubeEmbedProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const loadVideo = () => {
    setIsVideoLoaded(true);
  };

  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
    >
      <div className="relative w-full aspect-video max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
        {!isVideoLoaded ? (
          <button
            onClick={loadVideo}
            className="w-full h-full relative group"
            aria-label="Play video"
          >
            <img
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 group-hover:bg-red-700 transition-colors">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
          </button>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title || "YouTube video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    </motion.div>
  );
};

export default LiteYouTubeEmbed;