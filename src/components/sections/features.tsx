"use client";

import { Card } from "@/components/ui/card";
import { Users, Zap, ShieldCheck, Scale } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export function Features() {
  const { translations } = useLanguage();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: translations.feature1Title,
      description: translations.feature1Desc,
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: translations.feature2Title,
      description: translations.feature2Desc,
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: translations.feature3Title,
      description: translations.feature3Desc,
    },
  ];

  return (
    <section id="features" className="bg-secondary text-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {translations.featuresTitle}
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            {translations.featuresSubtitle}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="animated-border-card rounded-xl">
              <div className="relative bg-background rounded-xl h-full text-center p-8 flex flex-col items-center transition-all duration-300 hover:bg-secondary/50">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-2xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
