import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaAws } from "react-icons/fa";
import { useViewMode } from "../context/ViewContext";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";

const Certifications = () => {
  const { viewMode } = useViewMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certCode = `// Certifications.ts

interface Certification {
  name: string;
  code: string;
  provider: string;
  score: string;
  validTill: string;
  status: "ACTIVE" | "EXPIRED";
}

const certifications: Certification[] = [
  {
    name: "AWS Certified AI Practitioner",
    code: "AIF-C01",
    provider: "Amazon Web Services (AWS)",
    score: "929/1000",
    validTill: "Feb 2029",
    status: "ACTIVE"
  }
];

export default certifications;`;

  return (
    <SectionWrapper
      id="certifications"
      className={viewMode === "simple" ? "bg-gray-50" : ""}
    >
      <SectionHeader
        emoji="🏆"
        title="Certifications"
        fileName="Certifications.ts"
        coderTextColor="text-editor-keyword"
      />

      <div ref={ref}>
        {viewMode === "coder" ? (
          // Coder View
          <>
            <div className="bg-editor-sidebar rounded-lg overflow-hidden border border-editor-line mb-8">
              <div className="bg-editor-line px-4 py-2 text-xs text-gray-400 flex items-center justify-between">
                <span>TypeScript</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  ACTIVE
                </span>
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
                {certCode}
              </SyntaxHighlighter>
            </div>

            {/* Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative overflow-hidden bg-gradient-to-br from-[#232F3E] to-[#131A22] rounded-lg border border-[#FF9900]/30 p-8 hover:border-[#FF9900]/60 transition-all group"
            >
              {/* Animated glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF9900]/10 rounded-full blur-3xl group-hover:bg-[#FF9900]/20 transition-all duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FF9900]/5 rounded-full blur-2xl"></div>

              <div className="relative flex items-start gap-6">
                {/* AWS Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaAws className="text-[#FF9900]" size={36} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold text-white">
                      AWS Certified AI Practitioner
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-mono font-bold bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-mono mb-4">
                    AIF-C01 • Amazon Web Services
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-gray-500 font-mono mb-1">
                        score
                      </div>
                      <div className="text-2xl font-bold text-[#FF9900]">
                        929
                        <span className="text-sm text-gray-500">/1000</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-mono mb-1">
                        percentile
                      </div>
                      <div className="text-2xl font-bold text-[#FF9900]">
                        93%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-mono mb-1">
                        validTill
                      </div>
                      <div className="text-lg font-bold text-gray-300">
                        Feb 2029
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Score bar */}
              <div className="mt-6 relative">
                <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "92.9%" } : {}}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#FF9900] to-[#FFBB00] rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
                  <span>0</span>
                  <span>passing: 700</span>
                  <span>1000</span>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          // Simple View
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
          >
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#FF9900] via-[#FFBB00] to-[#FF9900]"></div>

            <div className="p-8">
              <div className="flex items-start gap-6">
                {/* AWS Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#232F3E] to-[#131A22] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <FaAws className="text-[#FF9900]" size={44} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold text-gray-900">
                      AWS Certified AI Practitioner
                    </h3>
                    <span className="px-3 py-1 text-xs font-bold bg-green-100 text-green-700 rounded-full">
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    AIF-C01 • Amazon Web Services (AWS) • Valid till Feb 2029
                  </p>

                  {/* Score Card */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="flex items-end gap-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Exam Score
                        </div>
                        <div className="text-4xl font-bold text-gray-900">
                          929
                          <span className="text-lg text-gray-400 font-normal">
                            /1000
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: "92.9%" } : {}}
                            transition={{
                              delay: 0.5,
                              duration: 1.2,
                              ease: "easeOut",
                            }}
                            className="h-full bg-gradient-to-r from-[#FF9900] to-[#FFBB00] rounded-full"
                          />
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-400">
                          <span>Passing: 700</span>
                          <span>93rd percentile</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Generative AI",
                      "Foundation Models",
                      "Responsible AI",
                      "AWS Bedrock",
                      "AWS SageMaker",
                      "Prompt Engineering",
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-xs bg-gray-100 text-gray-600 font-medium rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
