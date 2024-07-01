import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import LinksSection from "../components/LinksSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopBar />
      <HeroSection />
      <LinksSection />
    </main>
  );
}