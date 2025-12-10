import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  FaCopy,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useViewMode } from "../context/ViewContext";

const Contact = () => {
  const { viewMode } = useViewMode();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [copied, setCopied] = useState(false);
  const email = "tushar.tugnait02@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
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
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-2xl">📬</span>
          <h2
            className={`text-2xl md:text-3xl font-bold ${
              viewMode === "coder" ? "text-editor-variable" : "text-gray-900"
            }`}
          >
            {viewMode === "coder" ? "Contact.tsx" : "Get In Touch"}
          </h2>
        </div>

        {viewMode === "coder" && (
          <p className="text-editor-comment mb-8 font-mono text-center">
            // Let's build something amazing together
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            {viewMode === "coder" ? (
              // Coder View
              <div className="bg-editor-sidebar p-6 rounded-lg border border-editor-line">
                <h3 className="text-lg font-bold text-editor-function mb-4 font-mono">
                  const contactInfo = {"{"}
                </h3>

                <div className="space-y-4 ml-4">
                  <div
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={handleCopy}
                  >
                    <FaEnvelope className="text-editor-keyword" size={20} />
                    <div>
                      <div className="text-xs text-gray-500 font-mono">
                        email:
                      </div>
                      <div className="text-editor-string font-mono group-hover:text-editor-keyword transition-colors">
                        "{email}"
                      </div>
                      {copied && (
                        <span className="text-xs text-green-500">
                          ✓ Copied!
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhone className="text-editor-keyword" size={20} />
                    <div>
                      <div className="text-xs text-gray-500 font-mono">
                        phone:
                      </div>
                      <div className="text-editor-string font-mono">
                        "+91 9910529707"
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-editor-keyword" size={20} />
                    <div>
                      <div className="text-xs text-gray-500 font-mono">
                        location:
                      </div>
                      <div className="text-editor-string font-mono">
                        "Noida, India"
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-editor-function mt-4 font-mono">
                  {"}"}
                </h3>
              </div>
            ) : (
              // Simple View
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <button
                        onClick={handleCopy}
                        className="text-gray-900 font-medium hover:text-blue-600 transition-colors text-left"
                      >
                        {email}
                        {copied && (
                          <span className="ml-2 text-xs text-green-500">
                            ✓ Copied!
                          </span>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <p className="text-gray-900 font-medium">
                        +91 9910529707
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="text-gray-900 font-medium">Noida, India</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Tushar-T101"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all group ${
                  viewMode === "coder"
                    ? "bg-editor-sidebar hover:bg-editor-selection border border-editor-line"
                    : "bg-white hover:bg-gray-50 border border-gray-200 shadow-sm text-gray-700"
                }`}
              >
                <FaGithub
                  className={`transition-colors ${
                    viewMode === "coder"
                      ? "group-hover:text-editor-keyword"
                      : "group-hover:text-gray-900"
                  }`}
                  size={24}
                />
                <span className="font-mono text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-tugnait"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all group ${
                  viewMode === "coder"
                    ? "bg-editor-sidebar hover:bg-editor-selection border border-editor-line"
                    : "bg-white hover:bg-gray-50 border border-gray-200 shadow-sm text-gray-700"
                }`}
              >
                <FaLinkedin
                  className={`transition-colors ${
                    viewMode === "coder"
                      ? "group-hover:text-editor-keyword"
                      : "group-hover:text-blue-600"
                  }`}
                  size={24}
                />
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={`p-8 rounded-lg flex flex-col justify-center ${
              viewMode === "coder"
                ? "bg-editor-sidebar border-2 border-editor-keyword"
                : "bg-blue-600 text-white shadow-xl"
            }`}
          >
            <div className="text-4xl mb-4">👋</div>
            <h3
              className={`text-2xl font-bold mb-4 ${
                viewMode === "coder" ? "text-editor-function" : "text-white"
              }`}
            >
              Let's Connect!
            </h3>
            <p
              className={`mb-6 leading-relaxed ${
                viewMode === "coder" ? "text-gray-300" : "text-blue-100"
              }`}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Whether you need a
              full-stack developer, an AI/ML engineer, or someone to help scale
              your systems, let's talk!
            </p>
            <a
              href={`mailto:${email}`}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors font-mono ${
                viewMode === "coder"
                  ? "bg-editor-keyword hover:bg-blue-600 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              <FaPaperPlane /> Send Message
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`mt-12 text-center font-mono text-sm ${
            viewMode === "coder" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <p>
            {viewMode === "coder" ? "// " : ""}Built with React, TypeScript,
            TailwindCSS & Framer Motion
          </p>
          <p className="mt-2">© 2024 Tushar Tugnait. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
