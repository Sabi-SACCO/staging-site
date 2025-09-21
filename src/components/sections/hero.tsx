"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdyCt2B42Ny0J7ih7l3bk7TrpsP4pjgTSK-i-3Q9FeFgpJ-Ow/viewform?usp=dialog";

export function Hero() {
  const { translations } = useLanguage();
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/1920/1080"
          alt="A vibrant community gathering in Ethiopia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4">
          {translations.heroTitle}
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 mb-8">
          {translations.heroSubtitle}
        </p>
        <Button size="xl" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-transform duration-300 hover:scale-105">
          <Link href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
            {translations.heroCta}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
