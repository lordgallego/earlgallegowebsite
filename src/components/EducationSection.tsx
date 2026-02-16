const education = [
  {
    degree: "Diploma in Urban and Regional Planning",
    university: "University of the Philippines Visayas",
    year: "2023 — 2025",
    level: "Graduate Studies",
  },
  {
    degree: "Bachelor of Science in Architecture",
    university: "University of San Agustin",
    year: "2014 — 2019",
    level: "College",
  },
  {
    degree: "Secondary Education",
    university: "St. Anthony's College",
    year: "2010 — 2014",
    level: "High School",
  },
  {
    degree: "Elementary Education",
    university: "Delegate Angel Salazar Jr. Memorial School",
    year: "2004 — 2010",
    level: "Elementary",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16 text-center">
          Education
        </h2>

        <div className="space-y-10">
          {education.map((ed) => (
            <div key={ed.degree} className="border-b border-border pb-8 last:border-0">
              <p
                className="text-xs tracking-widest uppercase text-muted-foreground mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {ed.year}
              </p>
              <h3
                className="text-base font-medium text-foreground mb-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {ed.degree}
              </h3>
              <p className="text-sm text-muted-foreground">{ed.university}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
