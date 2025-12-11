import { motion } from "framer-motion";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaTools,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import { useViewMode } from "../context/ViewContext";

const Sidebar = () => {
  const { viewMode } = useViewMode();

  const coderIcons = [
    { Icon: VscFiles, label: "Explorer", active: true },
    { Icon: VscSearch, label: "Search", active: false },
    { Icon: VscSourceControl, label: "Source Control", active: false },
    { Icon: VscDebugAlt, label: "Debug", active: false },
    { Icon: VscExtensions, label: "Extensions", active: false },
  ];

  const simpleIcons = [
    { Icon: FaHome, label: "Home", id: "hero" },
    { Icon: FaUser, label: "About", id: "about" },
    { Icon: FaBriefcase, label: "Experience", id: "experience" },
    { Icon: FaCode, label: "Projects", id: "projects" },
    { Icon: FaTools, label: "Skills", id: "skills" },
    { Icon: FaGraduationCap, label: "Education", id: "publications" },
    { Icon: FaEnvelope, label: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`hidden md:flex w-16 flex-col items-center py-4 space-y-6 border-r transition-colors duration-300 ${
        viewMode === "coder"
          ? "bg-editor-sidebar border-editor-line"
          : "bg-white border-gray-200 shadow-sm z-10"
      }`}
    >
      {/* Top Icons */}
      <div className="space-y-6">
        {viewMode === "coder"
          ? coderIcons.map(({ Icon, label, active }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1 }}
                className={`cursor-pointer ${
                  active
                    ? "text-editor-keyword"
                    : "text-gray-400 hover:text-editor-text"
                }`}
                title={label}
              >
                <Icon size={24} />
              </motion.div>
            ))
          : simpleIcons.map(({ Icon, label, id }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll(id)}
                className="cursor-pointer text-gray-400 hover:text-blue-600 transition-colors tooltip-container relative group"
                title={label}
              >
                <Icon size={20} />

                {/* Tooltip */}
                <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                  {label}
                </span>
              </motion.div>
            ))}
      </div>

      {/* Bottom Icons */}
      <div className="flex-1" />
      <div className="space-y-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`cursor-pointer ${
            viewMode === "coder"
              ? "text-gray-400 hover:text-editor-text"
              : "text-gray-400 hover:text-blue-600"
          }`}
          title="Account"
        >
          <VscAccount size={24} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`cursor-pointer ${
            viewMode === "coder"
              ? "text-gray-400 hover:text-editor-text"
              : "text-gray-400 hover:text-blue-600"
          }`}
          title="Settings"
        >
          <VscSettingsGear size={24} />
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
