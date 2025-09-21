"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/language-context";

export function Faq() {
  const { language, translations } = useLanguage();

  const staticQuestions = [
    {
      q: "What is a SACCO and how is it different from a bank?",
      a: "A SACCO (Savings and Credit Cooperative Organization) is a financial institution owned and controlled by its members. Unlike a bank that aims to make a profit for shareholders, a SACCO's primary goal is to provide affordable financial services to its members. Profits are often returned to members as dividends or used to offer better rates.",
      am_q: "የቁጠባ እና ብድር የኅብረት ስራ ማህበር (SACCO) ምንድን ነው? እና ከባንክ በምን ይለያል?",
      am_a: "አንድ የገንዘብ ቁጠባ እና ብድር የኅብረት ስራ ማህበር በአባላቱ የተቋቋመ እና የሚተዳደር የፋይናንስ ተቋም ነው። ለባለአክሲዮኖች ትርፍ ለማትረፍ ከሚሰራ ባንክ በተለየ አንድ የገንዘብ ቁጠባና ብድር የኅብረት ስራ ማህበር ዋና ግብ ለአባላቱ ተመጣጣኝ ፋይናንስ አገልግሎቶችን መስጠት ነው። ትርፉ ብዙውን ጊዜ ለአባላት እንደ ድርሻ ይከፋፈላል ወይም የተሻለ የወለድ ምጣኔ ለማቅረብ ያገለግላል።",
    },
    {
      q: "Who is eligible to join Sabi SACCO Ltd.?",
      a: "Sabi is being built for all aspiring Ethiopians, wherever you are. We are creating an inclusive community for creators, entrepreneurs, professionals, and anyone who believes in the power of cooperative finance. The primary requirement is sharing our vision for a modern, tech-powered financial future.",
      am_q: "የሳቢ የገንዘብ ቁጠባ እና ብድር የኅብረት ስራ ማህበር አባል መሆን የሚችለው ማነው?",
      am_a: "ሳቢ በየትኛውም ቦታ ለሚገኙ ኢትዮጵያውያን እየተገነባ ነው። ለወጣቶች ፣ ለሴቶች ፣ ለስራ ፈጣሪዎች ፣ ለባለሙያዎች እና በህብረት ስራ ፋይናንስ ጉልበት ለሚያምን ማንኛውም ሰው አካታች የሆነ ተቋም እየፈጠርን ነው። ዋናው መስፈርት የዘመናዊ እና በቴክኖሎጂ የተደገፈ የገንዘብ ቁጠባ እና ብድር የህብረት ስራ ማህበር የመገምባት የወደፊት ራዕያችንን መጋራት ነው።",
    },
    {
      q: "What does it mean that Sabi is 'under formation'?",
      a: "It means we are in the active process of fulfilling all legal and regulatory requirements to become a fully licensed SACCO in Ethiopia. Early members who join now are considered founding members, giving them a unique opportunity to shape our direction, products, and community from the very beginning.",
      am_q: "ሳቢ 'በምስረታ ላይ ነው' ማለት ምን ማለት ነው?",
      am_a: "ይህ ማለት በኢትዮጵያ ሙሉ ፈቃድ ያለው የገንዘብ ቁጠባ እና ብድር የኅብረት ስራ ማህበር ለመሆን ሁሉንም ህጋዊ መስፈርቶች በማሟላት ሂደት ላይ ነን ማለት ነው። አሁን የሚቀላቀሉ ቀደምት አባላት እንደ መስራች አባላት ይቆጠራሉ ይህም አቅጣጫችንን፣ ምርትና አገልግሎቶቻችንን ከጅምሩ ለመቅረጽ ልዩ እድል ይሰጣቸዋል።",
    }
  ];

  return (
    <section id="faq" className="bg-secondary py-24 sm:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {translations.faqTitle}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            {translations.faqSubtitle}
          </p>
        </div>

        <div className="bg-background/50 rounded-xl p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {staticQuestions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-lg font-semibold text-left text-white hover:no-underline">
                  {language === "am" ? item.am_q : item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground text-base pt-2">
                    {language === "am" ? item.am_a : item.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
