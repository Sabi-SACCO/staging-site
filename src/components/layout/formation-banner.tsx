"use client";

import { Megaphone } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function FormationBanner() {
  const { translations } = useLanguage();
  return (
    <div className="bg-primary/10 border-b border-primary/20 text-primary-foreground py-2 text-center text-sm">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Megaphone className="h-4 w-4 text-primary" />
        <p className="text-primary">{translations.underFormationBanner}</p>
      </div>
    </div>
  );
}
