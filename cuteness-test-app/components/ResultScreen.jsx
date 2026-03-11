import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ResultScreen = ({ score, onRestart }) => {
  const [confetti, setConfetti] = useState([]);
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    // Set window height on client side only
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }

    // Generate confetti
    const confettiArray = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      emoji: ['🎉', '✨', '💖', '⭐', '💫', '🎊', '💕'][Math.floor(Math.random() * 7)],
    }));
    setConfetti(confettiArray);
  }, []);

  const getMessage = (score) => {
    if (score >= 95) return "OMG! YOU'RE ILLEGALLY CUTE!";
    if (score >= 90) return "WOW! DANGEROUSLY CUTE!";
    if (score >= 85) return "ABSOLUTELY ADORABLE!";
    if (score >= 80) return "SUPER CUTE ALERT!";
    return "YOU'RE SO CUTE!";
  };

  const getEmoji = (score) => {
    if (score >= 95) return "😍";
    if (score >= 90) return "🥰";
    if (score >= 85) return "😊";
    if (score >= 80) return "☺️";
    return "😌";
  };

  const handleShare = () => {
    const shareText = `I scored ${score}% on the Cuteness Test! ${getMessage(score)} 💖`;
    
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: 'Cuteness Test Result',
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      alert('Result copied! Share it on your story! 📱');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="story-container bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 no-select"
    >
      {/* Story Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 safe-area">
        <div className="flex gap-1 p-3">
          <div className="flex-1 h-1 bg-white rounded-full"></div>
          <div className="flex-1 h-1 bg-white rounded-full"></div>
          <div className="flex-1 h-1 bg-white rounded-full"></div>
          <div className="flex-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Story Overlay */}
      <div className="absolute inset-0 story-overlay pointer-events-none"></div>

      {/* Confetti */}
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-5xl pointer-events-none"
          style={{
            left: `${item.left}%`,
            top: '-50px',
          }}
          animate={{
            y: [0, windowHeight + 100],
            rotate: [0, 360, 720],
            opacity: [1, 1, 0],
            scale: [0.5, 1.2, 0.8],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {item.emoji}
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
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-[120px] leading-none"
          >
            {getEmoji(score)}
          </motion.div>
        </motion.div>

        {/* Giant Score */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.4,
            type: 'spring',
            stiffness: 150,
          }}
          className="mb-8 relative"
        >
          {/* Glow Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white/30 blur-3xl rounded-full"
          />

          <div className="relative text-[140px] md:text-[180px] font-black text-white text-shadow-glow leading-none">
            {score}
            <span className="text-7xl">%</span>
          </div>
        </motion.div>

        {/* Message */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-4xl md:text-5xl font-black text-center mb-16 text-white text-shadow-strong uppercase leading-tight max-w-2xl px-4"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          {getMessage(score)} 💘
        </motion.h2>

        {/* Action Buttons */}
        <div className="w-full max-w-md space-y-4">
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleShare}
            className="story-button w-full px-10 py-7 bg-white text-black text-2xl font-black rounded-2xl shadow-2xl uppercase tracking-wide flex items-center justify-center gap-3"
          >
            <span>Share to Story</span>
            <span className="text-3xl">📤</span>
          </motion.button>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRestart}
            className="story-button w-full px-10 py-6 bg-white/20 backdrop-blur-sm text-white text-xl font-black rounded-2xl border-2 border-white uppercase tracking-wide flex items-center justify-center gap-3"
          >
            <span>Try Again</span>
            <span className="text-2xl">🔄</span>
          </motion.button>
        </div>

        {/* Swipe Up Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/70 text-3xl"
          >
            ⬆️
          </motion.div>
          <div className="text-white/70 text-sm font-bold">
            SWIPE UP TO SHARE
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating Hearts */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 15, -15, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-32 right-6 text-8xl opacity-40 pointer-events-none"
      >
        💕
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -15, 15, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute bottom-48 left-6 text-8xl opacity-40 pointer-events-none"
      >
        💗
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 right-12 text-7xl opacity-30 pointer-events-none"
      >
        ✨
      </motion.div>
    </motion.div>
  );
};

export default ResultScreen;
