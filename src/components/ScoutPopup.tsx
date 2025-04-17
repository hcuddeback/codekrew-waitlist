'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ScoutPopup({ show, onClose }: { show: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black rounded-xl p-6 shadow-lg max-w-md w-full text-center relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={onClose}>
              ✕
            </button>
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ rotate: -5 }}
                animate={{ rotate: [ -5, 5, -5, 5, 0 ] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
                className="w-fit mx-auto mb-4"
              >
                <Image src="/scout-avatar-transparent.png" alt="Scout" width={100} height={100} className="rounded-full" />
              </motion.div>
            </div>
            <h2 className="text-xl font-bold mb-2">You’re on the list! 🎉</h2>
            <p className="text-sm text-gray-600 mb-4">
              Scout’s got you covered. We’ll be in touch soon with exclusive updates.
            </p>
            <button
              onClick={onClose}
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full transition"
            >
              Awesome!
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
