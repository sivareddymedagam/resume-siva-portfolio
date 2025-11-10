import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/santhi.png";

export const Hero = () => {
  const handleGetInTouch = () => {
    const contactElement = document.querySelector("#contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement("a");
    link.href = "/resume/SanthiPriyaMedagam.pdf"; // Place your resume here: public/resume/
    link.download = "SanthiPriyaMedagam.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Santhi Priya Medagam
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium">
                Software Engineer | Java | Spring Boot | Microservices | GCP
              </h2>
              <div className="flex items-center gap-2 text-slate-500">
                <MapPin size={16} />
                <span>
                  Hyderabad (Hybrid/On-site/Remote) | Remote for Other Locations
                </span>
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Results-driven Software Engineer with 4.5 years of experience in
              designing and deploying scalable cloud-native solutions using
              Java, Spring Boot, GCP, and .NET. Passionate about building
              performant backend systems and seamless user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGetInTouch}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 hover:border-blue-500 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/Santhi612"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} className="text-slate-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/santhi-priya-medagam-253093172/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="mailto:santhimedagam@gmail.com"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} className="text-purple-600" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={profileImage}
                  alt="Santhi Priya Medagam"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
