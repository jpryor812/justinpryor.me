'use client';

import { type FC, useState, useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedParagraph from './components/AnimatedParagraph';
import './globals.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { projects } from './constants/projects';
import SmallProjectCard from './components/SmallProjectCard';
import ImageCarousel from './components/ImageCarousel';
import InitialLoadAnimation from './components/InitialLoadAnimation';

const Home: FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 3000); // Matches animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
    {showAnimation && <InitialLoadAnimation />}
    {!showAnimation && (
    <main>
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
    {/* Left side - Text */}
    <motion.div 
      className="md:w-2/3"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: [0.215, 0.610, 0.355, 1.000] // Cubic bezier for smooth slide
      }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
        I&apos;m Justin, a founder, builder, and fanatic of excellent user experiences.
      </h1>
    </motion.div>

    {/* Right side - Image with gradient background */}
    <motion.div 
      className="md:w-1/3 flex justify-center md:justify-end"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.7,
        delay: 1.25,
        type: "spring",
        bounce: 0.5
      }}
    >
      <div className="relative">
        {/* Blue background - positioned relative to the wrapper */}
        <div 
          className="absolute w-full h-full bg-blue-200 rounded-lg -translate-x-4 -translate-y-4"
          style={{
            background: 'linear-gradient(140deg, #CEE3FF 0%, #006FFF 70%)'
          }}
        ></div>
        
        {/* Image */}
        <Image 
  src="/profile_picture.jpg"
  alt="Justin Pryor"
  width={200} // Tailored for w-56 (14rem)
  height={200} // Tailored for h-56 (14rem)
  className="relative z-10 rounded-lg object-cover"
/>
      </div>
    </motion.div>
  </div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
  <motion.h2 
    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: 1.5,
      ease: [0.215, 0.610, 0.355, 1.000]
    }}
  >
    Some Projects I&apos;ve Worked On:
  </motion.h2>
</section>

{/* Full width projects */}
{projects.filter(project => project.type === 'full').map((project) => (
  <ProjectCard key={project.title} {...project} />
))}

{/* Grid section for all small projects */}
<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
    {projects.filter(project => project.type === 'small').map((project) => (
      <SmallProjectCard key={project.title} {...project} />
    ))}
  </div>
</section>

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-4 py-10">
  <motion.h2 
    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center"
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
    Languages, Frameworks, and Tools I&apos;m Building With:
  </motion.h2>
</section>

<ImageCarousel />

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-4 pt-16">
  <motion.h2 
    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center"
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
    Ideas I&apos;m Actively Exploring:
  </motion.h2>
</section>


<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* SuuM container */}
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
    >
      <div className="bg-green-100 rounded-lg absolute inset-0"></div>
      
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <Image 
          src="/patreon.png"
          alt="SuuM"
          className="w-auto h-full max-h-full object-contain"
        />
      </div>
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
          SuuM
        </h2>
      </div>
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-80 rounded-lg flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-white text-lg text-center leading-relaxed">
        Suum is a project I'm in the early stages of, which is a stablecoin-based Patreon alternative. Patreon has high fees, including payment transaction fees, which, for a small $5-a-month creator, essentially doubles the platform fee from an already high 8% to an outrageous 16%. Stablecoins keep that at 8%, but I also intend to lower the platform fees for early creators and increase prices as they scale to accelerate the platform early on. I’m passively building the MVP while gauging creator interest before going all in. 
        </p>
      </motion.div>
    </motion.div>

    {/* Video Game Footage to Video AI Tool container */}
    <motion.div 
      className="relative w-full aspect-[6/5]"
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
      <div className="bg-green-100 rounded-lg absolute inset-0"></div>
      
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <Image 
          src="/video-game-stock.png"
          alt="Video Game Footage to Video AI Tool"
          className="w-auto h-full max-h-full object-contain"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 
          className="text-3xl sm:text-4xl font-bold px-12 text-center"
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
          Video Game Footage to Film AI Tool
        </h2>
      </div>
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-80 rounded-lg flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-white text-lg text-center leading-relaxed">
        This idea came to me one day when I was playing Civilization after OpenAI&apos;s Sora was having a big publicity day. It&apos;s a pretty wacky idea, but essentially, I hope in a few years, it will be possible to build a tool that can record your video game sessions in games like Civilization, Factorio, Starcraft, or other turn-based strategy games and turn them into an AI-generated film with a storyline. I have more thoughts but no space here, so if you&apos;re curious, <a href="https://docs.google.com/document/d/1li97BtqzyEv1ErahlvHstSGgNE7KUmrKDUAxrA3bx6I/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">I wrote a one-pager</a>.
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>

