import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const WelcomeScreen = ({ onNext }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate floating emoji reactions
    const heartArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      emoji: ['💖', '💕', '✨', '💗', '🥺'][Math.floor(Math.random() * 5)],
    }));
    setHearts(heartArray);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="story-container bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 no-select"
    >
      {/* Story Progress Bar (Instagram style) */}
      <div className="absolute top-0 left-0 right-0 z-50 safe-area">
        <div className="flex gap-1 p-3">
          <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: 'linear' }}
              className="h-full bg-white origin-left"
            />
          </div>
          <div className="flex-1 h-1 bg-white/30 rounded-full"></div>
          <div className="flex-1 h-1 bg-white/30 rounded-full"></div>
          <div className="flex-1 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>

      {/* Story Overlay Gradient */}
      <div className="absolute inset-0 story-overlay pointer-events-none"></div>

      {/* Floating Emoji Reactions */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-5xl pointer-events-none"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
          }}
          initial={{ y: 0, scale: 0, opacity: 0 }}
          animate={{
            y: -window.innerHeight - 100,
            scale: [0, 1.2, 1, 0.8],
            opacity: [0, 1, 1, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 safe-area">
        {/* Giant Emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="mb-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-[150px] leading-none"
          >
            🥺
          </motion.div>
        </motion.div>

        {/* Bold Title (Instagram style) */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-6xl md:text-7xl font-black text-center mb-4 text-white text-shadow-strong uppercase tracking-tight"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Hey
          <br />
          Cutiepie
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-2xl md:text-3xl text-center text-white/90 mb-12 font-bold text-shadow-strong max-w-md"
        >
          Do you even know
          <br />
          how cute you are? 💕
        </motion.p>

        {/* CTA Button (Story style) */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.8,
            type: 'spring',
            stiffness: 200,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="story-button relative px-16 py-6 bg-white text-black text-2xl font-black rounded-full shadow-2xl uppercase tracking-wide"
        >
          Let&apos;s Check 🥺
        </motion.button>

        {/* Tap to Continue Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center tap-indicator"
        >
          <div className="flex items-center gap-2 text-white/70 text-sm font-semibold">
            <span>👆</span>
            <span>TAP TO START</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 right-10 text-7xl pointer-events-none"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-32 left-10 text-7xl pointer-events-none"
      >
        💫
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
