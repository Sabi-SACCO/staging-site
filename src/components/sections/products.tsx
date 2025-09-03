"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { ShieldCheck, HeartPulse } from "lucide-react";

export function Products() {
  const { translations } = useLanguage();
  
  const products = [
    {
      id: "health",
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
      title: translations.product1Title,
      description: translations.product1Desc,
      image: "https://picsum.photos/800/600",
      hint: "financial health wellness",
    },
    {
      id: "loans",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: translations.product2Title,
      description: translations.product2Desc,
      image: "https://picsum.photos/801/600",
      hint: "financial security access",
    }
  ];

  return (
    <section id="products" className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {translations.productsTitle}
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            {translations.productsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
            {products.map((product) => (
                <div key={product.id} className="bg-secondary/30 rounded-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:bg-secondary/50">
                     <div className="flex items-center gap-6">
                        <div className="bg-background p-4 rounded-full">
                            {product.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                        </div>
                     </div>
                     <p className="mt-6 text-lg text-muted-foreground">{product.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