<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg">
  <motion.h2
    className="text-3xl md:text-4xl font-bold mb-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    Why I Fell in Love with Building in 2024
  </motion.h2>

  <div className="space-y-2">
    <AnimatedParagraph>
      I posted a tweet back in October after about a month or so of real programming. At this moment, I felt this borderline ethereal feeling when programming clicked for me, and I started to see it in a different way, a way I love.
    </AnimatedParagraph>

    <AnimatedParagraph delay={0.2}>
      <em>"As I become better at programming, I understand the connection Paul Graham makes in terms of hackers and painters. Coding really is creating art on a blank canvas. Both in looks and functionality, which I think makes it like a combination of art and music. It&apos;s really beautiful, quite honestly."</em>
    </AnimatedParagraph>

    <AnimatedParagraph delay={0.4}>
    I&apos;ve never really been a great artist, nor taken any engineering courses in college (my love for tech was discovered the second semester of my senior year, unfortunately), so when I started building nufriends, it was the first time I actually put thoughts in my head into something real in the world, and I was thrilled.     </AnimatedParagraph>

    <AnimatedParagraph delay={0.6}>
    It was a genuinely emotional experience when I started playing around with Replit Agent and Claude Sonnet 3.5 and realized that if I know what I want, I can build it. I still remember where I was sitting in the Hunter&apos;s Point Public Library; I was so excited I teared up. Since I started building in September 2024, I&apos;ve pushed over 35,000 lines of code across a full-stack mobile app, three websites (including this one), and a few burgeoning projects.    </AnimatedParagraph>

    <AnimatedParagraph delay={0.8}>
    I love building software products because it&apos;s a way to impact many lives all around the world. It&apos;s inspiring. I quickly learned through building that I most enjoyed UX design and frontend development. Again, I felt this artistic craftsmanship when coding in TS, CSS, HTML, Tailwind, Framer Motion, and so on. What enhanced this love was when I began putting myself in the user&apos;s shoes to understand them and what they need.    </AnimatedParagraph>

    <AnimatedParagraph delay={1.0}>
    What will their journey be like? What should the first screen they see be? How much guidance is too much guidance in onboarding? What should they figure out on their own? What do I want the user to feel in this exact moment, and how do I ensure they feel that way? How can I push the user towards premium subscriptions without being overly aggressive? How do I build trust through my product design?    </AnimatedParagraph>

    <AnimatedParagraph delay={1.2}>
    I love questions, and I love that UX design allows me to ask as many questions as possible to myself and to potential users to create something that truly is art and music working symbiotically into something beautiful.    </AnimatedParagraph>
  </div>
</section>

