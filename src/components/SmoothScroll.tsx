import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Create context for Lenis instance
const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    // Integrate with GSAP ticker for smooth updates
    const tick = (time: number) => {
      lenisInstance.raf(time * 1000);
    };
    gsap.ticker.add(tick);

    gsap.ticker.lagSmoothing(0);

    // Lazy-loaded images change page height after ScrollTrigger has measured,
    // so recalculate trigger positions once they arrive (debounced)
    let refreshTimeout: ReturnType<typeof setTimeout> | undefined;
    const handleImageLoad = (e: Event) => {
      if (!(e.target instanceof HTMLImageElement)) return;
      clearTimeout(refreshTimeout);
      refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 200);
    };
    document.addEventListener("load", handleImageLoad, true);

    return () => {
      gsap.ticker.remove(tick);
      document.removeEventListener("load", handleImageLoad, true);
      clearTimeout(refreshTimeout);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export { LenisContext };
