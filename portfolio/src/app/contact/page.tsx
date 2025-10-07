// CONTACT PAGE
import ClientGradientWrapper from "@/components/sections/WrapperClient";

export default async function ContactPage() {
  return (
    <div className="bg-background text-foreground relative">
      <div className="fixed inset-0 z-[5]">
        <ClientGradientWrapper />
      </div>

      <div className="relative z-[10]">
        <header className="text-center mb-10 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-1">
            Contact Me
          </h1>
        </header>
      </div>
    </div>
  );
}
