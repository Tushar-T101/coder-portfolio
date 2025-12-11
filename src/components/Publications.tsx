import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { useViewMode } from "../context/ViewContext";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";
import TechBadge from "./common/TechBadge";

const Publications = () => {
  const { viewMode } = useViewMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionWrapper
      id="publications"
      className={viewMode === "simple" ? "bg-white text-gray-900" : ""}
    >
      <SectionHeader
        emoji="📝"
        title="Research & Education"
        fileName="Publications.md"
        coderTextColor="text-editor-string"
      />

      <div className="grid grid-cols-1 gap-8" ref={ref}>
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
                Analysis of Integration of Personalized AI Assistant with Facial
                Recognition and Voice Representation
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
                recognition and voice representation technologies in creating a
                personalized AI assistant. The study demonstrates practical
                implementation of computer vision and natural language
                processing to build an intelligent system with biometric
                authentication and voice-based interaction capabilities.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://ieeexplore.ieee.org/document/10428670"
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
                      <TechBadge key={tag} tech={tag} />
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
          <SectionHeader
            emoji="🎓"
            title="Education"
            fileName="Education.md"
            className="mb-6!"
            coderTextColor="text-editor-keyword"
          />

          <div className="space-y-4">
            {[
              {
                degree: "B.Tech (CSE) with Honours in AI/ML",
                institution: "Amity University, Noida",
                location: "Noida, Uttar Pradesh",
                year: "2024",
                score: "8.32 CGPA",
              },
              {
                degree: "Grade XII",
                institution:
                  "G.D. Goenka Public School, Indirapuram, Ghaziabad",
                location: "CBSE Board",
                year: "2020",
                score: "89.2%",
              },
              {
                degree: "Grade X",
                institution:
                  "G.D. Goenka Public School, Indirapuram, Ghaziabad",
                location: "CBSE Board",
                year: "2018",
                score: "88.2%",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border transition-all ${
                  viewMode === "coder"
                    ? "bg-editor-sidebar border-editor-line hover:border-editor-keyword"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-md"
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
                      {edu.degree}
                    </h4>
                    <p
                      className={
                        viewMode === "coder"
                          ? "text-editor-keyword"
                          : "text-blue-600 font-medium"
                      }
                    >
                      {edu.institution}
                    </p>
                    <p
                      className={`text-sm mt-1 ${
                        viewMode === "coder" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {edu.location}
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
                      {edu.score}
                    </div>
                    <div
                      className={`text-sm ${
                        viewMode === "coder" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {edu.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Publications;
