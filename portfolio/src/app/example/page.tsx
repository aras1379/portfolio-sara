"use client";
import RollingGallery from "@/components/RollingGallery";

  

export default function CVPage() {
  return (
    <>
      {/* Aurora Background */}
      <div className="relative max-w-9xl mx-auto px-4 py-8 bg-white">
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Välkommen till NBA! 
          </h1>
       
        <RollingGallery autoplay={true} pauseOnHover={true} />


      </div>
      
    </>
  );
}