import { motion } from 'framer-motion';

const InteractionScreen = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="story-container bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 no-select"
    >
      {/* Story Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 safe-area">
        <div className="flex gap-1 p-3">
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
          <div className="flex-1 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>

      {/* Story Overlay */}
      <div className="absolute inset-0 story-overlay pointer-events-none"></div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-white/40 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 safe-area">
        {/* Giant Emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-10"
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-[120px] leading-none"
          >
            🤔
          </motion.div>
        </motion.div>

        {/* Bold Question */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-5xl md:text-6xl font-black text-center mb-16 text-white text-shadow-strong uppercase leading-tight max-w-2xl"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Are You Ready
          <br />
          To Test Your
          <br />
          Cuteness?
        </motion.h2>

        {/* Choice Buttons (Story Poll Style) */}
        <div className="w-full max-w-md space-y-5">
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="story-button w-full px-10 py-7 bg-white text-black text-3xl font-black rounded-2xl shadow-2xl uppercase tracking-wide flex items-center justify-between"
          >
            <span>Yes</span>
            <span className="text-4xl">😌</span>
          </motion.button>

          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="story-button w-full px-10 py-7 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-3xl font-black rounded-2xl shadow-2xl uppercase tracking-wide flex items-center justify-between border-2 border-white"
          >
            <span>Of Course</span>
            <span className="text-4xl">💖</span>
          </motion.button>
        </div>

        {/* Tap Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 text-white/70 text-sm font-bold tap-indicator"
        >
          👆 TAP YOUR CHOICE
        </motion.div>
      </div>

      {/* Decorative Hearts */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 15, -15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-32 right-8 text-7xl opacity-40 pointer-events-none"
      >
        💕
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, -15, 15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute bottom-40 left-8 text-7xl opacity-40 pointer-events-none"
      >
        💗
      </motion.div>
    </motion.div>
  );
};

export default InteractionScreen;
