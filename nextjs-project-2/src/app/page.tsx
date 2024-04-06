import Image from "next/image";
import Hero from "@/components/main/Hero";
import Carousel from "@/components/main/Carousel";
import ImageList from "@/components/ImageList";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <div className="absolute bg-white h-[800px] w-[80%] right-[10%] top-[10%]">
        <ImageList />
      </div>
    </main>
  );
}
