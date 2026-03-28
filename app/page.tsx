'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
const LogoIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 200 200" 
    fill="none" 
    className={className}
  >
    <path d="M 20 100 A 80 80 0 0 1 180 100" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
    <path d="M 35 100 L 75 50 L 105 80 L 135 45 L 175 100" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 30 130 C 70 180 150 160 180 110" stroke="currentColor" strokeWidth="14" strokeLinecap="round"/>
    <circle cx="100" cy="100" r="12" fill="currentColor"/>
    <path d="M 100 125 L 100 155" stroke="currentColor" strokeWidth="14" strokeLinecap="round"/>
    <path d="M 75 135 L 125 125" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
  </svg>
);

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* 1. 全螢幕背景影片 - 優化效能與相容性 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true" // 告訴螢幕閱讀器這是裝飾用影片
        // 建議上傳一個影片首幀的圖片作為 poster，防止影片加載太慢
        // poster="/hero-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/hero-bg.webm" type="video/webm" />
        你的瀏覽器不支援 HTML5 影片。
      </video>

      {/* 2. 深色遮罩 */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10 backdrop-blur-[2px]" />

      {/* 3. 毛玻璃主視覺卡片 (Glassmorphism) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center p-10 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl max-w-lg w-full mx-4 text-center"
      >
        {/* 將 Lucide 圖示換成新的 iGoSnow Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120, damping: 20 }}
          className="mb-8" // 增加一點下邊距
        >
          {/* 直接使用 Tailwind 控制顏色為白色，設定大小 */}
          <LogoIcon className="w-24 h-24 text-white drop-shadow-md" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
          iGoSnow
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 font-light tracking-wide max-w-sm">
          Your Ultimate Snowboard Hub. <br />
          Experience the rush, master the mountain.
        </p>

        {/* 核心產品入口：導向 Vercel 上的 Gratry 系統 */}
        <Link
          href="https://gratry.igosnow.com"
          className="group relative flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 w-full sm:w-auto"
        >
          <span className="relative z-10 flex items-center gap-2.5">
            Enter Gratry Snow
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </span>
          {/* 按鈕的 hover 光暈特效 - 調整得更柔和一些 */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </motion.div>

      {/* 頁面底部的預留版位 (裝飾用，提升平台格局感) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 text-white/40 text-sm font-light tracking-widest uppercase"
      >
        The Gateway to Your Next Snow Adventure
      </motion.div>
    </main>
  );
}