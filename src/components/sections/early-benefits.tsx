"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Info } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdyCt2B42Ny0J7ih7l3bk7TrpsP4pjgTSK-i-3Q9FeFgpJ-Ow/viewform?usp=dialog";

export function EarlyBenefits() {
  const { translations } = useLanguage();

  const benefits = [
    translations.earlyBenefit1,
    translations.earlyBenefit2,
    translations.earlyBenefit3,
    translations.earlyBenefit4,
  ];

  return (
    <section id="early-benefits" className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src="https://picsum.photos/800/450"
              alt="A group of friends planning their future"
              fill
              className="object-cover"
              data-ai-hint="financial planning future"
            />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {translations.earlyTitle}
            </h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
              {translations.earlySubtitle}
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-lg">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Alert className="mt-8 bg-secondary/30 border-primary/20 text-foreground">
              <Info className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-bold">
                {translations.underFormationTitle}
              </AlertTitle>
              <AlertDescription>
                {translations.underFormationDesc}
              </AlertDescription>
            </Alert>
            <div className="mt-10">
              <Button
                size="xl"
                asChild
                className="group bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105"
              >
                <Link
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translations.earlyCta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
