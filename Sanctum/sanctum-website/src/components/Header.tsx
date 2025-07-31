'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Globe } from 'lucide-react';
import { useTranslation, useLanguage } from '@/contexts/LanguageContext';
import { Language, languages } from '@/lib/translations';

export function Header() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', href: '/' },
    { key: 'philosophy', href: '/philosophy' },
    { key: 'offerings', href: '/offerings' },
    { key: 'contact', href: '/contact' },
  ];

  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-bone hover:bg-indigo-600/20">
          <Globe className="w-4 h-4 mr-1" />
          {languages[language]}
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-bone border-gold/20">
        {Object.entries(languages).map(([langCode, langName]) => (
          <DropdownMenuItem
            key={langCode}
            onClick={() => setLanguage(langCode as Language)}
            className={`cursor-pointer ${language === langCode ? 'bg-gold/10 text-gold' : 'hover:bg-gold/5'}`}
          >
            {langName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="bg-sanctum-obsidian text-bone shadow-lg relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-obsidian font-bold text-sm">S</span>
            </div>
            <span className="text-2xl font-serif font-bold sanctum-gold">Sanctum</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="font-medium hover:text-gold transition-colors duration-200"
              >
                {t(item.key)}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-indigo hover:bg-indigo-700 text-bone ml-4"
            >
              <Link href="/contact">{t('apply')}</Link>
            </Button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-bone">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-obsidian text-bone border-l border-gold/20">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="flex items-center space-x-2 mb-8">
                    <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                      <span className="text-obsidian font-bold text-sm">S</span>
                    </div>
                    <span className="text-2xl font-serif font-bold sanctum-gold">Sanctum</span>
                  </Link>

                  {navigationItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="text-lg font-medium hover:text-gold transition-colors duration-200 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(item.key)}
                    </Link>
                  ))}

                  <Button
                    asChild
                    className="bg-gradient-indigo hover:bg-indigo-700 text-bone mt-4"
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      {t('apply')}
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