<section className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 pt-24">
  <motion.h2
    className="text-3xl md:text-4xl font-bold mb-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    A Presentation (Inspired by Growth.Design) About Improving Calm&apos;s Friend Referral Page
  </motion.h2>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
  <motion.div 
    className="relative w-full aspect-[16/9]" // 16:9 aspect ratio for presentations
    initial={{ opacity: 0, y: 125 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.9,
      type: "spring",
      bounce: 0.6
    }}
  >
    <div className="bg-gray-100 rounded-lg absolute inset-0"></div>
    
    {/* Presentation container */}
    <div className="absolute inset-0 p-6">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <iframe 
          src="https://www.canva.com/design/DAGcHWd_SoI/nhClXGNB43_TmbYxMvpeeQ/view?embed"
          className="absolute w-full h-full top-0 left-0 border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  </motion.div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg">
    {/* Left Column */}
    <div>
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What I Can Bring to a Role
      </motion.h2>

      <motion.div 
        className="p-6 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-4">
          <AnimatedParagraph>
          Well, as I hope you assumed based on my previous answer, I have a strong love for the craft.
          </AnimatedParagraph>

          <AnimatedParagraph delay={0.2}>
          I feel the most focused in my life when solving a problem, and coding is simply asking yourself or others about problems and designing solutions for them. I love finishing a page or component, but I love the incremental steps towards that finished product even more—when you realize what it will look like and how beautiful it will be.          </AnimatedParagraph>

          <AnimatedParagraph delay={0.4}>
          So, you will get someone who loves asking questions and solving problems, is almost never satisfied and always striving for something better, is a fast learner (0-35,000 lines of self-taught code in four months), and is passionate about delighting users.          </AnimatedParagraph>

          <AnimatedParagraph delay={0.6}>
          You will get something that will integrate effortlessly with your team and will never waste an opportunity to ask questions and learn. The growth I&apos;ve experienced since September with my coding abilities has been a blast, and I know with the right team and mission around me, I&apos;ll continue to progress rapidly.          </AnimatedParagraph>

          <AnimatedParagraph delay={0.8}>
          I love building. Therefore, if the job requires 12 hours of building a day, wonderful. If it only requires 8-10, no problem, I&apos;ll spend an extra 2-4 hours a day building projects of my own and improving my skills. This is what I do for fun (when not playing Civilization), so I expect to continue growing quickly while delivering immediate results for your company.           </AnimatedParagraph>
        </div>
      </motion.div>
    </div>

    {/* Right Column */}
    <div>
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What I Do Best in UX
      </motion.h2>

      <motion.div 
        className="p-6 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <div className="space-y-4">
        <AnimatedParagraph>
        As you&apos;ll see in my videos, I analyze everything on a page deeply—why each button is where it is, why I received this notification, how they got me to opt into notifications, how to increase conversions by changing language, moving buttons, changing colors, or adding animations. I truly think about everything, and I will constantly ask my coworkers and, if possible, our users what they think about every detail and strongly consider all feedback to make a decision.        </AnimatedParagraph>

        <AnimatedParagraph delay={0.2}>
        I have talked to several users in building nufriends, and have read so many app reviews, including some of my own (which include 40+ minute videos/rants), so I know what to consider, and I know what to look for. Nothing I do is just to get something done; every change I make is with the user in mind. Every color, button, animation, text, and whatever else on a page is a considered decision.        </AnimatedParagraph>

        <AnimatedParagraph delay={0.4}>
        I take nothing personally and always look to improve, so I welcome as much feedback and/or criticism as I can get. I love to learn, and feedback in this function is the best way by far.        </AnimatedParagraph>

        <AnimatedParagraph delay={0.6}>
        Everyone knows a great UX designer must be creative, and the best way to be creative is to seek inspiration. I took inspiration for this site by looking at dozens of other UX designer portfolios, including the welcome animation from Runway (A site I love). This desire to learn and hold myself accountable for improving in the craft is why I started User Journeys. I intend to improve quickly, and I can&apos;t imagine how much better I&apos;ll be even a year from now, based on how much I&apos;ve grown in such a short amount of time.         </AnimatedParagraph>

        <AnimatedParagraph delay={0.8}>
        I am analytical, empathetic, a deep thinker, creative, and a passionate builder. I believe, and I&apos;m sure you&apos;ll agree, that these are excellent traits for a UX designer.        </AnimatedParagraph>

      </div>
      </motion.div>
    </div>
  </div>
</section>

<section className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 pt-4">
  <motion.h2
    className="text-3xl md:text-4xl font-bold mb-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    My Analysis of Strava&apos;s UX/UI Design: What&apos;s Great and What Can Be Improved
  </motion.h2>
</section>

