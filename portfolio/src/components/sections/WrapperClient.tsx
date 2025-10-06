"use client";
import { useState, useEffect } from "react";
import FlowingGradient from "@/components/ui/Wrapper";

export default function ClientGradientWrapper() {
  const [colorStops, setColorStops] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const styles = getComputedStyle(document.documentElement);
      const color1 = styles.getPropertyValue("--aurora-color-1").trim();
      const color2 = styles.getPropertyValue("--aurora-color-2").trim();
      const color3 = styles.getPropertyValue("--aurora-color-3").trim();
      setColorStops([color1, color2, color3]);
    }
  }, []);

  if (colorStops.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[30]">
      <FlowingGradient
        colorStops={colorStops}
        speed={1.5}
        blur={80}
        opacity={0.6}
        waveHeight={0.6}
      />
    </div>
  );
}