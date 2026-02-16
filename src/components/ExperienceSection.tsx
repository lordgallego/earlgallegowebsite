const experiences = [
  {
    role: "Architect 1",
    firm: "Angel Salazar Memorial General Hospital",
    period: "July 2022 — Present",
    details: [
      "Designing proposed structures and assessing floor plans against DOH standards",
      "Performing field inspections and processing engineering applications",
      "Updating site development plans",
      "Key projects: Dental Clinic, Triage, Molecular Laboratory Extension, Engineering & Maintenance Office, Waste Storage Facility, MRI/Radiology Rooms",
    ],
  },
  {
    role: "Architectural Aide",
    firm: "Provincial Health Office — Hospital Facility Enhancement Program",
    period: "Jan 2021 — Dec 2021",
    details: [
      "Preparing computer-aided architecture and engineering designs",
      "Analyzing construction problems and monitoring ongoing hospital constructions in Antique",
      "Planning site development for healthcare facilities",
    ],
  },
  {
    role: "Intern Architect",
    firm: "Eco Esperidion Construction",
    period: "Mar 2020 — Aug 2020",
    details: [
      "Designed two-story residential house and church extension",
      "Designed Barangay Health Center and multi-story apartment",
    ],
  },
  {
    role: "Intern Architect",
    firm: "Phil. Macro Development Corporation",
    period: "Aug 2019 — Jan 2020",
    details: [
      "Revised structural details and performed architectural estimates for proposed condominium",
      "Edited pre-cast wall details",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16 text-center">
          Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 pl-8 sm:pl-14">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute -left-8 sm:-left-14 top-1.5 w-2 h-2 rounded-full bg-foreground/30" />
                <p
                  className="text-xs tracking-widest uppercase text-muted-foreground mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {exp.period}
                </p>
                <h3
                  className="text-base font-medium text-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{exp.firm}</p>
                <ul className="space-y-1">
                  {exp.details.map((detail, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-muted-foreground"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
