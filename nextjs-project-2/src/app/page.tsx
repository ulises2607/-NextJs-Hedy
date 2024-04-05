import Image from "next/image";
import Hero from "@/components/main/Hero";
import Carousel from "@/components/main/Carousel";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <div className="absolute center ">
        <Carousel />
      </div>
    </main>
  );
}