<section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4 pb-6">
<motion.div 
    className="mt-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.7,
      type: "spring",
      bounce: 0.4
    }}
  >
    {/* Responsive video container */}
    <div className="relative w-full aspect-video max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <iframe 
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/By1n6Enw9_c?si=RbR3WHdMNTn7LHNf" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      />
    </div>
  </motion.div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
  {/* Previous sections (text columns and video) remain the same */}

  {/* Final Two-Column Section */}
  <motion.div 
    className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.7,
      type: "spring",
      bounce: 0.4
    }}
  >
    {/* Left Column */}
    <div className="text-center p-6 ">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        What I&apos;m Looking For in My Next Role
      </h2>
      
      <div className="space-y-6">
        <p className="text-lg">
        Mentorship, collaboration, a culture that loves building, empathy, and appreciation for our users.
        </p>
        
        <p className="text-lg">
        Those five things are pivotal in my next role, as they will help me improve and inspire me to work incredibly hard.        </p>
        
        <p className="text-lg">
          It&apos;s really that simple.
        </p>
        
        <p className="text-lg font-bold">
          Specifically, I&apos;m looking for roles such as Product/UX Designer, Frontend Developer, or Product Manager.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div className="text-center p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        What I Hope to Improve
      </h2>
      
      <p className="text-lg p-4">
      I intend to begin studying this on my own, as I have to some extent, but in my next role, I hope to ask my co-workers who excel in graphic design, typography, colors, and so on millions of questions regarding why they made every decision they did. I&apos;m very creative, though not naturally artistic, so the visual design side of the craft is something I&apos;m still developing. Though I&apos;m learning independently, I&apos;m eager to learn directly from someone who is excellent in this aspect of product design.
      </p>
    </div>
  </motion.div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <motion.div 
    className="text-center space-y-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.7,
      type: "spring",
      bounce: 0.4
    }}
  >
    {/* Contact Section */}
    <div className="space-y-2">
      <h2 className="text-3xl md:text-4xl font-bold">Want to Chat? Reach out to me at:</h2>
      <a 
        href="mailto:jpryor812@gmail.com?subject=You're%20Hired!" 
        className="text-2xl md:text-3xl font-bold underline hover:underline inline-block"
      >
        jpryor812@gmail.com
      </a>
    </div>

    {/* Social Links */}
    <div className="flex justify-center items-center gap-12">
      <a 
        href="https://github.com/jpryor812" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:opacity-80 transition-opacity"
      >
        <Image src="/mdi_github.png" alt="GitHub" className="w-10 h-10" />
      </a>
      <a 
        href="https://www.youtube.com/channel/UC_bS1W9O8jpTE6gG9wss1rg" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:opacity-80 transition-opacity"
      >
        <Image src="/logos_youtube-icon.png" alt="YouTube" className="w-14 h-10" />
      </a>
      <a 
        href="https://www.linkedin.com/in/justin-pryor-959352150/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:opacity-80 transition-opacity"
      >
        <Image src="/devicon_linkedin.png" alt="LinkedIn" className="w-10 h-10" />
      </a>
      <a 
        href="https://x.com/Justin_Pryor_" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:opacity-80 transition-opacity"
      >
        <Image src="/prime_twitter.png" alt="X (Twitter)" className="w-10 h-10" />
      </a>
    </div>

    {/* Built With Section */}
    <div className="flex flex-col items-center space-y-4">
  <p className="text-xl">This site was build with Next.js, React, Framer Motion, and TailwindCSS.</p>
  <a 
    href="https://github.com/jpryor812/justinpryor.me" 
    className="text-xl underline hover:opacity-80 transition-opacity"
    target="_blank" 
    rel="noopener noreferrer"
  >
    Click here to view the codebase for this site.
  </a>
  <a 
    href="https://github.com/YourUsername/YourRepo" 
    className="text-l underline hover:opacity-80 transition-opacity"
    target="_blank" 
    rel="noopener noreferrer"
  >
    Click here to view the Figma file for this site.
  </a>
</div>
  </motion.div>
</section>

    </main>
    )}
    </div>
  );
}

export default Home;