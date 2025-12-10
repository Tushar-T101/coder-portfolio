import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useViewMode } from "../context/ViewContext";

const Experience = () => {
  const { viewMode } = useViewMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experienceCode = `{
  "workExperience": [
    {
      "company": "Navikenz",
      "role": "Software Developer",
      "period": "Jan 2024 - Present",
      "location": "Remote",
      "achievements": [
        "Integrated Flowise into AMP platform for Johnson & Johnson",
        "Developed NaviFlow: no-code/low-code AI platform",
        "Led technical discussions with J&J, Air India, and Pfizer",
        "Optimized AWS deployment pipelines, reducing costs by 25%",
        "Reduced business solution creation time by 85%"
      ],
      "techStack": ["Python", "Flask", "AWS", "LangChain", "Langgraph", "Lambda"],
      "impact": {
        "efficiency": "+85%",
        "costReduction": "-25%",
        "deliveryImprovement": "+30%"
      }
    },
    {
      "company": "Incubit GBS Pvt. Ltd.",
      "role": "Intern",
      "period": "Nov 2022 - July 2023",
      "location": "Remote",
      "achievements": [
        "Built AirMedz e-commerce platform for Philippines client",
        "Served 5K+ users with 99% uptime",
        "Reduced checkout time by 35% through UI/UX improvements"
      ],
      "techStack": ["JavaScript", "React", "Firebase", "HTML/CSS"],
      "impact": {
        "users": "5000+",
        "uptime": "99%",
        "checkoutImprovement": "-35%"
      }
    }
  ]
}`;

  const experiences = [
    {
      company: "Navikenz",
      role: "Software Developer",
      period: "Jan 2024 - Present",
      achievements: [
        "Integrated Flowise into AMP platform for Johnson & Johnson",
        "Developed NaviFlow: no-code/low-code AI platform",
        "Led technical discussions with J&J, Air India, and Pfizer",
        "Optimized AWS deployment pipelines, reducing costs by 25%",
        "Reduced business solution creation time by 85%",
      ],
      techStack: ["Python", "Flask", "AWS", "LangChain", "Langgraph", "Lambda"],
    },
    {
      company: "Incubit GBS Pvt. Ltd.",
      role: "Intern",
      period: "Nov 2022 - July 2023",
      achievements: [
        "Built AirMedz e-commerce platform for Philippines client",
        "Served 5K+ users with 99% uptime",
        "Reduced checkout time by 35% through UI/UX improvements",
      ],
      techStack: ["JavaScript", "React", "Firebase", "HTML/CSS"],
    },
  ];

  return (
    <section
      id="experience"
      className={`min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-20 ${
        viewMode === "simple" ? "bg-white text-gray-900" : ""
      }`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto"
      >
        {viewMode === "coder" ? (
          // Coder View
          <>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-editor-string text-2xl">📋</span>
              <h2 className="text-2xl md:text-3xl font-bold text-editor-string">
                Experience.json
              </h2>
            </div>

            {/* JSON Code Block */}
            <div className="bg-editor-sidebar rounded-lg overflow-hidden border border-editor-line mb-12">
              <div className="bg-editor-line px-4 py-2 text-xs text-gray-400 flex items-center justify-between">
                <span>JSON</span>
                <span>2 companies • 2+ years</span>
              </div>
              <SyntaxHighlighter
                language="json"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: "1.5rem",
                  background: "transparent",
                  fontSize: "0.85rem",
                }}
                showLineNumbers
                lineNumberStyle={{ color: "#858585", paddingRight: "1rem" }}
              >
                {experienceCode}
              </SyntaxHighlighter>
            </div>

            {/* Visual Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12"
            >
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-32 md:left-40 top-0 bottom-0 w-0.5 bg-editor-keyword opacity-20"></div>

                {/* Timeline Items */}
                <div className="mb-12 relative">
                  {/* Date */}
                  <div className="absolute left-0 w-28 md:w-36 text-right pt-2 pr-4">
                    <span className="text-sm font-mono text-editor-string">
                      Jan 2024 - Present
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-32 md:left-40 -ml-[9px] top-2 w-5 h-5 bg-editor-keyword rounded-full border-4 border-editor-bg z-10"></div>

                  {/* Content */}
                  <div className="ml-40 md:ml-52 bg-editor-sidebar p-6 rounded-lg border border-editor-line hover:border-editor-keyword transition-colors group">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-editor-function group-hover:text-editor-keyword transition-colors">
                          Software Developer
                        </h3>
                        <p className="text-editor-keyword">Navikenz</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Flask", "AWS", "LangChain", "Lambda"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-editor-line text-editor-variable text-xs rounded font-mono"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  {/* Date */}
                  <div className="absolute left-0 w-28 md:w-36 text-right pt-2 pr-4">
                    <span className="text-sm font-mono text-editor-string">
                      Nov 2022 - July 2023
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-32 md:left-40 -ml-[9px] top-2 w-5 h-5 bg-editor-string rounded-full border-4 border-editor-bg z-10"></div>

                  {/* Content */}
                  <div className="ml-40 md:ml-52 bg-editor-sidebar p-6 rounded-lg border border-editor-line hover:border-editor-string transition-colors group">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-editor-function group-hover:text-editor-string transition-colors">
                          Intern
                        </h3>
                        <p className="text-editor-string">
                          Incubit GBS Pvt. Ltd.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "Firebase", "HTML/CSS"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-editor-line text-editor-variable text-xs rounded font-mono"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          // Simple View
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Work Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-200"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>

                  <div className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <span className="text-blue-600 font-medium">
                      {exp.company}
                    </span>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 leading-relaxed flex items-start gap-2"
                      >
                        <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Experience;
