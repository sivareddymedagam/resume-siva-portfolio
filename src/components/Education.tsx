import { GraduationCap } from "lucide-react";
import { Card } from "./ui/card";
import collegeImage from "@/assets/college.jpeg";
import { CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Calendar, MapPin, Award } from "lucide-react";
import { Badge } from "./ui/badge";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Rajiv Gandhi University of Knowledge and Technologies (IIIT Nuzvid)",
      location: "Nuzvid, Andhra Pradesh, India",
      duration: "2017 - 2021",
      completion: "August 2021",
      logo: "../../src/assets/college.jpg.jpeg",
      description: "Specialized in software engineering, web development, and computer science fundamentals. Built strong foundation in programming languages and software development methodologies.",
      subjects: ["Data Structures", "Software Engineering", "Database Management", "Web Technologies", "Object-Oriented Programming", "Computer Networks", "Operating Systems"]
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Rajiv Gandhi University of Knowledge and Technologies (IIIT Nuzvid)",
      location: "Nuzvid, Andhra Pradesh, India",
      duration: "2015 - 2017",
      completion: "May 2017",
       logo: "../../src/assets/college.jpg.jpeg",
      description: "Completed intermediate education with focus on Mathematics, Physics, and Chemistry (MPC stream).",
      subjects: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "Z.P.P High School",
      location: "Pullalacheruvu, Andhra Pradesh, India",
      duration: "2014 - 2015",
      completion: "March 2015",
      description: "Completed secondary education with strong academic performance across all subjects.",
      // subjects: ["Mathematics", "Science", "Social Studies", "English", "Telugu"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-r from-pink-100 to-teal-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
        <div className="text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent inline-block">
    Education
  </h2>
  <div className="w-20 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
</div>


          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey and qualifications that built the foundation for my career in technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2"></div>

              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex gap-4">
                    {edu.logo && (
                      <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center p-2">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-start gap-2">
                        <GraduationCap className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-purple-600 mb-2">
                        {edu.institution}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="text-slate-600 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.completion && (
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span className="text-green-600 font-medium">Completed: {edu.completion}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-slate-600 mb-6 leading-relaxed">{edu.description}</p>
                  </div>
                  {
                    edu.subjects && <div>
                      <h4 className="text-lg font-semibold mb-4 text-slate-800">Key Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, idx) => (
                          <Badge key={idx} variant="outline" className="px-3 py-1 bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  }

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
