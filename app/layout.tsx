import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "iGoSnow | Your Ultimate Snowboard Hub",
    template: "%s | iGoSnow", // 之後如果新增子頁面，會變成 "子頁面標題 | iGoSnow"
  },
  description: "iGoSnow 是你的極致滑雪門戶。探索我們的平地花式 (Gratry) 技巧庫，連線社群，提升你的滑雪技術，體驗冰雪的魅力。",
  keywords: ["Snowboarding", "Snowboard Portal", "Snowboard Community", "Gratry Snow", "Ground Tricks", "iGoSnow"],
  authors: [{ name: "Your Name/Team" }],
  creator: "iGoSnow Team",
  
  // Open Graph (社群分享預覽)
  openGraph: {
    type: "website",
    locale: "zh-TW",
    url: "https://igosnow.com",
    title: "iGoSnow | Your Ultimate Snowboard Hub",
    description: "iGoSnow 是你的極致滑雪門戶。探索我們的平地花式 (Gratry) 技巧庫，體驗冰雪的魅力。",
    siteName: "iGoSnow",
    // 需要上傳一張分享用的縮圖 (1200x630) 到 public/ og-image.jpg
    // images: [{ url: "https://igosnow.com/og-image.jpg" }],
  },
  
  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "iGoSnow | Your Ultimate Snowboard Hub",
    description: "Your Ultimate Snowboard Hub. Enter Gratry Snow.",
    // images: ["https://igosnow.com/og-image.jpg"],
  },
  
  // 機器人索引
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
