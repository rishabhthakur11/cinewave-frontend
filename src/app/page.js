import OptionBar from "@/components/OptionBar";
import NavBar from "../components/NavBar";
import { CarouselDemo } from "@/components/CarouselDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <OptionBar />
      <div className="bg-[#EBEBEB] p-3">
        <CarouselDemo />
      </div>
    </main>
  );
}
