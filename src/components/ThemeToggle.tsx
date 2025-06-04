
import { useTheme } from '../contexts/ThemeContext';
import { Switch } from './ui/switch';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-3 glass rounded-full px-4 py-2">
      <Sun className={`w-5 h-5 transition-colors ${isDark ? 'text-white/50' : 'text-galactic-purple'}`} />
      <Switch 
        checked={isDark} 
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-galactic-purple"
      />
      <Moon className={`w-5 h-5 transition-colors ${isDark ? 'text-galactic-purple' : 'text-gray-400'}`} />
    </div>
  );
};

export default ThemeToggle;
