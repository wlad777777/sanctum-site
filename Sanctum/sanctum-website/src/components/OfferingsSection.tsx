'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/contexts/LanguageContext';
import { Sparkles, Heart, Users, Repeat } from 'lucide-react';

export function OfferingsSection() {
  const { t } = useTranslation();

  const offerings = [
    {
      icon: Sparkles,
      titleKey: 'offering1Title',
      descKey: 'offering1Desc',
      duration: '90-120 min',
      type: 'individual',
    },
    {
      icon: Heart,
      titleKey: 'offering2Title',
      descKey: 'offering2Desc',
      duration: '150-180 min',
      type: 'couple',
    },
    {
      icon: Repeat,
      titleKey: 'offering3Title',
      descKey: 'offering3Desc',
      duration: '3, 7, or 13 sessions',
      type: 'package',
    },
    {
      icon: Users,
      titleKey: 'offering4Title',
      descKey: 'offering4Desc',
      duration: 'Monthly gatherings',
      type: 'community',
    },
  ];

  return (
    <section className="py-20 bg-bone">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-obsidian mb-4">
            {t('offeringsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each offering is crafted to guide you through profound transformation at your own pace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-gold/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-indigo rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-bone" />
                  </div>
                  <CardTitle className="text-xl font-serif text-obsidian group-hover:text-indigo-600 transition-colors">
                    {t(offering.titleKey)}
                  </CardTitle>
                  <div className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full inline-block">
                    {offering.duration}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed mb-6">
                    {t(offering.descKey)}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white transition-all duration-200"
                  >
                    {t('learnMore')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6 italic">
            "Even our entry-level experience is a high-value, in-depth journey of transformation"
          </p>
          <Button
            size="lg"
            className="bg-gradient-indigo hover:opacity-90 text-bone font-semibold px-8 py-4 shadow-lg"
          >
            {t('applyForIntake')}
          </Button>
        </div>
      </div>
    </section>
  );
}
