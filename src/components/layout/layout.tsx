import React from 'react';
import { Navigation } from './navigation';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className || ''}`}>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
