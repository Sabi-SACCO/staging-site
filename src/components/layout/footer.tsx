"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Facebook className="h-6 w-6" />,
      href: "https://web.facebook.com/sabisacco/",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/company/sabi-sacco",
    },
    { icon: <Twitter className="h-6 w-6" />, href: "https://x.com/sabi_sacco" },
    { icon: <Instagram className="h-6 w-6" />, href: "#" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Logo />
          </div>
          <p className="text-sm text-muted-foreground order-last md:order-none mt-4 md:mt-0">
            &copy; {currentYear} {translations.footerRights}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="__blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
