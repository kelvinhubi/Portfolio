import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import Lenis from "lenis";
import { Suspense, useEffect, useState } from "react";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { CustomCursor } from "./CustomCursor";
import { HeroSection } from "./HeroSection";
import { LoadingScreen } from "./LoadingScreen";
import { PortfolioHeader } from "./PortfolioHeader";
import { PortfolioScene } from "./PortfolioScene";
import { ResumeSection } from "./ResumeSection";
import { WorkSection } from "./WorkSection";

function LoadingGate({ onReady }: { onReady: () => void }) {
  const { progress } = useProgress();
  useEffect(() => {
    if (progress >= 100) {
      const timer = window.setTimeout(onReady, 450);
      return () => window.clearTimeout(timer);
    }
  }, [onReady, progress]);
  return progress < 100 ? <LoadingScreen /> : null;
}

export function PortfolioPage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.title = "Kelvin Ryll Fortin / Software Engineer";
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    const reveal = gsap.fromTo(
      ".reveal",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2,
      },
    );
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      reveal.kill();
    };
  }, []);

  useEffect(() => {
    if (ready && document.querySelector(".loading-screen"))
      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => document.body.classList.add("loaded"),
      });
  }, [ready]);

  return (
    <main className="portfolio-shell">
      <div className="canvas-layer" aria-hidden="true">
        <Suspense fallback={<LoadingScreen />}>
          <PortfolioScene />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <LoadingGate onReady={() => setReady(true)} />
      </Suspense>
      <CustomCursor />
      <PortfolioHeader />
      <div className="content-layer">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </main>
  );
}
