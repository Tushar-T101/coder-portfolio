import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useViewMode } from "../context/ViewContext";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";
import TechBadge from "./common/TechBadge";

const Projects = () => {
  const { viewMode } = useViewMode();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "NaviFlow",
      company: "Navikenz",
      description:
        "No-code/low-code AI platform simplifying GenAI for businesses",
      impact: [
        "Reduced solution creation time by 85%",
        "Enterprise-grade reliability",
        "Democratized AI usage",
      ],
      techStack: ["Python", "Flask", "React", "LangChain", "AWS"],
      icon: "🤖",
      color: "border-blue-500",
    },
    {
      title: "Flowise Integration",
      company: "Johnson & Johnson",
      description: "Integrated Visual LLM builder into enterprise AMP platform",
      impact: [
        "Enabled rapid prototyping",
        "Streamlined AI workflows",
        "Enhanced team productivity",
      ],
      techStack: ["Node.js", "React", "Flowise", "Docker"],
      icon: "🔄",
      color: "border-green-500",
    },
    {
      title: "Sales Coach Agent",
      company: "Pfizer",
      description: "AI-powered voice agent for sales training and feedback",
      impact: [
        "Real-time feedback loop",
        "Improved sales pitch quality",
        "Automated scoring system",
      ],
      techStack: ["Python", "OpenAI", "FastAPI", "React"],
      icon: "🎙️",
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
    <SectionWrapper
      id="projects"
      className={viewMode === "simple" ? "bg-gray-50 text-gray-900" : ""}
    >
      <SectionHeader
        emoji="💼"
        title="Featured Projects"
        fileName="Projects.tsx"
        description="Showcasing impactful projects with measurable results"
        coderTextColor="text-editor-variable"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={inViewRef}>
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
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{project.icon}</span>
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      viewMode === "coder"
                        ? "text-editor-function"
                        : "text-gray-900"
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

            <p
              className={`mb-6 ${
                viewMode === "coder" ? "text-editor-string" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>

            <div className="mb-6 space-y-2">
              {project.impact.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                      viewMode === "coder" ? "bg-editor-keyword" : "bg-blue-500"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      viewMode === "coder" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
