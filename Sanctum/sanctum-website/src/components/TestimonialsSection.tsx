'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      textKey: 'testimonial1',
      author: 'A. S.',
      details: '45, Berlin',
    },
    {
      textKey: 'testimonial2',
      author: 'J. R.',
      details: '38, München',
    },
    {
      textKey: 'testimonial3',
      author: 'M. K.',
      details: '42, International Client',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-bone to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-obsidian mb-4">
            {t('testimonialsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experiences shared by those who have walked the path of sacred transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-2 border-gold/20 hover:border-gold/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Quote icon background */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-gold" />
              </div>

              <CardContent className="p-8 relative">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-gold mb-4" />
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    "{t(testimonial.textKey)}"
                  </blockquote>
                </div>

                <div className="border-t border-gold/20 pt-4">
                  <p className="font-semibold text-obsidian">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.details}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gold rounded-full"></div>
              <span className="text-sm font-medium">100% Confidential</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              <span className="text-sm font-medium">NDA Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gold rounded-full"></div>
              <span className="text-sm font-medium">Professional Ethics</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              <span className="text-sm font-medium">Premium Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
