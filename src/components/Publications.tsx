import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { useViewMode } from "../context/ViewContext";

const Publications = () => {
  const { viewMode } = useViewMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="publications"
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
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">📝</span>
          <h2
            className={`text-2xl md:text-3xl font-bold ${
              viewMode === "coder" ? "text-editor-string" : "text-gray-900"
            }`}
          >
            {viewMode === "coder" ? "Publications.md" : "Research & Education"}
          </h2>
        </div>

        {viewMode === "coder" && (
          <p className="text-editor-comment mb-8 font-mono">
            # Research & Academic Contributions
          </p>
        )}

        <div className="grid grid-cols-1 gap-8">
          {/* Publication Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`p-8 rounded-lg transition-all ${
              viewMode === "coder"
                ? "bg-editor-sidebar border-2 border-editor-string hover:shadow-lg hover:shadow-orange-500/20"
                : "bg-white border border-gray-200 shadow-md hover:shadow-xl"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎓</div>
              <div className="flex-1">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    viewMode === "coder"
                      ? "text-editor-function"
                      : "text-gray-900"
                  }`}
                >
                  Analysis of Integration of Personalized AI Assistant with
                  Facial Recognition and Voice Representation
                </h3>

                <div
                  className={`flex flex-wrap gap-4 text-sm mb-4 ${
                    viewMode === "coder" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <span
                      className={
                        viewMode === "coder"
                          ? "text-editor-keyword"
                          : "text-blue-600"
                      }
                    >
                      📅
                    </span>{" "}
                    Published: 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <span
                      className={
                        viewMode === "coder"
                          ? "text-editor-keyword"
                          : "text-blue-600"
                      }
                    >
                      📚
                    </span>{" "}
                    IEEE Conference
                  </span>
                  <span className="flex items-center gap-1">
                    <span
                      className={
                        viewMode === "coder"
                          ? "text-editor-keyword"
                          : "text-blue-600"
                      }
                    >
                      👤
                    </span>{" "}
                    Author: Tushar Tugnait
                  </span>
                </div>

                <p
                  className={`mb-6 leading-relaxed ${
                    viewMode === "coder" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  This research paper explores the integration of facial
                  recognition and voice representation technologies in creating
                  a personalized AI assistant. The study demonstrates practical
                  implementation of computer vision and natural language
                  processing to build an intelligent system with biometric
                  authentication and voice-based interaction capabilities.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded transition-colors font-mono text-sm ${
                      viewMode === "coder"
                        ? "bg-editor-keyword hover:bg-blue-600 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                    }`}
                  >
                    <FaFilePdf /> View Paper
                    <FaExternalLinkAlt size={12} />
                  </a>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Computer Vision", "NLP", "Biometric Auth"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs rounded font-mono ${
                            viewMode === "coder"
                              ? "bg-editor-line text-editor-variable"
                              : "bg-gray-100 text-gray-700 border border-gray-200"
                          }`}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4"
          >
            {viewMode === "coder" ? (
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🎓</span>
                <h2 className="text-2xl md:text-3xl font-bold text-editor-keyword">
                  Education.md
                </h2>
              </div>
            ) : (
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Education
              </h3>
            )}

            <div
              className={`p-6 rounded-lg border ${
                viewMode === "coder"
                  ? "bg-editor-sidebar border-editor-line"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h4
                    className={`text-lg font-bold ${
                      viewMode === "coder"
                        ? "text-editor-function"
                        : "text-gray-900"
                    }`}
                  >
                    B.Tech (CSE) with Honours in AI/ML
                  </h4>
                  <p
                    className={
                      viewMode === "coder"
                        ? "text-editor-keyword"
                        : "text-blue-600 font-medium"
                    }
                  >
                    Amity University, Noida
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      viewMode === "coder" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Noida, Uttar Pradesh
                  </p>
                </div>
                <div className="text-right">
                  <div
                    className={`text-2xl font-bold ${
                      viewMode === "coder"
                        ? "text-editor-string"
                        : "text-gray-900"
                    }`}
                  >
                    8.32 CGPA
                  </div>
                  <div
                    className={`text-sm ${
                      viewMode === "coder" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Graduated: 2024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Publications;
