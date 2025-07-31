'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/contexts/LanguageContext';
import { Instagram, Youtube, MessageCircle, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/sanctum_official',
      label: 'Instagram',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@sanctum',
      label: 'YouTube',
    },
    {
      icon: MessageCircle,
      href: 'https://t.me/sanctum_community',
      label: 'Telegram',
    },
  ];

  const legalLinks = [
    { key: 'impressum', href: '/impressum' },
    { key: 'privacy', href: '/privacy' },
    { key: 'terms', href: '/terms' },
  ];

  return (
    <footer className="bg-obsidian text-bone border-t border-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-obsidian font-bold">S</span>
              </div>
              <span className="text-3xl font-serif font-bold sanctum-gold">Sanctum</span>
            </Link>
            <p className="text-lg text-gold font-medium mb-4 italic">
              {t('footerTagline')}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t('location')}
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-bone/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-gold" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6 sanctum-gold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <a
                  href="mailto:contact@sanctum.com"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  contact@sanctum.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-300">+49 911 XXX XXXX</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Nuremberg, Germany<br />
                  <span className="text-sm text-gray-400">International clients welcome</span>
                </span>
              </div>
            </div>
          </div>

          {/* Legal & Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6 sanctum-gold">Legal</h3>
            <div className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="block text-gray-300 hover:text-gold transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-serif font-semibold mb-3 text-indigo-300">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/philosophy" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                  {t('philosophy')}
                </Link>
                <Link href="/offerings" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                  {t('offerings')}
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                  {t('apply')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>
            <p className="text-gray-400 text-xs text-center md:text-right max-w-md">
              {t('disclaimer')}
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-indigo-500 to-gold opacity-30"></div>
      </div>
    </footer>
  );
}
