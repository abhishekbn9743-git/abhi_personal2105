import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const MeasuringScreen = ({ onNext, setScore }) => {
  const [percentage, setPercentage] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    // Generate random score between 75 and 98
    const targetScore = Math.floor(Math.random() * (98 - 75 + 1)) + 75;
    setFinalScore(targetScore);

    // Animate percentage counter
    let current = 0;
    const increment = targetScore / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        setPercentage(targetScore);
        clearInterval(timer);
        setTimeout(() => {
          setShowButton(true);
          setScore(targetScore);
        }, 500);
      } else {
        setPercentage(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [setScore]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="story-container bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 no-select"
    >
      {/* Story Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 safe-area">
        <div className="flex gap-1 p-3">
          <div className="flex-1 h-1 bg-white rounded-full"></div>
          <div className="flex-1 h-1 bg-white rounded-full"></div>
          <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: 'linear' }}
              className="h-full bg-white origin-left"
            />
          </div>
          <div className="flex-1 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>

      {/* Story Overlay */}
      <div className="absolute inset-0 story-overlay pointer-events-none"></div>

      {/* Floating Heart Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {['💖', '💕', '💗', '💓', '💝', '✨'][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 safe-area">
        {/* Title */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-black text-center mb-16 text-white text-shadow-strong uppercase tracking-tight"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Measuring Your
          <br />
          Cuteness...
        </motion.h2>

        {/* Giant Percentage Display */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
          className="relative mb-16"
        >
          {/* Glow Ring */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-white/20 blur-3xl"
          />

          {/* Percentage Circle */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full border-8 border-white/30 border-t-white"
            />

            <div className="text-[100px] font-black text-white text-shadow-glow leading-none">
              {percentage}
              <span className="text-6xl">%</span>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-12">
          <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-white rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Continue Button */}
        {showButton && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="story-button px-16 py-6 bg-white text-black text-2xl font-black rounded-full shadow-2xl uppercase tracking-wide"
          >
            Continue →
          </motion.button>
        )}

        {/* Loading Text */}
        {!showButton && (
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/80 text-xl font-bold text-shadow-strong"
          >
            Analyzing your cuteness level...
          </motion.div>
        )}
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.5, 1],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          scale: { duration: 2, repeat: Infinity },
        }}
        className="absolute top-24 right-8 text-8xl opacity-30 pointer-events-none"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.5, 1],
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
          scale: { duration: 2.5, repeat: Infinity },
        }}
        className="absolute bottom-32 left-8 text-8xl opacity-30 pointer-events-none"
      >
        🌟
      </motion.div>
    </motion.div>
  );
};

export default MeasuringScreen;
