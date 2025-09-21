"use client";

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useLanguage } from "@/context/language-context";
import { Target, Rocket, Users, Heart, Eye } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export function VisionCarousel() {
  const { translations, language } = useLanguage();

  const visionItems = [
    {
      icon: <Eye className="h-10 w-10 text-primary" />,
      title: "Our Vision",
      description: "To be Ethiopia's most trusted and innovative financial partner, empowering a generation to achieve their dreams.",
      am_title: "ራዕያችን",
      // am_description: "የኢትዮጵያ ყველაზე நம்பகமான እና ፈጠራ ያለው የገንዘብ አጋር በመሆን ትውልዱ ህልሙን እንዲያሳካ ማስቻል ነው።"
      am_description: "በሚቀጥሉት አሥር ዓመታት በኢኮኖሚ እጅግ የበለጸገ እና ስራ ፈጣሪ አባላትን ገንብቶ ማየት፡፡ "
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Our Mission",
      description: "To build a modern cooperative society that leverages technology to deliver convenient, responsive, and accessible financial tools that fulfill the needs of all our members.",
      am_title: "ተልዕኳችን",
      // am_description: "ለሁሉም ኢትዮጵያውያን ቀላል၊ ፍትሃዊ እና ተደራሽ የሆኑ የፋይናንስ መሳሪያዎችን ለማቅረብ ቴክኖሎጂን የሚጠቀም አባል-የመጀመሪያ የህብረት ሥራ ማህበር መገንባት።"
      am_description: "ለሁሉም አባላት ምቹ ፣ ተደራሽ እና ቀልጣፋ የፋይናንስ አማራጮችን በዘመናዊ ቴክኖሎጂን ታግዞ በማቅረብ የአባላትን እና የደንበኞችን ፍላጎት ማሟላት የሚችል ዘመናዊ የኀብረት ሥራ ማህበር መገንባት።"
      // am_description: "የሰለጠነ እና በስነምግባር የታነፀ የሰው ሃይል በማሟላት፤ ዘመናዊ ቴክኖሎጂን በመጠቀም ፣  ለህብረተሰቡ የፋይናንስ አጠቃቀም ተከታታይ ስልጠና በመስጠት ዘላቂነት ያለው ሁሉን አቀፍ የፋይናንስ ተቋም በመገንባት ምቹ ፣ ተደራሽ እና ቀልጣፋ የፋይናንስ አገልግሎት በመስጠት የአባላትን እና የደንበኞችን ፍላጎት ማሟላት ነው፡፡"
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Our Values",
      description: "Member-First, Integrity, Inclusivity, and Excellence. These aren't just words for us; they are the principles that guide every decision we make.",
      am_title: "እሴቶቻችን",
      am_description: "የአባላትን ፍላጎት ቀዳሚ ማድረግ ፣ ታማኝነት ፣ አካታችነት እና የላቀ የአገልግሎት ጥራት። እነዚህ ለእኛ ቃላት ብቻ አይደሉም ፤ ለምንወስዳቸውን እያንዳንዱን ውሳኔ የሚመሩ ጠንካራ መርሆች ናቸው።"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section id="vision-carousel" className="bg-secondary/30 text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
         <Carousel 
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
          <CarouselContent>
            {visionItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                    <div className="flex flex-col items-center text-center gap-6">
                        {item.icon}
                        <h3 className="font-bold text-3xl sm:text-4xl text-white">
                          {language === 'am' ? item.am_title : item.title}
                        </h3>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                         {language === 'am' ? item.am_description : item.description}
                        </p>
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform text-white bg-white/10 hover:bg-white/20 border-white/20" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform text-white bg-white/10 hover:bg-white/20 border-white/20" />
        </Carousel>
      </div>
    </section>
  )
}
