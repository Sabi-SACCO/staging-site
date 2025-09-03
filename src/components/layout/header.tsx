"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { useLanguage } from '@/context/language-context';

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdyCt2B42Ny0J7ih7l3bk7TrpsP4pjgTSK-i-3Q9FeFgpJ-Ow/viewform?usp=dialog";

export function Header() {
  const { language, toggleLanguage, translations } = useLanguage();

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent pt-12">
      <div className="container flex h-24 max-w-screen-2xl items-center justify-between">
        <Link href="/" aria-label="Sabi SACCO Home">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <Button onClick={toggleLanguage} variant="outline" className="transition-transform duration-300 hover:scale-105 border-primary text-primary hover:bg-primary/10">
            {language === 'en' ? 'አማርኛ' : 'English'}
          </Button>
            <Button asChild className="transition-transform duration-300 hover:scale-105 bg-primary/90 hover:bg-primary text-primary-foreground font-bold" size="lg">
            <Link href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
              {translations.joinNow}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
