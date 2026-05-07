'use client';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './icons/SocialIcons';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/qr/SEKVX6U5V4U7J1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-xl shadow-black/40 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </motion.a>
  );
}
