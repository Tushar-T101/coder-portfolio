import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useViewMode } from "../context/ViewContext";

interface Project {
  title: string;
  company: string;
  description: string;
  impact: string[];
  techStack: string[];
  icon: string;
  color: string;
}

const Projects = () => {
  const { viewMode } = useViewMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: "NaviFlow",
      company: "@Navikenz",
      description:
        "No-code/low-code AI platform enabling non-technical users to build AI agents with drag-and-drop tools",
      impact: [
        "100+ AI agents deployed",
        "85% reduction in solution creation time",
        "99.5% reliability",
      ],
      techStack: ["Python", "Flask", "LangChain", "AWS", "Docker"],
      icon: "🤖",
      color: "border-blue-500",
    },
    {
      title: "NectarBot",
      company: "@Navikenz",
      description:
        "RAG-based system on Amazon Bedrock for document processing, summarization, and sentiment analysis",
      impact: [
        "10K+ documents/day processed",
        "70% productivity boost",
        "Real-time analysis",
      ],
      techStack: ["Python", "AWS S3", "Bedrock", "Git"],
      icon: "📚",
      color: "border-purple-500",
    },
    {
      title: "J.A.R.V.I.S. AI Assistant",
      company: "Personal Project",
      description:
        "Voice-based AI assistant with facial authentication and OpenAI-powered responses",
      impact: [
        "<2s latency",
        "Facial recognition auth",
        "Published in IEEE 2024",
      ],
      techStack: ["Python", "OpenAI API", "CV2", "SpeechRecognition"],
      icon: "🎤",
      color: "border-green-500",
    },
    {
      title: "Football Video Analysis",
      company: "Personal Project",
      description:
        "System to analyze football match videos using OpenCV and clustering algorithms for tactical insights",
      impact: [
        "Real-time visualizations",
        "Tactical insights",
        "Coach decision support",
      ],
      techStack: ["Python", "OpenCV", "Scikit-learn"],
      icon: "⚽",
      color: "border-orange-500",
    },
    {
      title: "Portfolio Website",
      company: "Personal Project",
      description:
        "Interactive developer portfolio with dual-theme system (VS Code & Professional) and AI-powered content generation",
      impact: [
        "Dual-theme architecture",
        "Real-time view switching",
        "Responsive design",
      ],
      techStack: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      icon: "⚡",
      color: "border-yellow-500/50",
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-20 ${
        viewMode === "simple" ? "bg-gray-50 text-gray-900" : ""
      }`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-editor-variable text-2xl">💼</span>
          <h2
            className={`text-2xl md:text-3xl font-bold ${
              viewMode === "coder" ? "text-editor-variable" : "text-gray-900"
            }`}
          >
            {viewMode === "coder" ? "Projects.tsx" : "Featured Projects"}
          </h2>
        </div>

        {viewMode === "coder" && (
          <p className="text-editor-comment mb-8 font-mono">
            // Showcasing impactful projects with measurable results
          </p>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 rounded-lg transition-all group ${
                viewMode === "coder"
                  ? `bg-editor-sidebar border ${
                      project.color
                    } hover:shadow-lg hover:shadow-${project.color.replace(
                      "/50",
                      ""
                    )}/20`
                  : "bg-white shadow-md hover:shadow-xl border border-gray-100"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        viewMode === "coder"
                          ? "text-editor-function group-hover:text-editor-keyword"
                          : "text-gray-900 group-hover:text-blue-600"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        viewMode === "coder"
                          ? "text-editor-comment"
                          : "text-gray-500"
                      }`}
                    >
                      {project.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p
                className={`text-sm mb-4 ${
                  viewMode === "coder" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              {/* Impact */}
              <div className="mb-4 space-y-1">
                {project.impact.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span
                      className={
                        viewMode === "coder"
                          ? "text-editor-keyword"
                          : "text-green-500"
                      }
                    >
                      ✓
                    </span>
                    <span
                      className={
                        viewMode === "coder" ? "text-gray-400" : "text-gray-600"
                      }
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs rounded font-mono ${
                      viewMode === "coder"
                        ? "bg-editor-line text-editor-variable"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Tushar-T101"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-mono ${
              viewMode === "coder"
                ? "bg-editor-keyword hover:bg-blue-600 text-white"
                : "bg-gray-900 hover:bg-gray-800 text-white shadow-lg"
            }`}
          >
            <FaGithub size={20} />
            View More on GitHub
            <FaExternalLinkAlt size={14} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
