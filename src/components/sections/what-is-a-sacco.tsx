"use client";

import { useLanguage } from "@/context/language-context";
import { Handshake, Banknote, PiggyBank } from 'lucide-react';

export function WhatIsASacco() {
  const { translations } = useLanguage();

  const benefits = [
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: translations.saccoInfoBenefit1Title,
      description: translations.saccoInfoBenefit1Desc,
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-primary" />,
      title: translations.saccoInfoBenefit2Title,
      description: translations.saccoInfoBenefit2Desc,
    },
    {
      icon: <Banknote className="h-8 w-8 text-primary" />,
      title: translations.saccoInfoBenefit3Title,
      description: translations.saccoInfoBenefit3Desc,
    },
  ];


  return (
    <section id="what-is-a-sacco" className="bg-secondary/30 text-white py-24 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    {translations.saccoInfoTitle}
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                    {translations.saccoInfoSubtitle}
                </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
                {benefits.map((benefit) => (
                    <div key={benefit.title} className="bg-background/50 rounded-xl p-8 text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="mb-6 bg-secondary/50 p-4 rounded-full">
                           {benefit.icon}
                        </div>
                        <h3 className="font-bold text-2xl mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
