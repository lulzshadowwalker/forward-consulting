"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

// Konami Code sequence: Up, Up, Down, Down, Left, Right, Left, Right, B, A
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export function AnimatedEasterEgg() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const resetSequence = useCallback(() => {
    setSequence([]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent triggering during form inputs
      if (
        (e.target && (e.target as HTMLElement).tagName === "INPUT") ||
        (e.target as HTMLElement).tagName === "TEXTAREA"
      ) {
        return;
      }

      setSequence((prev) => {
        const newSequence = [...prev, e.code];

        // Keep only the last 10 keys (length of Konami code)
        const trimmedSequence = newSequence.slice(-KONAMI_CODE.length);

        // Check if sequence matches Konami code
        const matches = KONAMI_CODE.every(
          (code, index) => trimmedSequence[index] === code,
        );

        if (matches && trimmedSequence.length === KONAMI_CODE.length) {
          setIsActive(true);
          setShowMessage(true);
          return [];
        }

        return trimmedSequence;
      });
    };

    // Reset sequence after 3 seconds of inactivity
    const timeoutId = setTimeout(resetSequence, 3000);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, [resetSequence]);

  const closeEasterEgg = () => {
    setIsActive(false);
    setShowMessage(false);
  };

  const particles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
      initial={{
        x: typeof window !== "undefined" ? window.innerWidth / 2 : 400,
        y: typeof window !== "undefined" ? window.innerHeight / 2 : 300,
        scale: 0,
        opacity: 1,
      }}
      animate={{
        x:
          typeof window !== "undefined"
            ? Math.random() * window.innerWidth
            : Math.random() * 800,
        y:
          typeof window !== "undefined"
            ? Math.random() * window.innerHeight
            : Math.random() * 600,
        scale: [0, 1, 0],
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: Math.random() * 0.5,
        ease: "easeOut",
      }}
    />
  ));

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Particle explosion */}
          <div className="absolute inset-0">{particles}</div>

          {/* Rainbow wave effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 opacity-20"
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 3, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            style={{
              background:
                "conic-gradient(from 0deg, #ff0000, #ff8800, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088, #ff0000)",
              borderRadius: "50%",
              transformOrigin: "center",
            }}
          />

          {/* Matrix-style falling code */}
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-sm opacity-70 select-none"
              style={{ left: `${i * 6.67}%` }}
              initial={{ y: -100 }}
              animate={{
                y:
                  typeof window !== "undefined"
                    ? window.innerHeight + 100
                    : 700,
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            >
              {Array.from({ length: 20 }, (_, j) => (
                <div key={j} className="mb-1">
                  {Math.random().toString(36).substr(2, 1).toUpperCase()}
                </div>
              ))}
            </motion.div>
          ))}

          {/* Central message with typewriter effect */}
          <AnimatePresence>
            {showMessage && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="bg-black/80 backdrop-blur-sm border border-cyan-400 rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl"
                  initial={{ scale: 0, rotateY: 180 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  exit={{ scale: 0, rotateY: -180 }}
                  transition={{
                    type: "spring",
                    damping: 15,
                    delay: 1.5,
                  }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🎮✨🚀
                  </motion.div>

                  <motion.h2
                    className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    KONAMI CODE ACTIVATED!
                  </motion.h2>

                  <motion.p
                    className="text-cyan-300 mb-6 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                  >
                    ↑↑↓↓←→←→BA
                    <br />
                    <span className="text-sm text-gray-400">
                      Classic cheat code detected!
                    </span>
                  </motion.p>

                  <motion.button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transform transition-all duration-200"
                    onClick={closeEasterEgg}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 }}
                  >
                    Awesome! Close
                  </motion.button>

                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                    onClick={closeEasterEgg}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
