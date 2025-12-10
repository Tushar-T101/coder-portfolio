import { motion } from 'framer-motion';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear } from 'react-icons/vsc';

const Sidebar = () => {
  const icons = [
    { Icon: VscFiles, label: 'Explorer', active: true },
    { Icon: VscSearch, label: 'Search', active: false },
    { Icon: VscSourceControl, label: 'Source Control', active: false },
    { Icon: VscDebugAlt, label: 'Debug', active: false },
    { Icon: VscExtensions, label: 'Extensions', active: false },
  ];

  return (
    <div className="hidden md:flex w-16 bg-editor-sidebar border-r border-editor-line flex-col items-center py-4 space-y-6">
      {/* Top Icons */}
      <div className="space-y-6">
        {icons.map(({ Icon, label, active }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.1 }}
            className={`cursor-pointer ${
              active ? 'text-editor-keyword' : 'text-gray-400 hover:text-editor-text'
            }`}
            title={label}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>

      {/* Bottom Icons */}
      <div className="flex-1" />
      <div className="space-y-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer text-gray-400 hover:text-editor-text"
          title="Account"
        >
          <VscAccount size={24} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer text-gray-400 hover:text-editor-text"
          title="Settings"
        >
          <VscSettingsGear size={24} />
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
