import { useViewMode } from "../../context/ViewContext";

interface SectionHeaderProps {
  emoji?: string;
  title: string;
  fileName?: string;
  description?: string;
  coderTextColor?: string; // e.g., 'text-editor-keyword'
  className?: string;
}

const SectionHeader = ({
  emoji,
  title,
  fileName,
  description,
  coderTextColor = "text-editor-keyword",
  className = "",
}: SectionHeaderProps) => {
  const { viewMode } = useViewMode();

  return (
    <div className={`mb-12 ${className}`}>
      {viewMode === "coder" ? (
        <>
          <div className="flex items-center gap-2 mb-6">
            {emoji && <span className="text-2xl">{emoji}</span>}
            <h2 className={`text-2xl md:text-3xl font-bold ${coderTextColor}`}>
              {fileName || title}
            </h2>
          </div>
          {description && (
            <p className="text-editor-comment mb-8 font-mono">
              // {description}
            </p>
          )}
        </>
      ) : (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
      )}
    </div>
  );
};

export default SectionHeader;
