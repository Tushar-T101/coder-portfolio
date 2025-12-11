import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useViewMode } from "../context/ViewContext";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";
import TechBadge from "./common/TechBadge";

const Skills = () => {
  const { viewMode } = useViewMode();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C", "C++"],
      icon: "💻",
      color: "border-blue-500",
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Framer Motion",
        "HTML5",
        "CSS3",
      ],
      icon: "🎨",
      color: "border-purple-500",
    },
    {
      title: "Backend & Cloud",
      skills: [
        "Node.js",
        "Flask",
        "RestAPI",
        "GraphQL",
        "Docker",
        "AWS (Bedrock, S3, Lambda, EC2, RDS)",
        "Firebase",
      ],
      icon: "☁️",
      color: "border-green-500",
    },
    {
      title: "AI & ML",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenAI API",
        "LangChain",
        "RAG",
        "OpenCV",
      ],
      icon: "🤖",
      color: "border-orange-500",
    },
  ];

  return (
    <SectionWrapper
      id="skills"
      className={viewMode === "simple" ? "bg-white" : ""}
    >
      <SectionHeader
        emoji="🛠️"
        title="Technical Skills"
        fileName="Skills.json"
        coderTextColor="text-editor-function"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={inViewRef}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`p-6 rounded-lg transition-all ${
              viewMode === "coder"
                ? `bg-editor-sidebar border ${
                    category.color
                  } hover:shadow-lg hover:shadow-${category.color.replace(
                    "border-",
                    ""
                  )}/20`
                : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3
                className={`text-xl font-bold ${
                  viewMode === "coder" ? "text-editor-string" : "text-gray-900"
                }`}
              >
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <TechBadge key={skill} tech={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
