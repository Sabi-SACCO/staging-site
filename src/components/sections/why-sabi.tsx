"use client";

import { useLanguage } from "@/context/language-context";

export function WhySabi() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Why Another SACCO? Why Sabi?",
      subtitle:
        "Because finance hasn't kept up with the dreamers, the builders, the new Ethiopian generation. We decided to build the bridge.",
      p1: "Traditional cooperative finance in Ethiopia felt a little distant from our reality. It wasn’t built for the speed of modern life, the hustle of a new generation, or the bold aspirations of entrepreneurs and creators. We needed a member-led financial partner that was agile, transparent, and genuinely invested in our success.",
      p2: "That's why we created Sabi. We are a collective of ambitious Ethiopians, united by a vision to build a cooperative that puts its members first. We leverage technology not as a gimmick, but to deliver exceptional, intuitive service. Sabi is more than just a SACCO; it's a platform for empowerment, built by the community, for the community.",
    },
    am: {
      title: "ለምን ሌላ የኅብረት ስራ ማህበር አስፈለገ? ለምን ሳቢ?",
      subtitle:
        "ፋይናንስ ከህልመኞች፣ ከሰሪዎች፣ ከአዲሱ የኢትዮጵያ ትውልድ ጋር እኩል አልተጓዘም። እኛ ድልድዩን ለመገንባት ወሰንን።",
      // p1: "በኢትዮጵያ ያለው ባህላዊ የፋይናንስ ስርዓት ከእውነታችን የራቀ ሆኖ ተሰማን። ለዘመናዊው ህይወት ፍጥነት፣ ለአዲሱ ትውልድ ትጋት፣ ወይም ለስራ ፈጣሪዎችና ፈጣሪዎች ደፋር ምኞት የተገነባ አልነበረም። ቀልጣፋ፣ ግልጽ እና በስኬታችን ላይ ከልብ መዋዕለ ንዋይ የሚያፈስ የገንዘብ አጋር እንፈልግ ነበር።",/
      p1: "በሀገራችን ያለው ነባር የህብረት ስራ ማህበራት የሚያቀርቡት የፋይናንስ አገልግሎት ከፍላጎታችን ጋር የተስማማ ሆኖ አላገኘነውም። ለዘመናዊው ህይወት ፍጥነት ፣ ለአዲሱ ትውልድ ትጋት እና ህልም የተገነባ ተቋም ገበያ ላይ በበቂ አላገኘንም። ቀልጣፋ ፣ ግልጽ እና በስኬታችን ላይ ከልብ መዋዕለ ንዋይ የሚያፈስ የፋይናንስ አጋር እንፈልግ ነበር። ",
      p2: "ለዚህም ነው ሳቢን የፈጠርነው። እኛ አባሎቹን የሚያስቀድም የኅብረት ስራ ማህበር የመገንባት ራዕይ ይዘን የተሰባሰብን ባለራዕይ ኢትዮጵያውያን ነን። ቴክኖሎጂን ለይስሙላ ሳይሆን ልዩ እና ቀላል አገልግሎት ለመስጠት እንጠቀምበታለን። ሳቢ በአባላቱ የተገነባ፣ ለአባላቱ የቆመ የለውጥ መድረክ ነው።",
    },
  };

  const currentContent = language === "am" ? content.am : content.en;

  return (
    <section id="why-sabi" className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {currentContent.title}
          </h2>
          {/* <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p> */}
        </div>
        <div className="mt-12 text-lg text-muted-foreground space-y-6 text-left md:text-center">
          <p>{currentContent.p1}</p>
          <p>{currentContent.p2}</p>
        </div>
      </div>
    </section>
  );
}
