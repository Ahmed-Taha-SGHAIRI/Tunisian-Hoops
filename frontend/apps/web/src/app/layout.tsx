import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { inter, barlow, cairo } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Tunisian Hoops',
  description: 'Follow Tunisian basketball — fixtures, results, standings, teams, players, transfers and news.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn("h-full antialiased dark", inter.variable, barlow.variable, cairo.variable)} suppressHydrationWarning>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
