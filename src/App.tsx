import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import "./index.css";

import MobileNav from "./components/MobileNav";
import ScrollToTop from "./components/ScrollToTop";

import { ViewProvider, useViewMode } from "./context/ViewContext";
import ViewToggle from "./components/ViewToggle";

const AppContent = () => {
  const { viewMode } = useViewMode();

  return (
    <div
      className={`flex min-h-screen pb-16 md:pb-0 transition-colors duration-300 ${
        viewMode === "coder" ? "bg-editor-bg" : "bg-gray-50"
      }`}
    >
      {/* VS Code-style Sidebar - Only in Coder Mode */}
      {viewMode === "coder" && <Sidebar />}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* File Tabs - Only in Coder Mode */}
        {viewMode === "coder" && (
          <div className="flex bg-editor-sidebar border-b border-editor-line overflow-x-auto">
            {[
              { name: "Portfolio.tsx", id: "hero", icon: "●", active: true },
              { name: "About.tsx", id: "about", icon: "○" },
              { name: "Experience.json", id: "experience", icon: "○" },
              { name: "Projects.tsx", id: "projects", icon: "○" },
              { name: "Skills.tsx", id: "skills", icon: "○" },
              { name: "Publications.md", id: "publications", icon: "○" },
              { name: "Contact.js", id: "contact", icon: "○" },
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() =>
                  document
                    .getElementById(tab.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`file-tab whitespace-nowrap flex items-center gap-2 px-4 py-2 text-sm border-r border-editor-line hover:bg-editor-bg transition-colors ${
                  tab.active ? "bg-editor-bg text-editor-text" : "text-gray-500"
                }`}
              >
                <span
                  className={
                    tab.active ? "text-editor-keyword" : "text-editor-comment"
                  }
                >
                  {tab.icon}
                </span>
                {tab.name}
              </button>
            ))}
          </div>
        )}

        {/* Main Editor Content */}
        <main className="flex-1 overflow-y-auto scroll-smooth">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Publications />
          <Contact />
        </main>
      </div>

      {viewMode === "coder" && <MobileNav />}
      <ScrollToTop />
      <ViewToggle />
    </div>
  );
};

function App() {
  return (
    <ViewProvider>
      <AppContent />
    </ViewProvider>
  );
}

export default App;
