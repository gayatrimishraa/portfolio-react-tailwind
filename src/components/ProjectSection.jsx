import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sanjeevni",
    letter: "S",
    gradient: "from-emerald-500 to-teal-600",
    description:
      "A personal healthcare management app that helps users maintain digital health records, track prescriptions, and schedule doctor appointments through a secure and user-friendly interface.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    github_url: "https://github.com/gayatrimishraa/Sanjeevni",
  },
  {
    id: 2,
    title: "NEXEL",
    letter: "N",
    gradient: "from-blue-500 to-indigo-600",
    description:
      "A cloud deployment platform that automates how applications are built, deployed, and monitored. Features an AI-driven diagnostics engine analyzing CloudWatch logs and a cost prediction system to optimize cloud spend.",
    tags: ["React", "TypeScript", "Node.js", "AWS ECS", "Fargate", "PostgreSQL", "Docker", "CloudWatch"],
    github_url: "https://github.com/gayatrimishraa/nexel",
  },
  {
    id: 3,
    title: "RTaaS",
    letter: "R",
    gradient: "from-rose-500 to-red-600",
    description:
      "A cloud-native platform for simulating real-world cyberattacks in a secure, isolated AWS environment. Replicates OWASP Top 10 vulnerabilities with serverless reporting and real-time security insights via WebSockets.",
    tags: ["Python", "Flask", "React", "AWS (EC2, Lambda, S3, VPC)", "Docker", "WebSockets"],
    github_url: "https://github.com/gayatrimishraa/rtaas",
  },
];

export const ProjectSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take a glimpse into some of my latest creations—where code meets
          creativity and ideas turn into intelligent solutions.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Letter-based placeholder */}
              <div
                className={`h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
              >
                <span className="text-7xl font-bold text-white/90 select-none drop-shadow-lg">
                  {project.letter}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center pt-2 border-t border-border">
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/gayatrimishraa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
