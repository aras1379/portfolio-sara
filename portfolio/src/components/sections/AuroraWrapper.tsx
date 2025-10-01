
"use client";
import { useState, useEffect } from "react";
import Aurora from "@/components/ui/AuroraBackground";

export default function ClientAuroraWrapper() {
  const [colorStops, setColorStops] = useState<string[]>([]);

  useEffect(() => {
    // This code runs on the client after the component mounts
    if (typeof window !== "undefined") {
      // Get the computed style of the root element (where CSS variables are defined)
      const styles = getComputedStyle(document.documentElement);

      // Read the color variables
      const color1 = styles.getPropertyValue("--aurora-color-1").trim();
      const color2 = styles.getPropertyValue("--aurora-color-2").trim();
      const color3 = styles.getPropertyValue("--aurora-color-3").trim();

      // Set the state with the colors from the current theme
      setColorStops([color1, color2, color3]);
    }
  }, []); // The empty dependency array ensures this runs only once on mount

  // Don't render the Aurora component until the colors have been loaded from CSS
  if (colorStops.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[30]">
      <Aurora
        colorStops={colorStops}
        blend={1.1}
        amplitude={0.1}
        speed={0.5}
      />
    </div>
  );
}