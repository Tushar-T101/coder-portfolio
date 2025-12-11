import { useViewMode } from "../../context/ViewContext";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

const TechBadge = ({ tech, className = "" }: TechBadgeProps) => {
  const { viewMode } = useViewMode();

  return (
    <span
      className={`px-3 py-1 text-xs rounded font-mono ${
        viewMode === "coder"
          ? "bg-editor-line text-editor-variable"
          : "bg-gray-100 text-gray-600 font-medium rounded-full"
      } ${className}`}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
