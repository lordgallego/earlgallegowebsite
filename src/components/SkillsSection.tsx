const skills = ["AutoCAD", "Designing", "SketchUp", "Lumion"];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16 text-center">
          Licenses & Skills
        </h2>

        <div className="text-center mb-10">
          <p
            className="text-xs tracking-widest uppercase text-muted-foreground mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Licensure
          </p>
          <h3
            className="text-base font-medium text-foreground"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Registered Architect
          </h3>
        </div>

        <div className="text-center">
          <p
            className="text-xs tracking-widest uppercase text-muted-foreground mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Special Skills
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 text-sm border border-border rounded-full text-foreground/80 transition-colors hover:bg-accent"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
