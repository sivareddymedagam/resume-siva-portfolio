import { GraduationCap } from "lucide-react";
import { Card } from "./ui/card";
import collegeImage from "@/assets/college.jpeg";

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Rajiv Gandhi University of Knowledge and Technologies (IIIT Nuzvid)",
      year: "2021",
      image: collegeImage,
    },
    {
      degree: "Intermediate",
      institution: "Rajiv Gandhi University of Knowledge and Technologies (IIIT Nuzvid)",
      year: "2017",
      image: collegeImage,
    },
    {
      degree: "SSC",
      institution: "Z.P.P High School Pullalacheruvu",
      year: "2015",
    },
  ];

  return (
    <section id="education" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationList.map((edu, index) => (
            <Card
              key={index}
              className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {edu.image && (
                  <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden shadow-card">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-full object-cover animate-float"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-sm gradient-primary bg-clip-text text-transparent font-semibold">
                        {edu.year}
                      </p>
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

export default Education;
