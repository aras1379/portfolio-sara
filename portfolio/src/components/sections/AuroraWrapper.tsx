
"use client";
import Aurora from "@/components/ui/AuroraBackground";

export default function ClientAuroraWrapper() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[30]">
      <Aurora
        colorStops={["#002c22", "#ffb86a", "#006045"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
  );
}