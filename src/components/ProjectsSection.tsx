import { useEffect, useRef, useState } from "react";
import ProjectGallery from "./ProjectGallery";

interface Project {
  title: string;
  description: string;
  cover: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Proposed Tourism Infrastructures — Banate, Iloilo",
    description:
      "Proposed tourism infrastructure developments for the Municipality of Banate, Iloilo — including an esplanade, eco-tourism facilities, a tourist simulation center, and gateway structures designed to enhance the town's cultural and natural heritage.",
    cover: "/projects/banate-proposals/pers-1.jpg",
    images: [
      "/projects/banate-proposals/pers-1.jpg",
      "/projects/banate-proposals/pers-2.jpg",
      "/projects/banate-proposals/pers-3.jpg",
      "/projects/banate-proposals/sim-1.jpg",
      "/projects/banate-proposals/sim-2.jpg",
      "/projects/banate-proposals/sim-3.jpg",
      "/projects/banate-proposals/sim-4.jpg",
      "/projects/banate-proposals/sim-5.jpg",
      "/projects/banate-proposals/eco1.jpg",
      "/projects/banate-proposals/eco2.jpg",
      "/projects/banate-proposals/eco3.jpg",
      "/projects/banate-proposals/eco4.jpg",
      "/projects/banate-proposals/tour1.jpg",
      "/projects/banate-proposals/tour2.jpg",
      "/projects/banate-proposals/tour3.jpg",
      "/projects/banate-proposals/tour4.jpg",
      "/projects/banate-proposals/tour5.jpg",
      "/projects/banate-proposals/gs1.jpg",
      "/projects/banate-proposals/gs2.jpg",
      "/projects/banate-proposals/gs3.jpg",
      "/projects/banate-proposals/gs4.jpg",
      "/projects/banate-proposals/gs5.jpg",
      "/projects/banate-proposals/esp1.jpg",
      "/projects/banate-proposals/esp2.jpg",
      "/projects/banate-proposals/esp3.jpg",
      "/projects/banate-proposals/esp4.jpg",
      "/projects/banate-proposals/esp5.jpg",
      "/projects/banate-proposals/esp6.jpg",
      "/projects/banate-proposals/esp7.jpg",
      "/projects/banate-proposals/esp8.jpg",
      "/projects/banate-proposals/esp9.jpg",
      "/projects/banate-proposals/esp10.jpg",
      "/projects/banate-proposals/int-1.jpg",
    ],
  },
  {
    title: "Dental Clinic — ASMGH",
    description:
      "Interior design for the dental clinic at Angel Salazar Memorial General Hospital, featuring a modern waiting area and treatment spaces focused on patient comfort.",
    cover: "/projects/dental-clinic/dental-1.jpg",
    images: [
      "/projects/dental-clinic/dental-1.jpg",
      "/projects/dental-clinic/waiting-area.jpg",
      "/projects/dental-clinic/ftyguhk.png",
      "/projects/dental-clinic/ghjkl.png",
    ],
  },
  {
    title: "Proposed 10-Storey Hospital — ASMGH",
    description:
      "Proposed ten-storey hospital expansion for Angel Salazar Memorial General Hospital, designed to meet DOH standards while maximizing functional space and patient flow.",
    cover: "/projects/proposed-10-storey-hospital/2.jpg",
    images: [
      "/projects/proposed-10-storey-hospital/2.jpg",
      "/projects/proposed-10-storey-hospital/3.jpg",
      "/projects/proposed-10-storey-hospital/4.jpg",
      "/projects/proposed-10-storey-hospital/5.jpg",
      "/projects/proposed-10-storey-hospital/6.jpg",
      "/projects/proposed-10-storey-hospital/8.jpg",
      "/projects/proposed-10-storey-hospital/9.jpg",
      "/projects/proposed-10-storey-hospital/13.jpg",
      "/projects/proposed-10-storey-hospital/14.jpg",
    ],
  },
  {
    title: "G Residence",
    description:
      "A residential project blending contemporary design with warm, livable interiors.",
    cover: "/projects/g-residence/itsnew.jpg",
    images: [
      "/projects/g-residence/itsnew.jpg",
      "/projects/g-residence/interior.jpg",
      "/projects/g-residence/interior-2.jpg",
      "/projects/g-residence/int-3.jpg",
    ],
  },
  {
    title: "M Residence",
    description:
      "A modern residential design emphasizing clean exterior forms and comfortable interior spaces.",
    cover: "/projects/m-residence/ext-1.jpg",
    images: [
      "/projects/m-residence/ext-1.jpg",
      "/projects/m-residence/ext-2.jpg",
      "/projects/m-residence/int-pers.jpg",
      "/projects/m-residence/int-2.jpg",
    ],
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => e.preventDefault();
    el.addEventListener("contextmenu", handler);
    return () => el.removeEventListener("contextmenu", handler);
  }, []);

  const openGallery = (project: Project) => {
    setActiveProject(project);
    setGalleryOpen(true);
  };

  return (
    <>
      <section id="projects" ref={sectionRef} className="py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16 text-center">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group cursor-pointer"
                onClick={() => openGallery(p)}
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-muted mb-4">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                    style={{ WebkitUserDrag: "none" } as React.CSSProperties}
                  />
                  <div className="absolute inset-0" />
                  {/* Photo count badge */}
                  <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm text-xs px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.images.length} photos
                  </div>
                </div>
                <h3
                  className="text-sm font-medium tracking-wide uppercase text-foreground mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectGallery
          open={galleryOpen}
          onOpenChange={setGalleryOpen}
          title={activeProject.title}
          description={activeProject.description}
          images={activeProject.images}
        />
      )}
    </>
  );
};

export default ProjectsSection;
