'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts/LanguageContext';
import { Shield, Zap, Crown, Heart } from 'lucide-react';
import Link from 'next/link';

export function PhilosophySection() {
  const { t } = useTranslation();

  const principles = [
    {
      icon: Zap,
      title: 'Transformation',
      description: 'Beyond relaxation - we facilitate deep inner transformation through conscious energy work',
    },
    {
      icon: Crown,
      title: 'Premium Experience',
      description: 'High-end, bespoke sessions for discerning clients committed to personal growth',
    },
    {
      icon: Shield,
      title: 'Safety & Ethics',
      description: 'Strict boundaries, confidentiality, and ethical practices in all our work',
    },
    {
      icon: Heart,
      title: 'Sacred Approach',
      description: 'Honoring the sacred nature of healing through ritual, intention, and presence',
    },
  ];

  return (
    <section className="py-20 bg-obsidian text-bone relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-subtle opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="sanctum-gold">{t('philosophyTitle')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <h3 className="text-2xl md:text-3xl font-serif text-indigo-400 mb-8">
            {t('philosophySubtitle')}
          </h3>
        </div>

        {/* Philosophy Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-bone/5 border-gold/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-300">
                  {t('philosophyText1')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bone/5 border-indigo-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-300">
                  {t('philosophyText2')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-center mb-12 sanctum-gold">
            Our Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-indigo rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                    <IconComponent className="w-10 h-10 text-bone" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold mb-3 sanctum-gold">
                    {principle.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Practitioner Bio Placeholder */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-bone/5 border-gold/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-24 h-24 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-obsidian">S</span>
              </div>
              <h4 className="text-2xl font-serif font-semibold mb-4 sanctum-gold">
                The Sanctum Practitioner
              </h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                With years of experience in sacred bodywork, energy healing, and transformational practices,
                our practitioner brings a unique blend of professional expertise and intuitive wisdom to each session.
                Trained in various modalities and committed to the highest ethical standards.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-obsidian"
              >
                <Link href="/philosophy">{t('readMore')}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
