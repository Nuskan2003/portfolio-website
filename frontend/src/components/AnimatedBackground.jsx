import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-20
          w-96
          h-96
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          right-20
          w-[500px]
          h-[500px]
          rounded-full
          bg-green-500/20
          blur-3xl
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[400px]
          h-[400px]
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

    </div>
  );
}

export default AnimatedBackground;