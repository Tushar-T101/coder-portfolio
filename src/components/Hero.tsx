import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { useViewMode } from "../context/ViewContext";
import SectionWrapper from "./common/SectionWrapper";

const Hero = () => {
  const { viewMode } = useViewMode();
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `const developer = {
  name: "Tushar Tugnait",
  role: "Full-Stack Developer | AI/ML Engineer",
  location: "Noida, India",
  experience: "2+ years",
  specialization: ["GenAI", "Cloud Architecture", "Scalable Systems"],
  impact: {
    efficiency: "+85%",
    costReduction: "-25%",
    automation: "80%"
  }
};`;

  useEffect(() => {
    if (viewMode === "coder") {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [viewMode]);

  return (
    <SectionWrapper
      id="hero"
      className={viewMode === "simple" ? "bg-white text-gray-900" : ""}
    >
      {viewMode === "coder" ? (
        // Coder View
        <div className="flex">
          <div className="text-gray-600 text-right pr-4 select-none font-mono text-sm">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="leading-7">
                {i + 1}
              </div>
            ))}
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm md:text-base overflow-x-auto"
            >
              <pre className="text-editor-text leading-7">
                <code>
                  {displayedText}
                  <span className="animate-cursor-blink">|</span>
                </code>
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/Tushar-T101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-editor-line hover:bg-editor-selection text-editor-text rounded transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-tugnait"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-editor-line hover:bg-editor-selection text-editor-text rounded transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="mailto:tushar.tugnait02@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-editor-line hover:bg-editor-selection text-editor-text rounded transition-colors"
              >
                <FaEnvelope /> Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-editor-keyword" />
                <span>Noida, India</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-editor-keyword" />
                <span>+91 9910529707</span>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        // Simple View
        <div className="flex flex-col justify-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Tushar Tugnait
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              Full-Stack Developer & AI Engineer
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
              I build scalable, cloud-based AI systems and enterprise solutions.
              Specializing in Generative AI, Cloud Architecture, and creating
              tools that bridge the gap between complex technology and user
              needs.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-white text-gray-800 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all"
              >
                View Work
              </a>
            </div>

            <div className="flex gap-6 text-gray-500">
              <a
                href="https://github.com/Tushar-T101"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-tugnait"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:tushar.tugnait02@gmail.com"
                className="hover:text-red-500 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Hero;
