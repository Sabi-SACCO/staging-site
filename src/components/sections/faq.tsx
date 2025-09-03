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
      am_q: "ሳኮ (SACCO) ምንድን ነው እና ከባንክ በምን ይለያል?",
      am_a: "ሳኮ (የቁጠባ እና ብድር የህብረት ስራ ማህበር) በአባላቱ የተያዘ እና የሚተዳደር የገንዘብ ተቋም ነው። ለባለአክሲዮኖች ትርፍ ለማትረፍ ከሚሰራ ባንክ በተለየ የሳኮ ዋና ግብ ለአባላቱ ተመጣጣኝ የገንዘብ አገልግሎቶችን መስጠት ነው። ትርፉ ብዙውን ጊዜ ለአባላት እንደ ድርሻ ይመለሳል ወይም የተሻለ የወለድ ምጣኔ ለማቅረብ ያገለግላል።",
    },
    {
      q: "Who is eligible to join Sabi SACCO?",
      a: "Sabi is being built for all aspiring Ethiopians, wherever you are. We are creating an inclusive community for creators, entrepreneurs, professionals, and anyone who believes in the power of cooperative finance. The primary requirement is sharing our vision for a modern, tech-powered financial future.",
      am_q: "የሳቢ ሳኮ አባል መሆን የሚችለው ማነው?",
      am_a: "ሳቢ በየትኛውም ቦታ ለሚገኙ φιλόδοξοι ኢትዮጵያውያን እየተገነባ ነው። ለፈጣሪዎች፣ ለስራ ፈጣሪዎች፣ ለባለሙያዎች እና በህብረት ስራ ፋይናንስ ሃይል ለሚያምን ማንኛውም ሰው አካታች ማህበረሰብ እየፈጠርን ነው። ዋናው መስፈርት የዘመናዊ፣ በቴክኖሎጂ የተደገፈ የገንዘብ የወደፊት ራዕያችንን መጋራት ነው።",
    },
    {
      q: "What does it mean that Sabi is 'under formation'?",
      a: "It means we are in the active process of fulfilling all legal and regulatory requirements to become a fully licensed SACCO in Ethiopia. Early members who join now are considered founding members, giving them a unique opportunity to shape our direction, products, and community from the very beginning.",
      am_q: "ሳቢ 'በምስረታ ላይ ነው' ማለት ምን ማለት ነው?",
      am_a: "ይህ ማለት በኢትዮጵያ ሙሉ ፈቃድ ያለው ሳኮ ለመሆን ሁሉንም ህጋዊ እና ቁጥጥር መስፈርቶች በማሟላት ሂደት ላይ ነን ማለት ነው። አሁን የሚቀላቀሉ ቀደምት አባላት እንደ መስራች አባላት ይቆጠራሉ、 ይህም አቅጣጫችንን፣ ምርቶቻችንን እና ማህበረሰባችንን ከጅምሩ ለመቅረጽ ልዩ እድል ይሰጣቸዋል።",
    },
    {
      q: "How will my savings be protected?",
      a: "Member savings are a top priority. Once we are fully licensed, we will operate under the regulatory framework of the relevant Ethiopian authorities, which includes provisions for protecting members' funds. We are committed to transparency and will provide detailed information on all security measures.",
      am_q: "የኔ ቁጠባ እንዴት ይጠበቃል?",
      am_a: "የአባላት ቁጠባ 최우선 ጉዳይ ነው። ሙሉ ፈቃድ ካገኘን በኋላ፣ በአግባብ ባላቸው የኢትዮጵያ ባለስልጣናት የቁጥጥር ማዕቀፍ ስር እንሰራለን፣ ይህም የአባላትን ገንዘብ ለመጠበቅ የሚያስچሉ ድንጋጌዎችን ያካትታል። ለግልጽነት ቁርጠኞች ነን እና በሁሉም የደህንነት እርምጃዎች ላይ ዝርዝር መረጃ እናቀርባለን።",
    },
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
