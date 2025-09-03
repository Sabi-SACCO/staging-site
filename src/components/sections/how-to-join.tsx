"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { ArrowRight, CheckCircle2, UserPlus, FileText } from "lucide-react";
import Link from "next/link";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdyCt2B42Ny0J7ih7l3bk7TrpsP4pjgTSK-i-3Q9FeFgpJ-Ow/viewform?usp=dialog";

export function HowToJoin() {
  const { translations } = useLanguage();

  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: translations.joinStep1Title,
      description: translations.joinStep1Desc,
    },
    {
      icon: <UserPlus className="h-10 w-10 text-primary" />,
      title: translations.joinStep2Title,
      description: translations.joinStep2Desc,
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
      title: translations.joinStep3Title,
      description: translations.joinStep3Desc,
    },
  ];

  return (
    <section id="how-to-join" className="bg-secondary/50 text-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {translations.joinTitle}
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            {translations.joinSubtitle}
          </p>
        </div>
        <div className="mt-20 relative">
           <div className="absolute top-8 left-1/2 w-0.5 h-[calc(100%-4rem)] bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center text-center md:text-left">
                   <div className="flex-shrink-0 md:w-1/2 md:pr-8 flex md:justify-end">
                     <div className="relative md:w-auto">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary border-2 border-primary z-10 mb-4 md:mb-0">
                           <span className="text-2xl font-bold text-primary">{index + 1}</span>
                        </div>
                     </div>
                   </div>

                  <div className="md:w-1/2 md:pl-8">
                     <div className="mb-4">{step.icon}</div>
                     <h3 className="font-bold text-2xl mb-2">{step.title}</h3>
                     <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="mt-16 text-center">
            <Button size="xl" asChild className="group bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105">
                <Link href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                {translations.joinCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
