import lightMode1 from "@/assets/light-mode-1.jpg";
import lightMode2 from "@/assets/light-mode-2.jpg";
import darkMode1 from "@/assets/dark-mode-1.jpg";
import darkMode2 from "@/assets/dark-mode-2.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Photo with theme-aware cross-fade */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden group">
          {/* Light Mode Image Set */}
          <div className="absolute inset-0 block dark:hidden">
            <img
              src={lightMode1}
              alt="Earl Adrian Gallego — Light Portrait"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
              draggable={false}
            />
            <img
              src={lightMode2}
              alt="Earl Adrian Gallego — Light Alternate"
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
              draggable={false}
            />
          </div>

          {/* Dark Mode Image Set */}
          <div className="absolute inset-0 hidden dark:block">
            <img
              src={darkMode1}
              alt="Earl Adrian Gallego — Dark Portrait"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
              draggable={false}
            />
            <img
              src={darkMode2}
              alt="Earl Adrian Gallego — Dark Alternate"
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
              draggable={false}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-foreground">
            Earl Adrian Gallano Gallego
          </h1>
          <p
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Registered Architect
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed italic">
            Designing spaces that elevate the human experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
