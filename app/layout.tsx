import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Wellness Corporate Healthcare',
  description: 'Premier provider of certified medical and laboratory solutions, specializing in government sector compliance and research-grade solutions.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#f5f7f8] text-slate-900">
        {children}
      </body>
    </html>
  );
}
