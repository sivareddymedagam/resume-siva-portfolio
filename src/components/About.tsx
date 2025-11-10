import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Target, Code2, Cloud, Database, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: <Calendar className="h-5 w-5" />, label: "Experience", value: "4.5+ Years" },
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "India" },
    { icon: <Award className="h-5 w-5" />, label: "Education", value: "B.Tech in Computer Science" },
    { icon: <Target className="h-5 w-5" />, label: "Status", value: "Open to Opportunities" },
  ];

  const techHighlights = [
    {
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
      title: "Full-Stack Development",
      description:
        "Expert in Java, Spring Boot, C#, ASP.NET, and modern web technologies.",
    },
    {
      icon: <Cloud className="h-6 w-6 text-indigo-600" />,
      title: "Cloud Architecture",
      description:
        "Specialized in Google Cloud Platform (GCP) and AWS cloud solutions.",
    },
    {
      icon: <Database className="h-6 w-6 text-purple-600" />,
      title: "Data Engineering",
      description:
        "Proficient in BigQuery, Spanner, Firestore, and data migration processes.",
    },
    {
      icon: <Zap className="h-6 w-6 text-pink-600" />,
      title: "Microservices",
      description:
        "Experienced in Kubernetes, Apache Beam, and scalable architectures.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-pink-100 to-teal-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-blue-200 dark:to-indigo-400">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Highly motivated and results-driven Software Engineer with 4.5 years of experience in designing,
            developing, maintaining, and deploying scalable and robust cloud-native solutions. 
            Proven expertise in <strong>Java (Spring Boot)</strong>, <strong>GCP</strong>, and <strong>.NET (C#)</strong>, 
            with a strong focus on data migration, real-time data processing (Apache Dataflow/Beam), and 
            microservices architecture (Kubernetes/GKE).
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT SIDE: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Journey */}
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
                  Professional Journey
                </h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    I specialize in designing and deploying cloud-native applications, leveraging modern frameworks 
                    and cloud services to deliver scalable and secure enterprise-grade systems. My experience spans 
                    across <strong>Spring Boot microservices</strong>, <strong>GCP compute and storage solutions</strong>, 
                    and <strong>data engineering pipelines</strong> with Apache Beam and Dataflow.
                  </p>
                  <p>
                    I have worked extensively with <strong>Docker, Kubernetes, Firestore, and BigQuery</strong> to manage 
                    distributed systems and real-time data streams. My focus lies in developing reliable backend systems, 
                    implementing CI/CD workflows, and optimizing API performance.
                  </p>
                  <p>
                    As a collaborative team player, I also integrate AI-powered tools like <strong>GitHub Copilot </strong> 
                    and <strong>Gemini Code Assist</strong> to accelerate development and maintain high code quality.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Core Technical Strengths */}
            <div className="grid md:grid-cols-2 gap-6">
              {techHighlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-lg border-0 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-3">
                      {item.icon}
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-purple-600 dark:text-purple-400">{item.icon}</div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                        <p className="font-semibold text-slate-800 dark:text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="p-6 shadow-lg border-0 bg-white dark:bg-slate-800">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                  Certifications
                </h3>
                <div className="space-y-3">
                  <Badge
                    variant="secondary"
                    className="w-full justify-start p-3 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300"
                  >
                    Google Cloud Certified – Associate Cloud Engineer
                  </Badge>
                
                  <Badge
                    variant="secondary"
                    className="w-full justify-start p-3 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300"
                  >
                    Google Cloud Certified – Professional Cloud Architect
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
