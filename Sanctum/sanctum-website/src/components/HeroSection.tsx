'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-sanctum-obsidian text-bone min-h-[90vh] flex items-center">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 texture-subtle opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="sanctum-gold">Sacred</span>{' '}
            <span className="text-bone">Ritual Touch</span>
            <br />
            <span className="text-3xl md:text-5xl sanctum-indigo">for Deep Transformation</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gold font-medium mb-4 italic">
            {t('heroTagline')}
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold hover:opacity-90 text-obsidian font-semibold px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact">{t('applyForIntake')}</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-bone px-8 py-4 text-lg transition-all duration-200"
            >
              <Link href="/philosophy">{t('learnMore')}</Link>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian to-indigo-900/20"></div>
    </section>
  );
}
