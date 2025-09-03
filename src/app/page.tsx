import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { VisionCarousel } from '@/components/sections/vision-carousel';
import { WhatIsASacco } from '@/components/sections/what-is-a-sacco';
import { Features } from '@/components/sections/features';
import { Products } from '@/components/sections/products';
import { EarlyBenefits } from '@/components/sections/early-benefits';
import { HowToJoin } from '@/components/sections/how-to-join';
import { Faq } from '@/components/sections/faq';
import { WhySabi } from '@/components/sections/why-sabi';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhySabi />
        <VisionCarousel />
        <WhatIsASacco />
        <Features />
        <Products />
        <HowToJoin />
        <EarlyBenefits />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
