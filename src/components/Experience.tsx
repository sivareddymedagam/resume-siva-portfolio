import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Experience = () => {
  const projects = [
    {
      title: "I-9 HQ Migration Tooling",
      company: "Sails Software Solutions Pvt Ltd",
      period: "May 2021 - Present",
      logo: "/images/sails.jpg",
      description:
        "Engineered a two-iteration microservice solution to streamline data migration from legacy systems to I-9 HQ cloud platform.",
      highlights: [
        "Enhanced efficiency by integrating Apache Dataflow (Beam) jobs",
        "Implemented Pub/Sub for file receipt processing",
        "Developed complex Dataflow logic for Big Query data processing",
      ],
      technologies: ["Java", "Spring Boot", "Apache Beam", "GCS", "Big Query", "Firestore", "Spanner"],
    },
    {
      title: "I-9 HQ (Headquarters)",
      company: "Sails Software Solutions Pvt Ltd",
      logo: "/images/sails.jpg",
      description:
        "Core cloud platform for I-9 form compliance, ensuring companies adhere to federal employee eligibility regulations.",
      highlights: [
        "Developed multiple Java microservices APIs for critical features",
        "Utilized NoSQL (Firestore) and Spanner databases for data persistence",
        "Implemented comprehensive JUnit tests with Mockito",
        "Monitored system health using Datadog platform",
      ],
      technologies: ["Java", "Spring Boot", "JUnit", "Mockito", "Firestore", "Spanner", "Kubernetes"],
    },
    {
      title: "Simplifi-9 Migration Tooling",
      company: "Sails Software Solutions Pvt Ltd",
      logo: "/images/sails.jpg",
      description:
        "AWS and Azure-focused migration tooling for legacy system data migration.",
      highlights: [
        "Developed .NET (C#) microservices for data migration",
        "Implemented data validation and transformation logic",
        "Worked with AWS S3 and Azure cloud services",
      ],
      technologies: ["C#", "ASP.NET", "AWS S3", "Azure", "MSSQL"],
    },
  ];

  return (
    <section
  id="Experience"
  className="py-20 bg-gradient-to-r from-pink-100 to-teal-100"
>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="">Experience</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-lg bg-white shadow-card ring-1 ring-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {project.logo ? (
                    <img src={project.logo} alt={`${project.company} logo`} className="w-12 h-12 object-contain" />
                  ) : (
                    <Briefcase className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.company}</p>
                    </div>
                    {project.period && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        {project.period}
                      </div>
                    )}
                  </div>

                  <p className="text-card-foreground mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-card-foreground mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
