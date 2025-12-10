import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useViewMode } from '../context/ViewContext';
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiFlask, 
  SiAmazon, SiPostgresql, SiDocker, SiGit, SiTailwindcss,
  SiFirebase, SiGraphql
} from 'react-icons/si';
import type { IconType } from 'react-icons';

interface SkillCategory {
  category: string;
  color: string;
  skills: { name: string; icon: IconType }[];
}

const Skills = () => {
  const { viewMode } = useViewMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      category: "Languages",
      color: "text-editor-keyword",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
      ]
    },
    {
      category: "Frontend",
      color: "text-editor-variable",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "TailwindCSS", icon: SiTailwindcss },
      ]
    },
    {
      category: "Backend & Cloud",
      color: "text-editor-string",
      skills: [
        { name: "Flask", icon: SiFlask },
        { name: "AWS", icon: SiAmazon },
        { name: "Docker", icon: SiDocker },
        { name: "GraphQL", icon: SiGraphql },
      ]
    },
    {
      category: "Database & Tools",
      color: "text-editor-function",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Firebase", icon: SiFirebase },
        { name: "Git", icon: SiGit },
      ]
    }
  ];

  const additionalSkills = ["LangChain", "Langgraph", "RAG", "OpenCV", "Scikit-learn", "PowerBI", "Prisma ORM", "Lambda", "S3", "EC2", "RDS", "Bedrock"];

  return (
    <section id="skills" className={`min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-20 ${
      viewMode === 'simple' ? 'bg-white text-gray-800' : ''
    }`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-2xl">⚡</span>
          <h2 className={`text-3xl md:text-4xl font-bold ${
            viewMode === 'coder' ? 'text-editor-keyword' : 'text-gray-900'
          }`}>
            {viewMode === 'coder' ? 'Skills.ts' : 'Technical Expertise'}
          </h2>
        </div>

        {viewMode === 'coder' ? (
          // Coder View
          <>
            <p className="text-editor-comment mb-8 font-mono">
              // Comprehensive technical skillset and tools
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                  className="bg-editor-sidebar p-6 rounded-lg border border-editor-line"
                >
                  <h3 className={`text-lg font-bold ${category.color} mb-6 font-mono`}>
                    const {category.category.toLowerCase().replace(/ & /g, '_')} = [
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 pl-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-3 group"
                      >
                        <skill.icon className={`${category.color} group-hover:scale-110 transition-transform`} size={24} />
                        <span className="text-gray-300 font-mono group-hover:text-white transition-colors">
                          "{skill.name}",
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div className={`mt-6 text-lg font-bold ${category.color} font-mono`}>];</div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          // Simple View
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <skill.icon className="text-gray-600" size={24} />
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`mt-12 p-8 rounded-xl ${
            viewMode === 'coder' 
              ? 'bg-editor-sidebar border border-editor-line' 
              : 'bg-gray-50'
          }`}
        >
          <h3 className={`text-lg font-bold mb-6 font-mono ${
            viewMode === 'coder' ? 'text-editor-comment' : 'text-gray-600'
          }`}>
            {viewMode === 'coder' ? '// Additional Technologies' : 'More Technologies'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-default ${
                  viewMode === 'coder'
                    ? 'bg-editor-line text-editor-text hover:bg-editor-selection'
                    : 'bg-white text-gray-700 shadow-sm border border-gray-200 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
