import { createContext, useContext, useState, type ReactNode } from "react";

type ViewMode = "coder" | "simple";

interface ViewContextType {
  viewMode: ViewMode;
  toggleViewMode: () => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [viewMode, setViewMode] = useState<ViewMode>("simple");

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "coder" ? "simple" : "coder"));
  };

  return (
    <ViewContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error("useViewMode must be used within a ViewProvider");
  }
  return context;
};
