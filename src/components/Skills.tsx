import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "C#", "SQL", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Frameworks",
      skills: ["Spring Boot", "ASP.NET", "Apache Beam"],
    },
    {
      category: "Databases",
      skills: ["Big Query", "Firestore", "Spanner", "MSSQL", "Elastic Search"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["Google Cloud Platform (GCP)", "AWS S3", "Kubernetes (GKE)"],
    },
    {
      category: "AI & Dev Tools",
      skills: ["GitHub Copilot", "Gemini Code Assist"],
    },
    {
      category: "Monitoring & Logging",
      skills: ["Datadog", "Looker Studio"],
    },
    {
      category: "CI/CD & Version Control",
      skills: ["GitLab", "Jenkins", "Git"],
    },
    {
      category: "Other Tools",
      skills: ["Postman", "Bruno", "JIRA", "Confluence"],
    },
  ];

  return (
    <section
  id="skills"
  className="py-20 bg-gradient-to-r from-pink-100 to-teal-100">

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth"
            >
              <h3 className="text-xl font-bold mb-4 text-card-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className="gradient-primary text-primary-foreground px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
