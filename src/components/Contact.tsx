import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // 🔹 Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Send email via EmailJS
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_xxxxxxx", // 🟢 Your actual EmailJS Service ID
        "template_xxxxxxx", // 🟢 Your actual EmailJS Template ID
        {
          fullname: formData.fullname,
          email: formData.email,
          message: formData.message,
        },
        "Xxxxx_xxxxxxxxx", // 🟢 Your actual EmailJS Public Key
      );
      alert("✅ Message sent successfully!");
      setFormData({ fullname: "", email: "", message: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Email send error:", error);
      alert("❌ Unable to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "santhimedagam@gmail.com",
      href: "mailto:santhimedagam@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9553222470",
      href: "tel:+919553222470",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad (Hybrid/On-site/Remote) | Remote for Other Locations",
      href: "https://goo.gl/maps/xyz", // Replace with actual Google Maps link
      color: "blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/santhi-priya-medagam-253093172/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/Santhi612",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-pink-100 to-teal-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-white/70 backdrop-blur-md border border-slate-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-1">{item.label}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-blue-600 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-500">{item.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="mt-12 p-10 bg-white/80 backdrop-blur-md text-center border border-slate-200 shadow-lg rounded-2xl">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Let's Work Together 🤝</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Feel free to reach out if you want to collaborate, ask a question, or just say hello.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => setShowForm(true)}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </Card>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
            <button
              className="absolute top-3 right-4 text-slate-500 hover:text-red-500 text-2xl"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-center mb-6 text-slate-800">
              Send a Message ✉️
            </h3>
            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-slate-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
