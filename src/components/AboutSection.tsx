import { Mail, Phone, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16 text-center">
          About Me
        </h2>

        <div className="space-y-6">
          <p className="text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            A dedicated Registered Architect with a strong background in healthcare facility design, 
            urban and regional planning, and construction project management. Passionate about creating 
            functional, standards-compliant spaces that serve communities.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <a
              href="mailto:earlarian.gallego@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              earlarian.gallego@gmail.com
            </a>
            <a
              href="tel:09950717828"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              09950717828
            </a>
            <span
              className="flex items-center gap-2 text-sm text-muted-foreground"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Calendar className="w-4 h-4" />
              July 18, 1997
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
