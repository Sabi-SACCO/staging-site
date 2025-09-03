import { Leaf } from "lucide-react";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-2xl font-black text-primary transition-transform duration-300 hover:scale-105">
      {/* <Leaf className="h-8 w-8" /> */}
      <Image
        src={"/logo.svg"}
        alt={"Sabi Logo"}
        className="h-12 w-12"
        width={64}
        height={64}
      />
      <span>Sabi</span>
    </div>
  );
}
