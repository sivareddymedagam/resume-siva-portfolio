import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Target, Code2, Cloud, Database, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: <Calendar className="h-5 w-5" />, label: "Experience", value: "Fresher" },
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "India" },
    { icon: <Award className="h-5 w-5" />, label: "Education", value: "B.Tech in Computer Science" },
    { icon: <Target className="h-5 w-5" />, label: "Status", value: "Open to Work" },
  ];

  const techHighlights = [
    {
      icon: <Cloud className="h-6 w-6 text-indigo-600" />,
      title: "Current Focus",
      description:
        <p>- Building scalable React.js Applications <br />
        - Node.js development and optimization <br />
        - Responsive UI/UX with Tailwind CSS
        </p>
    },
    {
      icon: <Database className="h-6 w-6 text-purple-600" />,
      title: "Career Goals",
      description:
        <p>- Frontend development excellence<br />
        - Full-stack development transition<br />
        - Team Collaboration and Leadership <br />
        - Open Source Contribution
        </p>
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
            Highly motivated and detail-oriented Software Engineer with hands-on experience in building machine learning models, IoT-based systems, and full-stack web applications
             Strong foundation in Java (Core + Spring Boot),  JavaScript, and modern frameworks like React, Node.js, Express.js, Tailwind CSS, and Scikit-Learn
              Skilled in working with MySQL, MongoDB, REST APIs, and implementing efficient, user-focused solutions
             Passionate about learning new technologies and contributing to impactful, real-world projects as a full-stack or software developer.
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
                    I specialize in building practical, user-focused applications through hands-on experience in machine learning, IoT development, and full-stack web applications. My project work includes developing predictive ML models using Scikit-Learn, creating IoT-based accessibility systems with ESP32-CAM, and building responsive web interfaces using<strong> React, Node.js, and Tailwind CSS.</strong>
                  </p>
                  <p>
                   Recently, I developed<strong> Crop-Connect</strong>, a platform designed to help farmers easily sell crops, book workers, and rent tractors, enabling digital access to essential farming services. This project strengthened my skills in API development, frontend frameworks, and database management.
                  </p>
                  <p>
                   I work confidently with technologies such as <strong>Java (Core), React, Node.js, Express.js, MySQL, and MongoDB</strong>, focusing on writing clean code, improving user experience, and solving real-world problems through technology.
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
                    <p >
                       Oracle - Certified Generative AI Professional
                    </p>
                  </Badge>
                  
                  <Badge
                    variant="secondary"
                    className="w-full justify-start p-3 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300"
                  >
                    <a href ="https://www.mindluster.com/student/certificate/17309145680" target="_blank" rel="noopener noreferrer">
                      AWS Certified Developer
                    </a>
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="w-full justify-start p-3 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300"
                  >
                    <a href ="https://www.credly.com/badges/90a627b8-e2a2-4633-a070-0d631d8545e6/public_url" target="_blank" rel="noopener noreferrer">
                      Data Analytics Essentials
                    </a>
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
