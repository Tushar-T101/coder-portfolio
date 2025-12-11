import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useViewMode } from "../context/ViewContext";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";

const About = () => {
  const { viewMode } = useViewMode();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const aboutCode = `// About.tsx

interface Developer {
  name: string;
  title: string;
  summary: string;
  expertise: string[];
}

const aboutMe: Developer = {
  name: "Tushar Tugnait",
  title: "Full-Stack Software Developer & AI/ML Engineer",
  summary: \`
    Passionate about building scalable, cloud-based AI systems 
    that solve real-world problems. With 2+ years of experience, 
    I've delivered GenAI solutions for Fortune 500 companies 
    including Johnson & Johnson, Air India, and Pfizer.
    
    I specialize in creating no-code/low-code platforms that 
    democratize AI, making it accessible to non-technical users 
    while maintaining enterprise-grade reliability and performance.
  \`,
  expertise: [
    "GenAI & RAG Architectures",
    "Cloud Infrastructure (AWS)",
    "Full-Stack Development",
    "System Design & Scalability",
    "API Development & Integration"
  ]
};

export default aboutMe;`;

  return (
    <SectionWrapper
      id="about"
      className={viewMode === "simple" ? "bg-gray-50" : ""}
    >
      <SectionHeader
        emoji="📄"
        title="About Me"
        fileName="About.tsx"
        coderTextColor="text-editor-function"
      />

      {viewMode === "coder" ? (
        // Coder View
        <div className="bg-editor-sidebar rounded-lg overflow-hidden border border-editor-line">
          <div className="bg-editor-line px-4 py-2 text-xs text-gray-400 flex items-center justify-between">
            <span>TypeScript</span>
            <span>UTF-8</span>
          </div>
          <SyntaxHighlighter
            language="typescript"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              background: "transparent",
              fontSize: "0.9rem",
            }}
            showLineNumbers
            lineNumberStyle={{ color: "#858585", paddingRight: "1rem" }}
          >
            {aboutCode}
          </SyntaxHighlighter>
        </div>
      ) : (
        // Simple View
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Passionate about building scalable, cloud-based AI systems that
              solve real-world problems. With 2+ years of experience, I've
              delivered GenAI solutions for Fortune 500 companies including
              Johnson & Johnson, Air India, and Pfizer.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I specialize in creating no-code/low-code platforms that
              democratize AI, making it accessible to non-technical users while
              maintaining enterprise-grade reliability and performance.
            </p>

            <div className="space-y-3">
              {[
                "GenAI & RAG Architectures",
                "Cloud Infrastructure (AWS)",
                "Full-Stack Development",
                "System Design & Scalability",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Stats
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    2+
                  </div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    100+
                  </div>
                  <div className="text-sm text-gray-500">
                    AI Agents Deployed
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    85%
                  </div>
                  <div className="text-sm text-gray-500">
                    Efficiency Improvement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {viewMode === "coder" && (
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-editor-sidebar p-6 rounded-lg border border-editor-line hover:border-editor-keyword transition-colors">
            <div className="text-3xl font-bold text-editor-keyword">2+</div>
            <div className="text-sm text-gray-400 mt-2">Years Experience</div>
          </div>
          <div className="bg-editor-sidebar p-6 rounded-lg border border-editor-line hover:border-editor-keyword transition-colors">
            <div className="text-3xl font-bold text-editor-string">100+</div>
            <div className="text-sm text-gray-400 mt-2">AI Agents Deployed</div>
          </div>
          <div className="bg-editor-sidebar p-6 rounded-lg border border-editor-line hover:border-editor-keyword transition-colors">
            <div className="text-3xl font-bold text-editor-function">85%</div>
            <div className="text-sm text-gray-400 mt-2">
              Efficiency Improvement
            </div>
          </div>
        </motion.div>
      )}
    </SectionWrapper>
  );
};

export default About;
