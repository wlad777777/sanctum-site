'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from '@/contexts/LanguageContext';
import { Send, Clock, UserCheck } from 'lucide-react';

export function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be handled later
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-obsidian via-gray-900 to-indigo-900 text-bone relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-subtle opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="sanctum-gold">{t('contactTitle')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            {t('contactSubtitle')}
          </p>
          <p className="text-sm text-indigo-300 italic">
            {t('contactNote')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Application Form */}
          <Card className="bg-bone/10 border-gold/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif sanctum-gold flex items-center">
                <UserCheck className="w-6 h-6 mr-2" />
                Intake Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="sanctum-intake">
                <input type="hidden" name="form-name" value="sanctum-intake" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('name')} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-bone/5 border-gold/30 text-bone placeholder-gray-400 focus:border-gold"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('email')} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-bone/5 border-gold/30 text-bone placeholder-gray-400 focus:border-gold"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('phone')}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-bone/5 border-gold/30 text-bone placeholder-gray-400 focus:border-gold"
                    placeholder="+49 xxx xxxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('message')} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-bone/5 border-gold/30 text-bone placeholder-gray-400 focus:border-gold resize-none"
                    placeholder="Share what draws you to this sacred experience..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-gold hover:opacity-90 text-obsidian font-semibold py-4 shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-bone/10 border-indigo-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-indigo-300">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                    <p className="text-lg text-bone">contact@sanctum.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone</p>
                    <p className="text-lg text-bone">+49 911 XXX XXXX</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Location</p>
                    <p className="text-lg text-bone">{t('location')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-bone/10 border-gold/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 sanctum-gold flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Process & Timeline
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Step 1:</strong> Submit your intake application</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Step 2:</strong> Initial consultation call (30 min)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Step 3:</strong> Schedule your sacred ceremony</p>
                  </div>
                  <div className="mt-6 p-4 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
                    <p className="text-sm italic">
                      Response time: 48-72 hours. Due to the exclusive nature of our work,
                      we carefully review each application to ensure mutual alignment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
