import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { PolkaDotBackground } from "./components/PolkaDotBackground";
import { Navigation } from "./components/Navigation";
import { CustomCursor } from "./components/CustomCursor";
import { FloatingStars } from "./components/FloatingStars";
import { CaseStudy } from "./components/CaseStudy";
import { useState } from "react";

export default function App() {
  const [currentCaseStudy, setCurrentCaseStudy] = useState<number | null>(null);

  if (currentCaseStudy !== null) {
    return (
      <div className="relative min-h-screen bg-white cursor-none">
        <CustomCursor />
        <PolkaDotBackground />
        <FloatingStars />
        <CaseStudy caseStudyId={currentCaseStudy} onBack={() => setCurrentCaseStudy(null)} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white cursor-none">
      <CustomCursor />
      <PolkaDotBackground />
      <FloatingStars />
      <Navigation />
      <div className="relative z-10">
        <Hero onViewCaseStudy={() => setCurrentCaseStudy(1)} />
        <Projects
          onProjectClick={(projectId: number) => setCurrentCaseStudy(projectId)}
        />
        <About />
        <Contact />
        {/* Footer */}
        <footer className="pt-16 px-6 text-center border-t border-black/10 mb-96">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm text-black/50">
              © 2025 Paula Romero • Designed & built with care :D
            </p>
          </div>
        </footer>
        <div style={{ height: '75' }}></div>
      </div>
    </div>
  );
}