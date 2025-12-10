import { motion } from "framer-motion";
import { useViewMode } from "../context/ViewContext";
import { FaCode, FaUserTie } from "react-icons/fa";

const ViewToggle = () => {
  const { viewMode, toggleViewMode } = useViewMode();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleViewMode}
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-500 ease-in-out ${
        viewMode === "coder"
          ? "bg-editor-sidebar/80 border-editor-keyword text-editor-keyword"
          : "bg-white/80 border-gray-200 text-gray-800"
      }`}
    >
      <div className="relative w-12 h-6 bg-gray-200 rounded-full p-1 transition-colors duration-500 ease-in-out overflow-hidden">
        <div
          className={`absolute top-0 bottom-0 w-1/2 bg-current opacity-10 transition-all duration-500 ease-in-out ${
            viewMode === "coder" ? "left-0" : "right-0"
          }`}
        />
        <motion.div
          layout
          className={`w-4 h-4 rounded-full shadow-sm ${
            viewMode === "coder" ? "bg-editor-keyword" : "bg-gray-800"
          }`}
          animate={{
            x: viewMode === "coder" ? 0 : 24,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      <span className="text-sm font-medium hidden md:block">
        {viewMode === "coder" ? "Dev Mode" : "Simple Mode"}
      </span>
      {viewMode === "coder" ? <FaCode /> : <FaUserTie />}
    </motion.button>
  );
};

export default ViewToggle;
