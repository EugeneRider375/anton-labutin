import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Anton LABUTIN — 3D Character & Environment Artist',
  description:
    'Game-ready 3D characters, fantasy creatures, monsters and architectural 3D models for video games and digital productions.',
  keywords: [
    '3D artist',
    'game characters',
    'character modeling',
    'fantasy creatures',
    '3D buildings',
    'architectural 3D',
    'freelance 3D artist',
    'Blender',
    'ZBrush',
  ],
  openGraph: {
    title: 'Anton LABUTIN — 3D Character & Environment Artist',
    description:
      'Game-ready 3D characters, creatures and architectural models for video games.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-[#0a0a0f] text-slate-100 antialiased font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
