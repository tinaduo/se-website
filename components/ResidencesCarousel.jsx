'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/images/renders/duplex-day.jpg',
  '/images/renders/duplex-night.jpg',
  '/images/renders/rowhouse-day.jpg',
  '/images/renders/rowhouse-night.jpg',
];

export default function ResidencesCarousel() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full h-[400px] md:h-[800px] overflow-hidden">
      {prevIndex !== null && (
        <motion.div
          key={`prev-${prevIndex}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={images[prevIndex]}
            alt={`Slide ${prevIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      )}
      <motion.div
        key={`current-${index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-20"
      >
        <Image
          src={images[index]}
          alt={`Slide ${index + 1}`}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
