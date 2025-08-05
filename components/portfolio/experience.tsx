import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Full Stack Web Developer Intern",
      organization: "RagsOf",
      description:
        "Building StoreKit, a comprehensive SaaS product for store owners and developers. As the solo developer, I'm creating a multi-tenant SaaS platform with customizable dashboards that serves both store owners and developers who can build their front-ends using our platform.",
      technologies: [
        "T3 Stack",
        "Hono",
        "Prisma",
        "Better Auth",
        "AI",
        "Role-based Access Control",
        "Multi-tenant Architecture",
      ],
      type: "work",
    },
    {
      year: "December 2024 - Present",
      title: "Freelance Developer",
      organization: "Self-Employed",
      description:
        "Started freelance career developing role-based SaaS products with comprehensive admin and customer roles. Building scalable solutions for various clients with focus on modern web technologies.",
      technologies: [
        "SaaS Development",
        "Role-based Systems",
        "Full Stack Development",
      ],
      type: "work",
    },
    {
      year: "2022 - 2026",
      title: "Bachelor of Engineering",
      organization: "Dr. K.V. Subba Reddy Institute of Technology",
      description:
        "Currently pursuing Bachelor's degree in Engineering with focus on software development and modern web technologies.",
      type: "education",
    },
    {
      year: "2020 - 2022",
      title: "Intermediate",
      organization: "Sri Chaitanya Inermediate College",
      description:
        "Completed intermediate education with strong foundation in mathematics and sciences, preparing for engineering studies.",
      type: "education",
    },
    {
      year: "2007 - 2020",
      title: "Secondary Education",
      organization: "Sea Rock English Medium High School",
      description:
        "Completed secondary education with comprehensive learning in various subjects and strong English communication skills.",
      type: "education",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
        <p className="text-muted-foreground text-lg">
          My journey through education and professional development
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-start gap-6 md:gap-8"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-8 h-8 rounded-full border-2 border-background flex items-center justify-center ${
                    exp.type === "work" ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0 pb-8">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-muted-foreground mb-3">
                    {exp.organization}
                  </h4>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium bg-muted px-2 py-1 rounded border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center p-6 rounded-lg border bg-card">
          <div className="text-2xl font-bold mb-2">4+</div>
          <div className="text-sm text-muted-foreground">
            Years of Education in Tech
          </div>
        </div>
        <div className="text-center p-6 rounded-lg border bg-card">
          <div className="text-2xl font-bold mb-2">1+</div>
          <div className="text-sm text-muted-foreground">
            Years of Professional Experience
          </div>
        </div>
        <div className="text-center p-6 rounded-lg border bg-card sm:col-span-2 lg:col-span-1">
          <div className="text-2xl font-bold mb-2">SaaS</div>
          <div className="text-sm text-muted-foreground">
            Specialized in SaaS Development
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
