'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Snowflake } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* 1. 全螢幕背景影片 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/hero-bg.webm" type="video/webm" />
      </video>

      {/* 2. 深色遮罩 (確保文字清晰可見) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10 backdrop-blur-[2px]" />

      {/* 3. 毛玻璃主視覺卡片 (Glassmorphism) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center p-10 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl max-w-lg w-full mx-4 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <Snowflake className="w-12 h-12 text-white mb-6 opacity-90" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
          iGoSnow
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide">
          Your Ultimate Snowboard Hub.
        </p>

        {/* 核心產品入口：導向平花系統 */}
        <Link
          href="https://gratry.igosnow.com"
          className="group relative flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
        >
          <span className="relative z-10 flex items-center gap-2">
            Enter Gratry Snow
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          {/* 按鈕的 hover 光暈特效 */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </motion.div>

      {/* 頁面底部的預留版位 (裝飾用，提升平台格局感) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 text-white/50 text-sm font-light tracking-widest uppercase"
      >
        More features coming soon
      </motion.div>
    </main>
  );
}