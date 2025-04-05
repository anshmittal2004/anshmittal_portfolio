// components/ParallaxHero.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxHeroProps {
  imageUrl: string;
}

export default function ParallaxHero({ imageUrl }: ParallaxHeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <motion.div 
      style={{ y }}
      className="absolute inset-0 z-0"
    >
      <Image
        src={imageUrl}
        alt="Background"
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}