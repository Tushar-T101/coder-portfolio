import { motion } from 'framer-motion';
import { VscFiles, VscAccount, VscExtensions, VscMail } from 'react-icons/vsc';

const MobileNav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { icon: VscFiles, label: 'Home', section: 'hero' },
    { icon: VscAccount, label: 'About', section: 'about' },
    { icon: VscExtensions, label: 'Projects', section: 'projects' },
    { icon: VscMail, label: 'Contact', section: 'contact' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-editor-sidebar border-t border-editor-line z-50 px-6 py-3">
      <div className="flex justify-between items-center">
        {navItems.map(({ icon: Icon, label, section }) => (
          <motion.button
            key={label}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(section)}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-editor-keyword transition-colors"
          >
            <Icon size={24} />
            <span className="text-[10px] font-mono">{label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
