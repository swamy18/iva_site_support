import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ChatInterface } from "@/components/chat-interface";
import { PrivacySection } from "@/components/privacy-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  useEffect(() => {
    console.log("Home component mounted");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Features />
        <ChatInterface />
        <PrivacySection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}